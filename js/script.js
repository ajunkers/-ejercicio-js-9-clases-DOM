class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  constructor(nombreP, familiaP, edadP) {
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  };

  comunicar() {
    return "Comunicando";
  }
  morir() {
    this.estado = "muerto";
  }

}

class Rey extends Personajes {
  anyosReinado;

  constructor(anyosReinadoP, nombreP, familiaP, edadP) {
    super()
    this.anyosReinado = anyosReinadoP;
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  }
  comunicar() {
    return "Vais a morir todos";
  }
}

class Luchador extends Personajes {
  arma;

  #destreza;
  constructor(armaP, nombreP, familiaP, edadP, destrezaP){
    super()
    this.arma = armaP;
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
    this.#destreza = this.controlarDestreza(destrezaP);
  }

  set destreza(destreza){
    this.#destreza = this.controlarDestreza(destreza)
  }

  get destreza(){
    return this.#destreza;
  }

  controlarDestreza(destreza) {
    let resDestreza = 0;
    if(destreza > 10){
      resDestreza = 10;
    } else if (destreza < 0) {
      resDestreza = 0
    } else {
      resDestreza = destreza;
    }
    return resDestreza;
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}

class Asesor extends Personajes {
  personajeAsesora;

  constructor(personajeAsesoraP, nombreP, familiaP, edadP) {
    super()
    this.personajeAsesora = personajeAsesoraP;
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  }

  comunicar(){
    return "No sé por qué, pero creo que voy a morir pronto";

  }
}

class Escudero extends Personajes {
  personajeSirve;
  #gradoPelotismo;

  constructor(personajeSirveP, gradoPelotismoP, nombreP, familiaP, edadP) {
    super()
    this.personajeSirve = personajeSirveP;
    this.#gradoPelotismo = this.controlarPelotismo(gradoPelotismoP);
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  }


  comunicar(){
    return "Soy un loser";
  }

  set gradoPelotismo(pelotsimo){
   this.#gradoPelotismo = this.controlarPelotismo(pelotsimo);
  }

  get gradoPelotismo(){
    return this.#gradoPelotismo;
  }

  controlarPelotismo(pelotismo) {
    let resPelotsimo = 0;
     if(pelotismo > 10){
      resPelotsimo = 10;
    } else if (pelotismo < 0) {
      resPelotsimo = 0;
    } else {
      resPelotsimo = pelotismo;
    }
    return resPelotsimo;
  }

}

let jofrey = new Rey(3, "Joffrey Baratheon", "Baratheon", 20);
let jamie = new Luchador("Bazoca", "Jaime Lannister", "Lanister", 20, 5);
let bronn = new Escudero(jamie, 9, "bronn", "sin familia", 60);
let daenerys = new Luchador("dragones", "Daenerys Targaryen", "Targaryen", 28, 10);
let tyrion = new Asesor(daenerys, "Tyrion Lannister", "Lannister", 36)

const personajes = [jofrey, jamie, bronn, daenerys, tyrion];

clonePersonaje(personajes);

function clonePersonaje(personajes) {
  let dummy = document.querySelector(".personaje-dummy").cloneNode(true);
  dummy.classList.remove("personaje-dummy");


  personajes.map(function (element) {
    dummy.querySelector(".accion:last-child")
      .addEventListener("click", () => { matarPersonajeEvent(i, cardsInterval, personajeDumy); });
    dummy.querySelector(".accion:first-child")
      .addEventListener("click", () => { hablarPersonaje(i); });
    dummy.querySelector("h2.nombre").textContent = element.nombre;
    dummy.querySelector(".info>ul>li").textContent = "Edad: " + element.edad + " años";
    element.estado ? dummy.querySelector(".fa-thumbs-down").setAttribute("hidden", true) : dummy.querySelector(".fa-thumbs-up").setAttribute("hidden", true);

    element.estado ? dummy.querySelector("img").classList.add("reves") : dummy.querySelector("img").classList.remove("reves");

    const nombreFoto = element.nombre.split(" ", 1);
    dummy.querySelector("img").setAttribute("src", "img/" + nombreFoto[0].toLowerCase() + ".jpg");
    dummy.querySelector("img").setAttribute("alt", element.nombre);

    dummy.querySelector(".personaje-overlay>ul").children[0].innerHTML = "Años de reinado: ";
    dummy.querySelector(".personaje-overlay>ul").children[1].innerHTML = "Arma: ";
    dummy.querySelector(".personaje-overlay>ul").children[2].innerHTML = "Destreza: ";
    dummy.querySelector(".personaje-overlay>ul").children[3].innerHTML = "Peloteo: ";
    dummy.querySelector(".personaje-overlay>ul").children[4].innerHTML = "Asesora a: ";
    dummy.querySelector(".personaje-overlay>ul").children[5].innerHTML = "Sirve a: ";
    switch (element.cargo) {
      case "Rey":
        dummy.querySelector(".personaje-overlay>ul").children[0].innerHTML = "Años de reinado: " + element.anyosReinado;

        dummy.querySelector(".emoji").innerHTML = "👑";
        break;
      case "Luchador":
        dummy.querySelector(".personaje-overlay>ul").children[1].innerHTML = "Arma: " + element.arma;
        dummy.querySelector(".personaje-overlay>ul").children[2].innerHTML = "Destreza: " + element.destreza;

        dummy.querySelector(".emoji").innerHTML = "🗡";
        break;
      case "Escudero":
        dummy.querySelector(".personaje-overlay>ul").children[3].innerHTML = "Peloteo: " + element.pelotsimo;
        dummy.querySelector(".personaje-overlay>ul").children[5].innerHTML = "Sirve a: " + element.personajeSirvee;

        dummy.querySelector(".emoji").innerHTML = "🛡";
        break;
      case "Asesor":
        dummy.querySelector(".personaje-overlay>ul").children[4].innerHTML = "Asesora a: " + element.personajeAsesora;

        dummy.querySelector(".emoji").innerHTML = "🎓";
        break;
      default:
        break;
    }
    console.log(dummy);
    debugger;

  })

}

const matarPersonajeEvent = (i, cardsInterval, personajeDumy) => {
  if (personajes[i].estado === "vivo") {
    clearInterval(cardsInterval);
    limpiarListaPersonajesDom(personajeDumy);
    personajes[i].morir();
    personajesDom();
  }
};

const hablarPersonaje = (i) => {
  const comunicacionesNode = document.querySelector(".comunicaciones");
  comunicacionesNode.querySelector("p").textContent = personajes[i].comunicar();
  comunicacionesNode.querySelector("img").src = `../img/${personajes[i].nombre.toLowerCase().split(" ")[0]}.jpg`;
  comunicacionesNode.querySelector("img").alt = `${personajes[i].nombre} de juego de tronos`;
  comunicacionesNode.classList.add("on");
  setTimeout(() => {
    comunicacionesNode.classList.remove("on");
  }, 2000);
};

const limpiarListaPersonajesDom = (personajeDumy) => {
  const personajesListDom = document.querySelector(".personajes");
  personajesListDom.innerHTML = "";
  personajesListDom.append(personajeDumy);
};

class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";
  cargo;

  constructor(nombreP, familiaP, edadP) {
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  };

  comunicar() {
    return "Comunicando";
  }
  morir() {
    this.estado = "muerto"
  }

}

class Rey extends Personajes {
  anyosReinado;

  constructor(anyosReinadoP, nombreP, familiaP, edadP) {
    super()
    this.anyosReinado = anyosReinadoP;
    this.cargo = "Rey"
    this.nombre = nombreP
    this.edad = edadP;
    this.familia = familiaP;
  }
  comunicar() {
    return "Vais a morir todos";
  }
}

class Luchador extends Personajes {
  arma;
  destreza;
  constructor(armaP, nombreP, familiaP, edadP, destrezaP) {
    super()
    this.arma = armaP;
    this.cargo = "Luchador"
    this.nombre = nombreP
    this.edad = edadP;
    this.familia = familiaP;
    this.destreza = destrezaP;
  }
  set destreza(destreza) {
    if (destreza > 10) {
      this.destreza = 10;
    } else if (destreza < 0) {
      this.destreza = 0
    } else {
      this.destreza = destreza;
    }
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }
}

class Asesor extends Personajes {
  personajeAsesora;

  constructor(personajeAsesoraP, nombreP, familiaP, edadP) {
    super()
    this.personajeAsesora = personajeAsesoraP.cargo;
    this.cargo = "Asesor"
    this.nombre = nombreP
    this.edad = edadP;
    this.familia = familiaP;
  }
  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto"
  }
}

class Escudero extends Personajes {
  personajeSirve;
  gradoPelotismo;

  constructor(personajeSirveP, gradoPelotismoP, nombreP, familiaP, edadP) {
    super()
    this.personajeSirve = personajeSirveP.cargo;
    this.gradoPelotismo = gradoPelotismoP;
    this.cargo = "Escudero";
    this.nombre = nombreP;
    this.edad = edadP;
    this.familia = familiaP;
  }

  comunicar() {
    return "Soy un loser"
  }

  set gradoPelotismo(pelotsimo) {
    if (pelotsimo > 10) {
      this.gradoPelotismo = 10;
    } else if (pelotsimo < 0) {
      this.gradoPelotismo = 0
    } else {
      this.gradoPelotismo = pelotsimo;
    }
  }

}

let jofrey = new Rey(3, "Joffrey Baratheon", "Baratheon", 20);
let jamie = new Luchador("Bazoca", "Jamie Lannister", "Lanister", 20, 5);
let bronn = new Escudero(jamie, 9, "bronn", "sin familia", 60);
let daenerys = new Luchador("dragones", "Daenerys Targaryen", "Targaryen", 28, 10);
let tyrion = new Asesor(daenerys, "Tyrion Lannister", "Lannister", 36)

const personajes = [jofrey, jamie, bronn, daenerys, tyrion];

//mensajeLuchadores(personajes);

function mensajeLuchadores(personajes) {
  const luchadores = personajes.filter(elemento => elemento.cargo === "Luchador");

  return luchadores.map(elemento => elemento.comunicar());
}

console.log(personajes[0].serie);
console.log("");

function mensajes(personajes) {

  personajes.map(elemento => console.log(elemento.comunicar()));
}

mensajes(personajes);

jamie.morir();
tyrion.morir();

function ordenarTipoEdad(personajes) {
  const personajesOrdenados = personajes.sort(function (a, b) {
    if (a.cargo > b.cargo) return -1;
    if (b.cargo > a.cargo) return 1;

    if (a.edad > b.edad) return 1;
    if (b.edad > a.edad) return -1;

    return 0;
  });

  return personajesOrdenados;
}


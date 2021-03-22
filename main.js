"use strict";
// Se definen las importaciones de las clases a utilizar
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var phone_1 = require("./phone");
var mail_1 = require("./mail");
var person_1 = require("./person");
// Se crean varios registros de las distintas clases para utilizar en el ejercicio
var address1 = new address_1.Address("Paseo de Ronda", 5, 15008, "A Coruña", "A Coruña");
var address2 = new address_1.Address("Serrano", 24, 28008, "Madrid", "Madrid", 6, "D");
var address3 = new address_1.Address("Parque Olivar", 8, 46258, "Valencia", "Valencia");
var address4 = new address_1.Address("Plaza de Pontevedra", 8, 15003, "A Coruña", "A Coruña");
var address5 = new address_1.Address("Gran Vía", 3, 28003, "Madrid", "Madrid");
var mail1 = new mail_1.Mail("julio.gomez@gmail.com", "casa");
var mail2 = new mail_1.Mail("julio.gomez@laempresa.es", "trabajo");
var mail3 = new mail_1.Mail("ana.alvarez@ingetega.com");
var mail4 = new mail_1.Mail("julio_gomez40@hotmail.com", "casa");
var mail5 = new mail_1.Mail("mariosw@yahoo.com", "casa");
var phone1 = new phone_1.Phone(914528574, "fijo");
var phone2 = new phone_1.Phone(625413652, "movil");
var phone3 = new phone_1.Phone(981278415, "fijo");
var phone4 = new phone_1.Phone(623574152, "movil");
var phone5 = new phone_1.Phone(945874126, "fijo");
var person1 = new person_1.Person("Ana", "Alvarez", 55, "32771501C", new Date("05-17-1999"), "rojo", "femenino", [address1], [mail1], [phone1], ["Informática"]);
var person2 = new person_1.Person("Javier", "Lopez", 55, "58214789B", new Date("01-23-1991"), "azul", "femenino", [address2], [mail2], [phone2], ["Carpintero"]);
var person3 = new person_1.Person("Rosa", "Mateo", 55, "35897456G", new Date("06-24-2011"), "verde", "femenino", [address3], [mail3], [phone3], ["Electricista"]);
// Se introducen los registros creados de la clase Person en un array, para hacer las operaciones requeridas con él
console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------");
console.log("Estos son los 3 registros de persona mostrados por el Terminal");
console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------");
var morePersons = [];
morePersons.push((person1), (person2), (person3));
console.log(morePersons[0]);
console.log(morePersons[1]);
console.log(morePersons[2]);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("Buscamos el DNI: 32771501C, y modificamos en el registro en que se encuentra, la dirección, el mail y el teléfono");
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------------------------------------");
// Cambiar/Modificar elementos en el array
var i = 0;
var dnib = "32771501C"; //Este es el DNI por el que vamos a buscar
for (i = 0; i < morePersons.length; i++) {
    if (morePersons[i].dni == dnib) {
        morePersons[i].addresses.splice(i, 1, (address5));
        morePersons[i].emails.splice(i, 1, (mail5));
        morePersons[i].phones.splice(i, 1, (phone5));
        console.log(" ");
        console.log(" ");
        console.log("Se encuentra el DNI buscado en el índice ", i);
        console.log(" ");
        console.log(" ");
        console.log("Cambiamos la dirección, el mail y el teléfono al registro ", i);
        console.log(" ");
        console.log(" ");
        console.log("--------------------------------------------------------");
        console.log("Este es el resultado, con la modificación de los datos: ");
        console.log("--------------------------------------------------------");
        console.log(" ");
        console.log(" ");
        console.log(morePersons[0]);
        console.log(morePersons[1]);
        console.log(morePersons[2]);
    }
    else {
        console.log(" ");
        console.log("No se encuentra el DNI indicado en el índice ", i);
        console.log(" ");
    }
}

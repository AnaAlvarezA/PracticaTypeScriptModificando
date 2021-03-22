// Se definen las importaciones de las clases a utilizar

import { Address } from "./address";
import { Phone } from "./phone";
import { Mail } from "./mail";
import { Person } from "./person";

// Se crean varios registros de las distintas clases para utilizar en el ejercicio

let address1: Address = new Address ("Paseo de Ronda", 5, 15008, "A Coruña", "A Coruña");
let address2: Address = new Address ("Serrano", 24, 28008, "Madrid", "Madrid", 6, "D");
let address3: Address = new Address ("Parque Olivar", 8, 46258, "Valencia", "Valencia");
let address4: Address = new Address ("Plaza de Pontevedra", 8, 15003, "A Coruña", "A Coruña");
let address5: Address = new Address ("Gran Vía", 3, 28003, "Madrid", "Madrid");

let mail1: Mail = new Mail ("julio.gomez@gmail.com", "casa");
let mail2: Mail = new Mail ("julio.gomez@laempresa.es", "trabajo");
let mail3: Mail = new Mail ("ana.alvarez@ingetega.com");
let mail4: Mail = new Mail ("julio_gomez40@hotmail.com", "casa");
let mail5: Mail = new Mail ("mariosw@yahoo.com", "casa");

let phone1: Phone = new Phone (914528574, "fijo");
let phone2: Phone = new Phone (625413652, "movil");
let phone3: Phone = new Phone (981278415, "fijo");
let phone4: Phone = new Phone (623574152, "movil");
let phone5: Phone = new Phone (945874126, "fijo");


let person1: Person = new Person ("Ana", "Alvarez", 55, "32771501C", new Date("05-17-1999"), "rojo", "femenino", [address1], [mail1], [phone1], ["Informática"]);
let person2: Person = new Person ("Javier", "Lopez", 55, "58214789B", new Date("01-23-1991"), "azul", "femenino", [address2], [mail2], [phone2], ["Carpintero"]);
let person3: Person = new Person ("Rosa", "Mateo", 55, "35897456G", new Date("06-24-2011"), "verde", "femenino", [address3], [mail3], [phone3], ["Electricista"]);


// Se introducen los registros creados de la clase Person en un array, para hacer las operaciones requeridas con él


console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------"); 
console.log("Estos son los 3 registros de persona mostrados por el Terminal");
console.log("--------------------------------------------------------------");
console.log("--------------------------------------------------------------"); 


let morePersons:Person[] = [];

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

let i:number = 0;
let dnib:string = "32771501C"  //Este es el DNI por el que vamos a buscar

for(i = 0; i < morePersons.length; i++) {
  if (morePersons[i].dni== dnib) {
        
        morePersons[i].addresses.splice(i, 1, (address5));
        morePersons[i].emails.splice(i, 1, (mail5));
        morePersons[i].phones.splice(i, 1, (phone5));
        console.log(" ");
        console.log(" ");
        console.log("Se encuentra el DNI buscado en el índice ", i );
        console.log(" ");
        console.log(" ");
        console.log("Cambiamos la dirección, el mail y el teléfono al registro ", i );
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
      
'use strict'

class Database {
  // recuperar los usuarios - el array
  getAllUsers = () => {
    // recuperar el string
    const usersStr = localStorage.getItem("users");
    // convertir el string en un array
    const usersArr = JSON.parse( usersStr );

    // si todavia no hay usuarios, devolver un array vacío
    if (usersArr === null) {
      return [];
    } else {
      return usersArr;
    }

  }

  saveNewUser = (newUser) => {

    // recuperar el array de los usuarios del localStorage
    const usersArr = this.getAllUsers();

    // actualizar el array de users
    usersArr.push(newUser);

    console.log("usersArr", usersArr);

    // convertir el array a un string
    const usersStr = JSON.stringify(usersArr);

    // almacenarlo de nuevo
    localStorage.setItem("users", usersStr);
  }
}

const db = new Database();



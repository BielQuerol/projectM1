'use strict';


class Validator {
    constructor() {
        this.invalidEmailError = 'Invalid email'
        this.emailExistsError = 'This email is already registered'
        this.passwordError = 'Enter a password of 6 or more characters'
        this.repeatPasswordError = "Fields don't match"

        //objeto con los errores mostrados al usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,

        }
    }
        //validar el nombre del email
        validateValidEmail = (email) =>{
           
            
            if (this.emailIssValid(email)) {
                delete this.errors.invalidEmailError;

            }
             else {
                //si el email no es válido poner mensaje que se mostrará
                this.errors.invalidEmailError = this.invalidEmailError; 
            }
        }
            //si el email es válido poner mensaje de OK
            //función auxiliar de validate email
        emailIsValid = (email) => {
            //RegEx objeto especial contiene las reglas de la sintaxis
            const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // método test prueba si la cadena cumple las reglas y devuelve true or false
            const isValid = emailRegEx.test(email);

            return isValid;
        }
         //validar si el email está tomado
         validateUniqueEmail = (newEmail) =>{
             const usersDB = db.getAllUsers();
         
             let emailUnique = true;


             if(userDB.length > 0){
                 usersDB.forEach{ (userObj) => {
                   //si el email ya está registrado cambia el valor a false
                    if (userObj.email === newEmail){
                    emailUnique = false;
                     }
                 }
             }
         if (emailUnique) {
             //quitar el mensaje error
             delete this.errors.emailExistsError;
         } else{
              //si el email ya existe poner el mensaje de nuevo
             this.errors.emailExistsError = this.emailExistsError
         }
            
        }

        //validar si no está tomado
        

        //validar la longitud del password
        validatePassword = (password) =>{
            if (password.length > 6) {
                // quita el mensaje de error
                delete this.errors.passwordError;

            }
            else {
                // si el password tiene menos de 6 carácteres, mostrar el mensaje.
                this.errors.passwordError = this.passwordError;
            }
        }

        // validar si los dos campos coinciden password y repeatpasswors
        validatePasswordRepeat = (password) => {

            if (password === passwordRepeat) {
                //si los passwords son iguales, quitar el error
                delete this.errors.repeatPasswordError;
            
            }
            else{
                // si no coinciden, mostrar el mensaje
                this.errors.repeatPasswordError = this.repeatPasswordError;
            }
        }
        //obtener el objeto con errores para mostrar al user en la página signup
        getErrors = () => {
            return this.errors;
        }

        // reinicializar los errores mostrados para el próximo signup
        resetValidator = () => {
            this.errors = {
                invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError,
            }
        }
}



}
const validator = new Validator();
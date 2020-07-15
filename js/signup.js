'use strict';


class Signup{
    
        constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");

        this.buttonInput = document.querySelector(".signup-button");
        this.errorsWrapper = document.querySelector(".message-container");



    }


    //cambios del input "email"
    handleEmailInput = (event) => {
        const email = event.target.value;
        
    //validar el texto del input email
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    //si el nombre de email es válido
    if (!errors.invalidEmailError) {
        //comprueba si el email está registrado
        validator.validateUniqueEmail(email);
    }
    // TODO mostrar los errores, si existen algunos
    this.setErrorMessages();
}
  
    //cambios del input "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        //validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
        // mostrar todos los errores, si existen algunos
        this.setErrorMessages();
    }  


        //cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;
        // validar el texto del input password(repeat)
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
        // mostrar todos los errores, si existen algunos
        this.setErrorMessages();
    } 

    //gestionar el envío de datos (submit)
    saveData = (event) => {
        //cuando sucede el event, cancelarlo   
        event.preventDefault();
        //recoger el valor de cada input
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;

        /*function createUser(name, email, password) {
        const userObj = {
            name,
            email,
            password
        }
        return userObj;
        }*/
        const newUser = new User(name, email, password);
        
        //guardar nuevo usuario en la base de datos (fake)
        db.saveNewUser( newUser);
        
        //vaciar el formulario
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();
    }

    //registrar funciones para cada input/campo
    addListeners = () => {
       // para "escuchar los cambios de texto"
     this.emailInput.addEventListener("input", this.handleEmailInput);
      this.passwordInput.addEventListener("input", this.handlePasswordInput);
      this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

      this.buttonInput.addEventListener("click", this.saveData)
    }

    showSuccessMessage = () => {
        //vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";
        
        const errorsObj = validator.getErrors();
        //convertir el objeto en un array de strings
        const errorsStringsArr = Object.values(errorsObj);


        if (errorsStringsArr.length > 1) {
            return;
        }

        const successMessageP = document.createElement('p');
        successMessageP.innerHTML = "La cuenta ha sido creada con éxito";
        this.errorsWrapper.appendChild(successMessageP);
        console.log(this.errorsWrapper)
    }
    
    removeMessages = () => {
        setTimeout( () => {
            this.errorsWrapper.innerHTML = "";
        }, 2000)
    }

    
    setErrorMessages = () => {
    //vaciar los errores para que no se sumen
    this.errorsWrapper.innerHTML = "";
    
    const errorsObj = validator.getErrors();
    //convertir el objeto a un array de strings
    const errorsStringsArr = Object.values(errorsObj);

    errorsStringsArr.forEach( (errorStr) => {
        const errorMessageP = document.createElement('p');
        errorMessageP.innerHTML =errorStr;

        this.errorsWrapper.appendChild(errorMessageP);
    })
  }

 }

//crear instancia del signup
const signup = new Signup();

window.addEventListener("load", signup.addListeners );
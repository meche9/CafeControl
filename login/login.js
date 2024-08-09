const user = document.querySelector('.user');
const password= document.querySelector('.password');
const btnLogin = document.querySelector('.btn-login');
const btnCheckIn = document.querySelector('.btn-checkIn');

let data = localStorage.getItem('loginApp');
let users = JSON.parse(data);

const validation= (user) => {    
    var set = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!set.test(user)) {
        return false;

    }
        return true;
}

/* ENFOCAR ELEMENTO*/

const foco = (element) =>{
    document.querySelector(element).focus();
}



//***VALIDACION DEL CORREO */
user.addEventListener('keyup', event => {
    if (event.key == 'Enter' && user.value) {
      if  (validation (user.value)){
            foco(".password"); 
        }  else {
            alert ("Email No Válido") ;
            user.value="";
        }    
    }
    });

/***VALIDACION DEL PASSWORD */ 
password.addEventListener('keyup', event => {
    if (event.key == 'Enter' && password.value) {
            foco(".btn-login");       
    }
    });   

 
/****BUSCAR EN LOCALSTORE**/
const seachUser = (password, email) => {

    users.forEach((element) => {
        if ((password ==element.contraseña) && (email==element.email)) {
            return  true;
        }else{
            return false;
    }    
    });
}




    /***BOTON INICIAR SESION */
btnLogin.addEventListener('click', event => {
    
    if (password.value && user.value) {
            seachUser (password.value,user.value);
            
            if (seachUser()) {  
                 window.location.href="../dashBoard/index.html";
            } else{
                    alert("¡Parametros Incorrectos!");
                    user.value="";
                    password.value="";
                    foco(".user");
            }
            
        }else {
        alert("¡Registre los Datos!");
        user.value="";
        password.value="";
        foco(".user");
    }        
     
})


btnCheckIn.addEventListener ('click', event => {
    window.location.href="../Register/register.html";
})








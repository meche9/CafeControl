const user = document.querySelector('.user');
const password= document.querySelector('.password');
const btnLogin = document.querySelector('.btn-login');
const btnCheckIn = document.querySelector('.btn-checkIn');

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

/****BUSCAR EN LOCALSTORE**/
const seachUser = (password, email) => {
    let data = localStorage.getItem('loginApp');

    data=JSON.parse(data);
    if ((password == data.contraseña) && (email==data.email)) {
        return  true;
    }else{
        return false;
    }
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

    /***BOTON INICIAR SESION */
btnLogin.addEventListener('click', event => {

     /*   localStorage.setItem('loginApp',
            JSON.stringify({
                id:1,
                email:'mmrr28@gmail.com',
                contraseña:"1234"
            })*/
      
      seachUser (password.value,user.value);
      if (seachUser()) {
        /*busca el enlace a la pagina dashboard*/  
        window.location.href="../dashBoard/index.html";
      } else{
        alert("¡Parametros Incorrectos!");
        user.value="";
        password.value="";
        foco(".user");
      }
       
})


btnCheckIn.addEventListener ('click', event => {
    window.location.href="../Register/register.html";
})








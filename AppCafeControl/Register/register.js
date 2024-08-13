const nameUser= document.querySelector(".name");
const email= document.querySelector(".email");
const password= document.querySelector(".password");
const phone= document.querySelector(".phone");
const btnRegister= document.querySelector(".btn-register");
const btnLogin = document.querySelector(".btn-login");

/* ENFOCAR ELEMENTO*/
const foco = (element) =>{
    document.querySelector(element).focus();
}

/***INGRESAR NOMBRE DE USUARIO*/ 
nameUser.addEventListener('keyup', event => {
    if (event.key == 'Enter' && nameUser.value) {
            foco(".email");       
    }
    }); 

    const validationEmail= (email) => {    
        var set = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
        if (!set.test(email)) {
            return false;
    
        }
            return true;
    }

//***VALIDACION DEL CORREO */
email.addEventListener('keyup', event => {
    if (event.key == 'Enter' && email.value) {
      if  (validationEmail (email.value)){
            foco(".password"); 
        }  else {
            alert ("Email No Válido") ;
            email.value="";
        }    
    }
    });


/***VALIDACION DEL PASSWORD */ 
password.addEventListener('keyup', event => {
    if (event.key == 'Enter' && password.value) {
            foco(".phone");       
    }
    });  

/***CELULAR */
phone.addEventListener('keyup', event => {
    if (event.key == 'Enter' && phone.value) {
            foco(".btn-register");       
    }
    });    

    /****BUSCAR EN LOCALSTORE*
const seachUser = (dataOld) => {
    let data = localStorage.getItem('loginApp');
    dataOld=JSON.parse(data);
}*/



/*AGREGAR LISTA DE PARAMETROS AL LOCALSTORAGE*/
const addDatos = (nameUser,email,password,phone,data)=>{
    // console.log(dataOld);
     if (data){
        console.log(data);
        console.log (nameUser, email);
        
        data.push({
            nameUser:nameUser,
            email:email,
            password:password,
            phone:phone});  
          
     } else{
        data=[{nameUser,email,password,phone}];
     }
     localStorage.setItem('loginApp', JSON.stringify(data));

}
    

 /***BOTON REGISTRAR*/
   btnRegister.addEventListener('click', event => {
    //seachUser(dataOld);
    let data = localStorage.getItem('loginApp');
        data=JSON.parse(data);
  

    if (data){
        addDatos(nameUser.value,email.value,password.value,phone.value, data);
    }else {
        addDatos(nameUser.value,email.value,password.value,phone.value);
    }
        
        alert ("Usuario Registrado");
        nameUser.value = "";
        email.value ="";
        password.value="";
        phone.value ="";


    
    
})   

//BOTON  INICIO

btnLogin.addEventListener ('click', event => {
    window.location.href="../login/index.html";
})


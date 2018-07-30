$(document).ready(function () {
  function ingresoFacebook(){
    if(!firebase.auth().currentUser){
       var provider = new firebase.auth.FacebookAuthProvider();
       provider.addScope('public_profile');
  
       firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        //var name = result.user.displayName;
  
        console.log(user);
        console.log(result.user.displayName);
        console.log(result.user.photoURL);
        console.log(result.user.email);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          if(errorCode==='auth/account-exists-with-different-credential'){
            alert('Es el mismo usuario');
            }
        });

       // realizando acciones cuando el usuario este autenticado
        firebase.auth().onAuthStateChanged(function(user) {
       // si el usuario esta activo
       if (user) {
          window.location.href = 'espacioFotos11.html';
         } else {
         console.log('usuario no logeado');
         }
       });

    }else{
        firebase.auth().signOut();
    }
  }
  
 
 
 // document.getElementById('btn-facebook').addEventListener('click',hola,false);
   
 document.getElementById('btn-facebook').addEventListener('click',ingresoFacebook,false);
  
 
// autenticando al usuario con google
/* var provider = new firebase.auth.GoogleAuthProvider();
  $('#google').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    });
  });*/
  // realizando acciones cuando el usuario este autenticado
 /* firebase.auth().onAuthStateChanged(function(user) {
    // si el usuario esta activo
    if (user) {
      window.location.href = 'views/perfil.html';
    } else {
      console.log('usuario no logeado');
    }
  });*/

   // Login tradicional
   $("#login").click(function () {
    var email = $("#first_name").val();
    var password = $("#password").val();
    if (email == '' || password == '') {
      alert("Por favor llena todos los datos");
    } else if ((password.length) < 6) {
      alert("La clave no debe ser menor a 6 caracteres");
    } else {
      window.location.href = '../views/newsfeed.html';
    }
  });


 /* $('#google').on('click', function () {
     //obtener lso datos del usuario registrado
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = '../views/newsfeed.html';
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        console.log('usuario no logeado');
        // User is signed out.
        // ...
      }
  });

});*/


  // Login mediante google 
 /*var provider = new firebase.auth.GoogleAuthProvider();
  $('#google').on('click', function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result.user);
      window.location.href = '../views/newsfeed.html';

      // Almacenamos la imagen de perfil en una variable
      $('#root').append('<img src=\'' + result.user.photoURL + '\' />');
      var imgprofile1 = $('#root').children().eq(0).prop('src');
      localStorage.setItem('imgprofile', imgprofile1);
    });
  }); */





//obtener lso datos del usuario registrado
/*  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
  });*/

  // Funcion para correr el slider
  $(document).ready(function () {
    $('.slider').slider();
  });

});
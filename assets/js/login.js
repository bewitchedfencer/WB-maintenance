//first the user lands on the webpage and the document loads the DOM
//initialize firebase

var config = {
    apiKey: "AIzaSyAuB-jzrX4AGRIL5BAsfId5-_dyu7Tut2I",
    authDomain: "wb-maintenance.firebaseapp.com",
    databaseURL: "https://wb-maintenance.firebaseio.com",
    projectId: "wb-maintenance",
    storageBucket: "wb-maintenance.appspot.com",
    messagingSenderId: "976828334545"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();

$(document).ready(function(){
    //console logs ready!
    console.log("ready!");
    //the following HTML is added to the DOM showing a login box
    $("#whereItHappens").html(`<div class="col-xs-8 col-xs-offset-2" id="loginBox">
    <p class="text-center" id="loginWelcome">Welcome to Wise Brothers, Inc. maintenance home. Please login to send maintenance requests and check on the status of your request</p>
    <form>
            <div class="form-group">
              <label for="Email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="text-center">
            <button type="submit" class="btn btn-inverse logins" id="loginSubmit">Login</button>
            <button type="submit" class="btn btn-inverse logins" id="passwordReset">Forgot Password?</button>
            </div>
          </form>
    </div>
</div>`);
//The background colors are made to match the warehouseorlando.com website
    $("body").css("background-color", "#9FB27A");    
});

var email = "";
var password = "";

//when the login button is clicked
function loginPushed(event){
    //grab the variables input by the user
    email = $("#email").val();
    password = $("#password").val();
    event.preventDefault();
    console.log("logged in clicked");
    console.log("email", email);
    console.log("password", password);
    $("#email").val("");
    $("#password").val("");
auth.signInWithEmailAndPassword(email, password).then(function(){
    console.log("logged in");    
}).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

function logOut(event){
    event.preventDefault();
    auth.signOut().then(function(){
        console.log("logged out");
    }).catch(function(error){
        console.log("an error occurred ", error);
    });
};

$(document).on("click", "#loginSubmit", loginPushed);
$(document).on("click", "#logout", logOut);
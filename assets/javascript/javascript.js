 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAuB-jzrX4AGRIL5BAsfId5-_dyu7Tut2I",
    authDomain: "wb-maintenance.firebaseapp.com",
    databaseURL: "https://wb-maintenance.firebaseio.com",
    projectId: "wb-maintenance",
    storageBucket: "",
    messagingSenderId: "976828334545"
  };

  firebase.initializeApp(config);

var database = firebase.database();

$("#submit-button").on("click", function(event){
    event.preventDefault();
    var address = $("#address").val().trim();
    var mainCat = $("#allCatsMaintenance").val().trim();
    var site = $("#all-sites").val().trim();
    var description = $("#description").val().trim();
    var tenant = {
        name:$("#name").val().trim(),
        phoneEmail:$("#contact").val().trim()
    }

    //we create this local variable object so we can push it to our database
    //and make it cleaner. Also making the variables above allows for data
    //validation.

    var newMaintenance ={
        address: address,
        maintenanceCategory:mainCat,
        site:site,
        description:description,
        tenantContact:tenant
    };
    
    
    database.ref().push(newMaintenance);

    console.log(newMaintenance.address);
    console.log(newMaintenance.maintenanceCategory);
    console.log(newMaintenance.site);
    console.log(newMaintenance.description);
    console.log(newMaintenance.tenantContact.name);
    console.log(newMaintenance.tenantContact.phoneEmail);
    
    $("#address").val("");
    $("#description").val("");
    $("#name").val("");
    $("#contact").val("");
    
    
});

//startover from here with converting the train home to the maintenance website
database.ref().on("child_added", function(childSnapshot, prevChildKey){
    var newChild = childSnapshot.val();
    var trainName = newChild.name;
    var trainDestination = newChild.destination;
    var trainStart = newChild.start;
    var trainFrequency = newChild.frequency;
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainFrequency);


    //need to figure out the format for the time instead of date
    //check out moment.js docs for the information
    //try to use unix if it can be used to do formulas with time
    var timeFormat="H HH";
    var frequencyFormat="m mm";
    var convertedTime=moment(trainStart, timeFormat);
    var convertedFrequency = (trainFrequency, frequencyFormat);

    // var totalMonths = (moment(convertedTime).diff(moment(), "months"))*(-1);
    
    // var nextTrain = 

console.log(convertedTime);
    
    $("#trainTimes").append(`<tr><td>${trainName}</td><td>${trainDestination}</td><td>${trainStart}</td><td>${trainFrequency}</td></tr>`);

});
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

const database = firebase.database();

$("#submit-button").on("click", function(event){
    //add a timestamp to each item addedd
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

//whenever a new maintenance item is added, the new information is stored in these variables.
database.ref().on("child_added", function(childSnapshot, prevChildKey){
    var newChild = childSnapshot.val();
    var newAddress = newChild.address;
    var newMainCat = newChild.maintenanceCategory;
    var newSite = newChild.site;
    var newDescription = newChild.description;
    var newTenant = newChild.tenantContact.name;
    var newContact = newChild.tenantContact.phoneEmail;
    console.log("address", newAddress);
    console.log("maintenance category", newMainCat);
    console.log("newSite", newSite);
    console.log("description", newDescription);
    console.log("tenant name", newTenant);
    console.log("phone or email", newContact);
    
    //fix this appending to finish the edits of the train times activity
    $("#maintenanceItems").append(`<tr><td>${trainName}</td><td>${trainDestination}</td><td>${trainStart}</td><td>${trainFrequency}</td></tr>`);

});
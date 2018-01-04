auth.onAuthStateChanged(function(user){
    if(user){
        // $("#whereItHappens").empty();
        console.log("logged in to maintenance site");
    }
    else{
        $("#whereItHappens").empty().html(`<p class="text-center" id="goodbye">Thank you for using Wise Brothers, Inc maintenance program.`);
    }
});


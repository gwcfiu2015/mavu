//--------------------- Script for Choose a Charity ---------------------------

Parse.initialize("1AA9MEPQBbQOl5r3zQprN06KY2QUs32Y2n418Sv4", "uvPr6EALlpWKQ0Tij361i4et8AnQi7UqdjZbgRij");

var CharityInformation = Parse.Object.extend("CharityInformation");


function addToDatabase() {
    

    var charityInformation1 = new CharityInformation();

   
    //save it to the database

    charityInformation1.save({
        Charity: document.getElementById("charity").value,
        Name: document.getElementById("name").value,
        Number: document.getElementById("number").value,
        Address: document.getElementById("address").value,
        BriefDescription: document.getElementById("briefDescription").value
    }, {
        success: function (charityInformation1) {
            
            console.log(charityInformation1.id);
            showCharityInformation(charityInformation1.id);
        },
        error: function (charityInformation1, error) {
            alert("error");
            //error message 
        }
    });

    event.preventDefault();
}


function showCharityInformation(id) {

    
    window.open("Choose a Charity.html", "_self");
}

//--------------------- Script for Choose a Charity ------------------------- 






//-------------------- Script for Donor Information -------------------------
var DonorInformation = Parse.Object.extend("DonorInformation");


function showDonorInformation(id) {

   
    console.log (id);
    showDonorInformation
    window.open("Send Thanks to Donor (2).html", "_self");
}
//-------------------- Script for Donor Information -------------------------    

    

    
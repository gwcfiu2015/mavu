//--------------------- Script for Choose a Charity ---------------------------

Parse.initialize("1AA9MEPQBbQOl5r3zQprN06KY2QUs32Y2n418Sv4", "uvPr6EALlpWKQ0Tij361i4et8AnQi7UqdjZbgRij");

var CharityInformation = Parse.Object.extend("CharityInformation");


function addToDatabase() {
  

    var charityInformation1 = new CharityInformation();

    //set attributes using infomation from the form 
    //          charityInformation1.set("Charity", document.getElementById("charity").value);
    //          charityInformation1.set("Name", document.getElementById("name").value);
    //          charityInformation1.set("Number", document.getElementById("number").value);
    //          charityInformation1.set("Address", document.getElementById("address").value);
    //          charityInformation1.set("BriefDescription",                            
    //          document.getElementById("briefDescription").value);


   
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


    //            charityInformation1.save();
    //                        console.log("STOP");
    //
    //            var id = charityInformation1.id;
    //            console.log(id);
    //            console.log("STOP");
    event.preventDefault();
    //showCharityInformation(charityInformation1.id);
    //window.open("Choose a Charity.html", "_self");
}


function showCharityInformation(id) {

    
    window.open("Choose a Charity.html", "_self");
  
//    var CharityInformation = Parse.Object.extend("CharityInformation");
//
//var query = new Parse.Query(CharityInformation);
//query.find({
//  success: function(results) {
//    alert("Successfully retrieved " + results.length + " scores.");
//    // Do something with the returned Parse.Object values
//    for (var i = 0; i < results.length; i++) {
//      var object = results[i];
////      alert(object.id + ' - ' + object.get('Name'));
//        $("#charityList").append(object.id + "-" + object.get("name") + "<br/>");
//         
//    }
//  },
//  error: function(error) {
//    alert("Error: " + error.code + " " + error.message);
//  }
//});

}

//--------------------- Script for Choose a Charity ------------------------- 










//-------------------- Script for Donor Information -------------------------
//var DonorInformation = Parse.Object.extend("DonorInformation");
//
//
//function addToDatabase() {
//    alert("ldskfjlsjf");
//
//    var DonorInformation1 = new DonorInformation();
//
//
//
//    
//     alert("2");
//    
//    
//donorInformation1.save({
//        Company: document.getElementById("company").value,
//        Name: document.getElementById("name").value,
//        Number: document.getElementById("number").value,
//        Address: document.getElementById("address").value,
//       
//    }, {
//        success: function (donorInformation1) {
//            alert("success");
//            console.log(donorInformation1.id);
//            showDonorInformation(donorInformation1.id);
//        },
//        error: function (donorInformation1, error) {
//            alert("error");
//            //error message 
//        }
//    });
//
// event.preventDefault();
//
//}
//
//
//function showDonorInformation(id) {
//
//    alert("bdiv");
//    window.open("Send Thanks to Donor.html", "_self");
//-------------------- Script for Donor Information -------------------------    
    
    
    
    
    
    
    
    
    
    
    

//----------------- Function to updateCompanyConnections --------------------
    
    
    
// function updateCompanyConnections();
//    {
//        alert("hsdu");
//       var li = document.createElement("LI");  
//        var input = document.getElementById("add");
//        li.innerHTML = input.value;
//        input.value = "msabui";
//
//        document.getElementById("company").appendChild(li);
//    }
//    
    
    

//----------------- Function to updateCompanyConnections --------------------    
    
    
    
    
    
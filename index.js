

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e) {
  if (!e.target.matches('#dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var txt1 = 'This is a Python Project. In this Project we had created a ATM system in which we have tried to create more secure ATM system by clicking the pic of the person who is initiating a transaction. This pic along with the transaction details were send to the respective account holder on the registered email. Also to save trees the transaction reciept were also send on the registered email ID.';
var txt2 = 'This is a website and mobile app. In this Project we choose one point from the UNO 17 points that are the fact of concern. We choose Hunger as our Project Topic to work upon and Created No Hunger Website. In this we have given a platform for user to donate food that is left over in big events like Parties, Marraige and other events.Then our volunteer will collect that food and deliver to the needy person. One can also provide information about the needy people in thier Locality ';
var txt3 = 'This is a website. In this project we have tried to give a platform to the user which will take care of the users whole tour. In this Website user can book flight, hotel and rental cars. Also it provides the rules & regulations list of the visiting country. List of Destinations and list of Places that is tourist attraction. Also user can save documents such as Passport, VISA and other documents with security of Travel Buddy.  ';

function typeWriter1() {
  document.getElementById("header").innerHTML = "ATM Project" 
  document.getElementById("desc").innerHTML = txt1;
}

function typeWriter2() {
  document.getElementById("header").innerHTML = "No Hunger Project";
  document.getElementById("desc").innerHTML = txt2;
}

function typeWriter3() {
  document.getElementById("header").innerHTML = "Travel Buddy Project";
  document.getElementById("desc").innerHTML = txt3;
}
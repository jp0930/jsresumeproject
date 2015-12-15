var bio = {
  "name" : "James Pecoraro",
  "role" : "Web Developer",
  "contacts": {
    "mobile": "973-568-4361",
    "email": "jp0930@gmail.com",
    "github": "jp0930",
    "twitter": "@NJWeb-devol",
    "location": "New Jersey"
  },
  "welcomeMessage": "Carpe Diem!",
  "Skills": [
    "HTML", "CSS", 
    ],
    "bioPic": "images/fry.jpg"
}


var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name );
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);
var bioPicture = HTMLbioPic.replace("%data%",bio.bioPic);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var Skills = HTMLskills.replace("%data%", bio);
var Skills = HTMLskillsStart.replace("%data%", bio);
var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
var  mobile = HTMLmobile.replace("%data%", bio.contacts.mobile) ;
var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var gitContact = HTMLgithub.replace("%data%",bio.contacts.github);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(welcomeMessage);
$("#header").append(Skills);
$("#header").append(bioPicture);
$("#topContacts").append(mobile);
$("#topContacts").append(contactEmail);
$("#topContacts").append(twitter);
$("#topContacts").append(gitContact);

$("#footerContacts").append(mobile);
$("#footerContacts").append(contactEmail);
$("#footerContacts").append(twitter);
$("#footerContacts").append(gitContact);



const firebaseConfig = {
    apiKey: "AIzaSyApPf9nu69vBbF8dyvShDkN4BUJD-1vQCw",
    authDomain: "contactform-dfca3.firebaseapp.com",
    databaseURL: "https://contactform-dfca3-default-rtdb.firebaseio.com",
    projectId: "contactform-dfca3",
    storageBucket: "contactform-dfca3.appspot.com",
    messagingSenderId: "773466049446",
    appId: "1:773466049446:web:46c05c03b11c4afa359d67"
  };

  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

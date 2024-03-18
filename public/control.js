// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU6uBF8yOCr_wWE75Z_Kw8JJx0iKF_DFs",
  authDomain: "samuelhillscode.firebaseapp.com",
  databaseURL: "https://samuelhillscode-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "samuelhillscode",
  storageBucket: "samuelhillscode.appspot.com",
  messagingSenderId: "50145792694",
  appId: "1:50145792694:web:57fca0eb328d1eb7a60c17",
  measurementId: "G-T18V7E0C31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("conSub").addEventListener("click", function() {
        console.log("clicked");

        let emailAddress = document.getElementById("emailAddress").value;
        let subjectData = document.getElementById("subject").value;
        let contentData = document.getElementById("content").value;

        if (emailAddress.includes("@") && emailAddress.includes(".")) {
            if (subjectData.length > 0) {
                if (contentData.length > 0) {
                    const data = {
                        email: emailAddress,
                        subject: subjectData,
                        content: contentData,
                    };
                    addDoc(collection(db, "messages"), data)
                    .then(() => {
                        console.log("Document written successfully!");
                        showSuccessMessageAndClearValues();
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });
                } else {
                    alert("Message must contain text to be sent");
                }
            } else {
                alert("Your message must contain a subject");
            }
        } else {
            alert("Email address must have a valid format");
        }
    })
})

function showSuccessMessageAndClearValues() {
    document.getElementById("successMessage").innerText = "Message sucessfully sent!";
    document.getElementById("emailAddress").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("content").value = "";
}
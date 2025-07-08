// firebase-config.js

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB80AIffsuK9ztEB0wwUoV-hihpJcLMNwo",
    authDomain: "groupproject-dc735.firebaseapp.com",
    projectId: "groupproject-dc735",
    storageBucket: "groupproject-dc735.firebasestorage.app",
    messagingSenderId: "50301471484",
    appId: "1:50301471484:web:5101bdffd88cb4c34d6579"
  };

 //OSS config 
/*const firebaseConfig = {
  apiKey: "AIzaSyA0xzbDaEwp9Z6g7TJ24UCXulWtglNQE2o",
  authDomain: "myproject-6e550.firebaseapp.com",
  databaseURL: "https://myproject-6e550-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myproject-6e550",
  storageBucket: "myproject-6e550.appspot.com",
  messagingSenderId: "513284407464",
  appId: "1:513284407464:web:30873301ebf6a4db94829d"
};*/

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();

// Constants
const EVENT_ID = "event0"; // Constant for our single event ID

// Helper functions
/*function formatTimeToAMPM(time24h) {
  if (!time24h) return '';
  
  let [hours, minutes] = time24h.split(':');
  hours = parseInt(hours);
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return `${hours.toString().padStart(2, '0')}:${minutes} ${amPm}`;
}

function convertTimeStringToTimestamp(timeString, dateString) {
  const [hours, minutes] = timeString.split(':');
  const date = new Date(dateString);
  date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
  return firebase.firestore.Timestamp.fromDate(date);
}*/

// Export the Firebase services 
//export { db, auth };
window.firebaseServices = {
  firebaseApp,
  db,
  auth,
  EVENT_ID,
  helpers: {
    formatTimeToAMPM,
    convertTimeStringToTimestamp
  }
};
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBfknrQdFvWaRON-7Or98nfE4iBcN-7xok",
  authDomain: "test-5207a.firebaseapp.com",
  databaseURL:
    "https://test-5207a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-5207a",
  storageBucket: "test-5207a.appspot.com",
  messagingSenderId: "621949597406",
  appId: "1:621949597406:web:81f3b12cda7e85e000744f",
};
function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BKAigl0fpP1C5RRazbszQkmlBH4v1nuLfW1uQS3JO0TnbOP520fEea6Ot_YLg6wRNcszXNUD_ci8DheoFfjzohg",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();

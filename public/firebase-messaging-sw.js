// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

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
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDY41Hu7J4jQmMpK3BbsM_uxvE5920qfGs",
    authDomain: "alajehub-a472c.firebaseapp.com",
    databaseURL: "https://alajehub-a472c.firebaseio.com",
    projectId: "alajehub-a472c",
    storageBucket: "alajehub-a472c.appspot.com",
    messagingSenderId: "871328383490",
    appId: "1:871328383490:web:436e9418c88b40d692dd1b",
    measurementId: "G-GR1N1MTRLJ"
};

firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();
//
// messaging.usePublicVapidKey("BEdd8QepNLKgkrSquQAbKPbOLuxcsaivJMIkch8_LSTfHei2qy456eCey3TdCcfUDTm0Be-rWySibsTCb5ZJbcM"); // 1. Generate a new key pair
//
// // Request Permission of Notifications
// messaging.requestPermission().then(() => {
//     console.log('Notification permission granted.');
//
//     // Get Token
//     messaging.getToken().then((token) => {
//         console.log(token)
//     });
// }).catch((err) => {
//     console.log('Unable to get permission to notify.', err);
// });

let messaging = "";

if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();

    navigator.serviceWorker.register(`${process.env.BASE_URL}firebase-messaging-sw.js`).then(reg => {
        messaging.useServiceWorker(reg);
    });
}

export default {
    messaging
};
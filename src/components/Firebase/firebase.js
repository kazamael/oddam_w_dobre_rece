import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyCyvnLbMIp9FuTVhV_C_PMsfsPTMbowjik",
    authDomain: "giveaway-9d405.firebaseapp.com",
    databaseURL: "https://giveaway-9d405.firebaseio.com",
    projectId: "giveaway-9d405",
    storageBucket: "giveaway-9d405.appspot.com",
    messagingSenderId: "48002471276",
    appId: "1:48002471276:web:73c662f5c36f63d3858f49"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);


    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');


}
export default Firebase;
import { createApp } from "vue";
import App from "./App.vue";

//VUE ALTeR
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import router from "./router";
import store from "./store";

//FIREBASE
import firebase from "firebase";
import "firebase/auth";

import firebaseConfig from "./utils/config";

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(VueSweetalert2);

app.use(store);
app.use(router);
app.mount("#app");

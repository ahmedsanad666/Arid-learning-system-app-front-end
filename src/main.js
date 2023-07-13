import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagramSquare,
  // faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { BProgress } from "bootstrap-vue";
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import i18n from "./i18n";










// global components
import SectionHead from './components/bases/SectionHead';
import BaseButton from "./components/bases/BaseButton";
import TheFooter from  './components/layout/TheFooter';
import BaseIntro from './components/bases/BaseIntro';
import LessonHead from './components/bases/LessonHead';
import UserData from './components/bases/UserData';
import AllCourses from './components/Courses/AllCourses';
library.add(fas, faTwitter, faFacebook, faInstagramSquare, faGooglePlus);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
// console.log(i18n)
// global components
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-btn", BaseButton);
app.component("section-head", SectionHead);
app.component("the-footer", TheFooter);
app.component("base-intro", BaseIntro);
app.component("lesson-head",LessonHead);
app.component("user-data",UserData);
app.component('all-courses',AllCourses);

app.mount("#app");

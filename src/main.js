import { createApp } from "vue";
import App from "./App.vue";
import draggableComponent from "vuedraggable";
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

import i18n from "./i18n";










// global components
import SectionHead from './components/bases/SectionHead';
import BaseButton from "./components/bases/BaseButton";
import TheFooter from  './components/layout/TheFooter';
import BaseIntro from './components/bases/BaseIntro';
import LessonHead from './components/bases/LessonHead';
import UserData from './components/bases/UserData';
import AllCourses from './components/Courses/AllCourses';
import BaseSpinner from './components/bases/BaseSpinner';
import BaseTextArea from './components/bases/BaseTextArea';
library.add(fas, faTwitter, faFacebook, faInstagramSquare, faGooglePlus);

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(draggableComponent);
// global components
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-btn", BaseButton);
app.component("section-head", SectionHead);
app.component("the-footer", TheFooter);
app.component("base-intro", BaseIntro);
app.component("lesson-head",LessonHead);
app.component("user-data",UserData);
app.component('all-courses',AllCourses);
app.component('base-spinner',BaseSpinner);
app.component('base-textarea',BaseTextArea);

app.mount("#app");

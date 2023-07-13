import { createRouter, createWebHistory } from "vue-router";
// import pages
import HomePage from "../views/HomePage";
import CoursePage from "../views/CoursePage";
import AboutPage from "../views/AboutPage";
import GalleryPage from "../views/GalleryPage";
import ContactPage from "../views/ContactPage";
import SesstionPage from "../views/SesstionPage";
import CourseDetailsPage from '../views/CourseDetailsPage';
// import Lesson from '../components/Courses/Lesson';
import LessonPage from '../views/LessonPage';
import ProfilePage from '../views/ProfilePage';
import CurrentCourse from '../views/CurrentCourse';

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: {
      title: "about",
    },
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursePage,
    meta: {
      title: "courses",
    },

  },
  {
    path:'/courses/:CourseDetails',
    name:'CourseDetails',
    component:CourseDetailsPage,
    props:true,
    meta:{
      title:'Lessons'
    }
   
  },
  {
    path:'/courses/:courseName/:lessonId/',
    name:"lesson",
    component:LessonPage,
    meta: {
      title: "lesson",
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryPage,
    meta: {
      title: "gallery",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: {
      title: "contact",
    },
  },
  {
    path: "/sesstions",
    name: "sesstions",
    component: SesstionPage,
    meta: {
      title: "psychological support",
    },
  },
{
  path:'/profile',
 name:'Profile',
 component:ProfilePage,
 meta:{
  title:'profile'
 }
} ,
{
  path:'/profile/:userCourse',
  name:'UserCourse',
  component:CurrentCourse,
  meta:{
    title:'Course'
  }
} 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});
export default router;

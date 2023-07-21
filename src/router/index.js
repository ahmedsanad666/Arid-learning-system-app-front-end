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
import AdminPage from '../views/Admin/AdminPage';
import ChaptersPage from '../views/Admin/ChaptersPage';
import ManageLesson from '../views/Admin/ManageLesson';
import ManageSlides from '../views/Admin/ManageSlides';
import LeaderBoard from '../views/LeaderBoard';

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
},{
  path:'/Admin',
  name:'admin',
  component:AdminPage,
  meta:{
    title:"Admin"
  }
},
{
  path:'/Admin/:CourseId',
  name:'editChapter',
  component:ChaptersPage,
  meta:{
    title:'Edit Chapter'
  }

},
{
  path:'/Admin/:CourseId/:ChapterId',
  name:'ManageLesson',
  component:ManageLesson,
  meta:{
    title:'Manage Lesson'
  }

},
{
  path:'/Admin/Lessons/:lessonId',
  name:'ManageSlides',
  component:ManageSlides,
  meta:{
    title:'Manage slides'
  }

},
{
  path:'/LeaderBoard',
  name:'LeaderBoard',
  component:LeaderBoard,
  meta:{
    title:'LeaderBoard'
  }

},

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

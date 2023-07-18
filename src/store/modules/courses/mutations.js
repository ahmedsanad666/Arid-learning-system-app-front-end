export default {
  dir(state, payload) {
    state.dir = payload;
  },
  LoadAllCourses(state,payload){
    state.courses = payload;
  },
  LoadUserCourses(state,payload){
    state.UserCourses = payload;
  },
  LoadCoureChapters(state,payload){
      
        state.CoureChapters = payload;
  },
  LoadLessons(state,payload){
      
    //single lesson have => lesson , quesiotns , slides
        state.lessons = payload;
  },

};

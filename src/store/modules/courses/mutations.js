export default {
  dir(state, payload) {
    state.dir = payload;
  },
  LoadAllCourses(state,payload){
    state.courses = payload;
    console.log(state.courses);
  }
};


export default {
  async AllCourses(context ){

    
    const response = await fetch("https://localhost:7263/arid/courses");
  

      const responseData = await response.json();
    
      if (!response.ok) {
        const error = new Error(responseData.message || 'failed to get courses');
  
        throw error;
      }
      const courses =[];
       responseData.forEach(element => {
        courses.push(element);       
       });

        context.commit("LoadAllCourses",courses);
    },
  async userCourses(context ){

    const response = await fetch("https://localhost:7263/arid/usercourse");

      const responseData = await response.json();
    
      if (!response.ok) {
        const error = new Error(responseData.message || 'failed to get courses');
  
        throw error;
      }
      const Usercourses =[];
       responseData.forEach(element => {
        Usercourses.push(element);       
       });

        context.commit("LoadUserCourses",Usercourses);
    },
  async userchapters(context ){

    const response = await fetch("https://localhost:7263/arid/coursechapter");

      const responseData = await response.json();
    
      if (!response.ok) {
        const error = new Error(responseData.message || 'failed to get chapters');
  
        throw error;
      }
      const chapters =[];
       responseData.forEach(element => {
        chapters.push(element);       
       });

        context.commit("LoadCoureChapters",chapters);
    },
  async LoadLessons(context ){

    const response = await fetch("https://localhost:7263/arid/lesson");

      const responseData = await response.json();
    
      if (!response.ok) {
        const error = new Error(responseData.message || 'failed to get lessons');
  
        throw error;
      }

      const lessons = responseData.lessonData;
      const slides = responseData.slides;
      const questions = responseData.questions;
      const combinedData = lessons.map((lesson) => ({
        ...lesson,
        slides: slides.filter((slide) => slide.lessonId === lesson.id).map((slide) => ({
          ...slide,
          questions: questions.filter((question) => question.slideId === slide.customId)
        }))
      }));


        context.commit("LoadLessons",combinedData);
    },
};

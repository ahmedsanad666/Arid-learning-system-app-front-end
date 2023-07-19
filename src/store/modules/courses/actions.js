
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

    //........................ course curd operations..........
    async deleteCourse(_,payload){
      const response = await fetch(`https://localhost:7263/arid/courses/${payload}`,
      {
        method:'DELETE',
      });
      
      if(!response.ok){
        const Error = new Error(response.message || "failed to delete");
      }
      
    },
    async UpdateCourse(_,payload){
      const response = await fetch(`https://localhost:7263/arid/courses/${payload.id}`,
      {
        method:'PUT',  
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header to application/json
        },
        body: JSON.stringify(payload)
      });
      // const responseData = await response.json();
      
      if(!response.ok){
        // const err = new Error(responseData.message|| 'failed ');
        console.log( response);
      }
    },
    
    async AddCourse(_,payload){
      const response = await fetch(`https://localhost:7263/arid/courses`,
      {
        method:'POST',  
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header to application/json
        },
        body: JSON.stringify(payload)
      });
      // const responseData = await response.json();
      
      if(!response.ok){
        // const err = new Error(responseData.message|| 'failed ');
        console.log( response);
      }
    },
    
    //........................ chapter curd operations..........
    
    async deletechapter(_,payload){
    const response = await fetch(`https://localhost:7263/arid/coursechapter/${payload}`,
    {
      method:'DELETE',
    });
    
    if(!response.ok){
      const Error = new Error(response.message || "failed to delete");
    }
    
  },
  


  async UpdateChapter(_,payload){
    const response = await fetch(`https://localhost:7263/arid/coursechapter/${payload.id}`,
    {
      method:'PUT',  
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header to application/json
      },
      body: JSON.stringify(payload)
    });
    // const responseData = await response.json();
    
    if(!response.ok){
      // const err = new Error(responseData.message|| 'failed ');
      console.log( response);
    }
  },
  
  async AddChapter(_,payload){
    const response = await fetch(`https://localhost:7263/arid/coursechapter`,
    {
      method:'POST',  
      headers: {
        'Content-Type': 'application/json', // Set the Content-Type header to application/json
      },
      body: JSON.stringify(payload)
    });
    // const responseData = await response.json();
    
    if(!response.ok){
      // const err = new Error(responseData.message|| 'failed ');
      console.log( response);
    }

  console.log(response);
  },
  
//.................................... curd for lesssons 

async deletelesson(_,payload){
  const response = await fetch(`https://localhost:7263/arid/lesson/${payload}`,
  {
    method:'DELETE',
  });
  
  if(!response.ok){
    const Error = new Error(response.message || "failed to delete");
  }
  
},

async UpdateLesson(_,payload){
  const response = await fetch(`https://localhost:7263/arid/lesson/${payload.id}`,
  {
    method:'PUT',  
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to application/json
    },
    body: JSON.stringify(payload)
  });
  // const responseData = await response.json();
  
  if(!response.ok){
    // const err = new Error(responseData.message|| 'failed ');
    console.log( response);
  }
},

async AddLesson(_,payload){
  const response = await fetch(`https://localhost:7263/arid/lesson`,
  {
    method:'POST',  
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to application/json
    },
    body: JSON.stringify(payload)
  });
  // const responseData = await response.json();
  
  if(!response.ok){
    // const err = new Error(responseData.message|| 'failed ');
    console.log( response);
  }

console.log(response);
},


async AddSlides(_,payload){
  console.log(payload,'action');
  const response = await fetch(`https://localhost:7263/arid/lesson/AddSlides`,
  {
    method:'POST',  
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header to application/json
    },
    body: JSON.stringify(payload)
  });
  // const responseData = await response.json();
  
  if(!response.ok){
    // const err = new Error(responseData.message|| 'failed ');
    console.log( response);
  }

  console.log(JSON.stringify(payload));
console.log(response);
},









};
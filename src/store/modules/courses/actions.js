import { toRaw } from "vue";
import courses from ".";

export default {
  async AllCourses(context ){

    const response = await fetch("https://localhost:7263/arid/courses");

      const responseData = await response.json();
    
      if (!response.ok) {
        const error = new Error(responseData.message || 'failed to send request');
  
        throw error;
      }
      const courses =[];
       responseData.forEach(element => {
        courses.push(element);       
       });

        context.commit("LoadAllCourses",courses);
    }
};

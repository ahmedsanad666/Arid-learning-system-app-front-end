export default {
    async AllUsers(context ){
        const response = await fetch("https://localhost:7263/arid/auth/getallusers");
          const responseData = await response.json();
        
          if (!response.ok) {
            const error = new Error(responseData.message || 'failed to get users');
      
            throw error;
          }
          const allUsers =[];
           responseData.forEach(element => {
            allUsers.push(element);       
           });

    
            context.commit("setAllUsers",allUsers);
        },
};

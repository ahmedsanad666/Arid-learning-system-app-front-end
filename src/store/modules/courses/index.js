import actions from './actions';

import getters from './getters';

import mutations from './mutations';

export default {
  namespaced:true,
  state() {
    return {
      UserCourses:[
        {
        userCourseId:1,
        userId:1,
        CourseId:1,
        // CoursePoints:100,
        userPoints:70,
        Progress:20,
        StartedDate:'12/10/2022',
  
      },
        {
        userCourseId:2,
        userId:1,
        CourseId:2,
        // CoursePoints:100,
        userPoints:20,
        Progress:20,
        StartedDate:'12/10/2022',
  
      },
        {
        userCourseId:3,
        userId:2,
        CourseId:1,
        // CoursePoints:100,
        userPoints:50,
        Progress:50,
        StartedDate:'12/10/2022',
  
      },
        {
        userCourseId:4,
        userId:2,
        CourseId:2,
        // CoursePoints:100,
        userPoints:60,
        Progress:70,
        StartedDate:'12/10/2022',
  
      },
        {
        userCourseId:5,
        userId:3,
        CourseId:1,
        // CoursePoints:100,
        userPoints:80,
        Progress:80,
        StartedDate:'2/10/2004',
  
      },
    ],
      courses:[
        {
          id:1,
          name:"مقدمه فى سى شارب ",
          des:"C# is used by many large organizations, start-ups and beginners alike. It takes some of the useful features of C and adds syntax to save time and effort. Although C# is based on C, you can learn it without any knowledge of C - in fact, this course is perfect for those with no coding experience at all! And if you enjoy learning C# you can continue to our Intermediate C# course.",
         CreaedDate:'11/10/2000',
         LastUpdate:'12/3/2003',
         active:true,
         isFeatured:true
  
         
        },
        {
          id:2,
          name:"js",
          des:"C# is used by many large organizations, start-ups and beginners alike. It takes some of the useful features of C and adds syntax to save time and effort. Although C# is based on C, you can learn it without any knowledge of C - in fact, this course is perfect for those with no coding experience at all! And if you enjoy learning C# you can continue to our Intermediate C# course.",
          CreaedDate:'2/12/2001',
          LastUpdate:'12/5/2004',
          active:false,
          isFeatured:false
         },
        {
          id:3,
          name:"css",
          des:"C# is used by many large organizations, start-ups and beginners alike. It takes some of the useful features of C and adds syntax to save time and effort. Although C# is based on C, you can learn it without any knowledge of C - in fact, this course is perfect for those with no coding experience at all! And if you enjoy learning C# you can continue to our Intermediate C# course.",
          CreaedDate:'5/10/2000',
          LastUpdate:'12/3/2003',
          active:true,
          isFeatured:true
         
        },
      ],
      CoureChapters:[
        {
          id:1,
          CourseId:1,
          index:1,
          name:'intro to csharp',
          isHidden:false,
      
  
        },
        { 
           id:2,
          CourseId:1,
          index:2,
          name:'intermidiate csharp',
          isHidden:false,
        

  
  
        },
        { 
           id:3,
          CourseId:2,
          index:1,
          name:'intro in html',
          isHidden:false,
        
  
  
        },
        { 
           id:4,
          CourseId:2,
          index:2,
          name:'intermidiate in html',
          isHidden:false,
       

  
  
        },
        { 
           id:5,
          CourseId:3,
          index:1,
          name:'intro in javascirpt',
          isHidden:false,
        

  
  
        },
        { 
           id:6,
          CourseId:3,
          index:2,
          name:'intermidiate in javascript',
          isHidden:false,
         

  
  
        },
      ],
      lessons:[
       
        {
          id:52,
          courseId:1,
          chapterId:1,
          active:true,
          
          name:'variables in csharp',   
          slides:[
            {
              id:54,
              content:`
              <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
      </div>
      <div class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <h2>About Me</h2>
        <div class="fakeimg" style="height:100px;">Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div class="card">
        <h3>Popular Post</h3>
        <div class="fakeimg">Image</div><br>
        <div class="fakeimg">Image</div><br>
        <div class="fakeimg">Image</div>
      </div>
      <div class="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
    </div>
  </div>
  
  <div class="footer">
    <h2>Footer</h2>
  </div>`,
              questions:[
                {
                  questoin:'Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen ',
                  choices:['flase',"true ans",'false ans'],
                  answer:2,
                  point:10,
                },
                {
                  questoin:'Complete the ..... of code below',
                  choices:['dd',"line",'code '],
                  answer:2,
                  point:10,

                },
                {
                  questoin:'Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen Complete the line of code below to send a message to the screen ',
                  choices:['flase ans',"true ans",'false ans'],
                  answer:2,
                  point:10,

                },
               
              ]
            },
            {
              id:23,
              content:`
              <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Dec 7, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
      </div>
      <div class="card">
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <h2>About Me</h2>
        <div class="fakeimg" style="height:100px;">Image</div>
        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      </div>
      <div class="card">
        <h3>Popular Post</h3>
        <div class="fakeimg">Image</div><br>
        <div class="fakeimg">Image</div><br>
        <div class="fakeimg">Image</div>
      </div>
      <div class="card">
        <h3>Follow Me</h3>
        <p>Some text..</p>
      </div>
    </div>
  </div>
  
  <div class="footer">
    <h2>Footer</h2>
  </div>`,
              questions:[
                {
                  questoin:'slide 2 queisti',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                
              ]
            },
           
            {
              id:11,
              content:'this is  3 slide',
              questions:[
                {
                  questoin:'sldid 3 q1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'slide 2 q',
                  choices:['sd',"sdf",'ds'],
                  answer:2,
                  point:10
                },
              ]
            },
           
          ]
        },
        {
          id:44,
          courseId:1,
          chapterId:1,
          active:false,

          name:'data types csharp',
          slides:[
            {
              id:105,
              content:'sadfjkladsfjkljdsfakjdfkj',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10,
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:1093,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'s eisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
        {
          id:12578,
          courseId:1,
          chapterId:2,
          active:false,

          name:'oop in csharp',
          slides:[
            {
              id:357,
              content:'js',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:951,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'slide 2 queisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
         {
          id:120,
          courseId:2,
          chapterId:3,
          active:true,

          name:'variables  in html',
          slides:[
            {
              id:357,
              content:'js',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:951,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'slide 2 queisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
        {
          id:124,
          courseId:2,
          chapterId:4,
          active:false,

          name:'oop in html',
          slides:[
            {
              id:357,
              content:'js',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:951,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'slide 2 queisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
        {
          id:125,
          courseId:3,
          chapterId:5,
          active:true,

          name:'vaiables  in js',
          slides:[
            {
              id:357,
              content:'js',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:951,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'slide 2 queisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
        {
          id:56712,
          courseId:3,
          chapterId:6,
          active:false,

          name:'oop in js',
          slides:[
            {
              id:357,
              content:'js',
              questions:[
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
            {
              id:951,
              content:'hi this is slide 2',
              questions:[
                {
                  questoin:'slide 2 queisti 1',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
                {
                  questoin:'sadfjlk',
                  choices:['sd',"sdf",'ds'],
                  answer:1,
                  point:10
                },
              ]
            },
          ]
        },
      ]
    };
  },
  mutations,
  getters,
  actions,
};

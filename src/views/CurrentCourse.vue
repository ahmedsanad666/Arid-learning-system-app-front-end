<template>


    <section class=" w-full  bg-bgColor py-5   min-h-screen">
    
        <div class="container lg:w-1/2 w-3/4 ">
    
            
            <div>
    
                <base-intro :CourseDes="CourseDetails.des" :CourseName="CourseDetails.name"></base-intro>
            </div>
            <div>
                <div>{{ CourseDetails.startedData }}</div>
                <div>{{ CourseDetails.TotalPoints }}</div>
            </div>
            <div>
                <div>{{ userProgress.userPoints }}</div>
                <div>{{ userProgress.progress }}</div>
            </div>
            <div class="py-4 mt-5 mb-2">
    
                <ul  class=" space-y-5" v-for="(el,key) in chapters" :key="key">
                <li class=" my-2 cursor-pointer select-none" @click="showLessons(el,key)" ref="myli"  >
                   
                      <lesson-head :LessonName="el.name"/>
                 </li>

                 <ul ref="list" class="subMenu itemRef space-y-2 my-2">
                     
                        <li v-for="(lesson,key) in lessons" :key="key" class=" relative py-6  "  :class="lesson.chapterId == el.id ?'':'hidden'">
                        <router-link class=" lessonLink absolute text-lg w-full  h-full" :to="`/courses/${CourseName}/${lesson.id}`"  >
                            {{ lesson.chapterId == el.id ? lesson.name : ''}}
                        </router-link>
                        </li>
                       
                      </ul>
            </ul>
        
                </div>
                
            </div>
        </section>
    
    
    </template>
    
    <script>
    import BaseIntro from '@/components/bases/BaseIntro.vue';
    export default {
      components: { BaseIntro },
       
      data(){
        return{
           CourseDetails:{
            name:'',
            des:'',
            TotalPoints:0,
            startedData:''
           },
           userProgress:{
            userPoints:0,
            progress:0,

           },
           chapters:[],
           lessons:[]

    
        }
      },
    computed:{
        courseLessons(){
            
            let id = this.$route.params.userCourse;
           
    let lessons = this.$store.getters['courses/allLessons'].filter(obj => obj.courseId == id   );
    return lessons;
        }
    },
    methods:{
        showLessons(el,key){
//  let lis = this.$refs.myli;

 let list = this.$refs.list;
 list[key].classList.toggle('subMenu');

//  let  currentLessons =[]; 
this.courseLessons.forEach(item => {
   
    if(item.chapterId == el.id){
       this.lessons.push(item.name);
    }
}); 
console.log(this.currentLessons);
},
        CourseData(){
            let CourseId = this.$route.params.userCourse;
            let userid = this.$store.getters['auth/userId'];
            let allChapters =this.$store.getters['courses/CoureChapters'].filter(obj => obj.CourseId == CourseId   );

            let allCourses = this.$store.getters['courses/allCourses'];
    let CourseData = this.$store.getters['courses/UserCourses'].find(el => el.userId == userid && el.CourseId == CourseId);
    let singleCourse = allCourses.find(el => el.id == CourseId);
    // console.log(typeof(CourseId) ,typeof( userid ));
                let currentCourseData ={
                    TotalPoints : CourseData.CoursePoints,
                    userPoints:CourseData.userPoints,
                    progress :CourseData.Progress,
                    startedData:CourseData.StartedDate,
                    CourseDetails:singleCourse,
                    chapters:allChapters,
                    lessons:this.courseLessons

                }

                this.CourseDetails.TotalPoints = currentCourseData.TotalPoints;
                this.CourseDetails.name = currentCourseData.CourseDetails.name;
                this.CourseDetails.des = currentCourseData.CourseDetails.des
                this.CourseDetails.startedData = currentCourseData.startedData;
                this.userProgress.userPoints = currentCourseData.userPoints;
                this.userProgress.progress = currentCourseData.progress;
                this.chapters = currentCourseData.chapters;
                this.lessons = currentCourseData.lessons;

                console.log(this.CourseDetails.startedData);
    // const[{
            //     name:CourseName,
            //     des:CourseDes
            // }] = currentCoureData;
            // this.CourseName = CourseName;
            // this.CourseDes = CourseDes;
        }
    
    
    },
    created(){
        this.CourseData();
    }
    
    }
    </script>
<style lang="scss" scoped>

ul{
    li{
      div{
     transition: .3s linear;
      }
    }
}


    .subMenu{
        height: 0;
       display: none;
    }
    

    .itemRef{
        
       li{
        box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: .5);
        padding: .7rem 1rem;
        border-radius: .5rem;
        height: 3rem;
        .lessonLink a{
          padding-right: 30px !important;
        }
   
       }

        li:nth-child(odd){
          background: #444654;
          color:#ecf0f1;

        }
      
    }
</style>
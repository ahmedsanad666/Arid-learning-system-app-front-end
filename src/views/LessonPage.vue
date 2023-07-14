<template>

    <section class=" bg-mianColor h-screen py-4 ">

        <div class=" flex justify-between items-center mx-auto  py-6 mb-3 w-[90%] border-secondText border-b  ">
         
                <base-button @click="Exit()" text="Exit"  class=" text-mianColor px-7"  bg="bg-red"
                />
            <h1 class="text-center lg:text-4xl  text-2xl font-bold tracking-wide text-mainText">{{ lessonName }}</h1>
            <div class="flex flex-col space-y-1">
                <span>
                    {{Score}}
                </span>
                <span>
                    SCORE
                </span> 
            </div>

        </div>
        
        <!-- ...................... -->
        <div class=" h-3/4 overflow-scroll container bg-[#f9f9f9] lg:w-1/2 w-3/4 shadow-xl rounded-xl quizSec ">

            <div class="py-3 px-4" >
                <!-- studing sectino -->
                <div  v-if="currentState === 'studying'" v-html="currentSlide.content"></div>
                <!-- quiz section -->
                <div v-else class=" space-y-4">

                    <quiz-section :question="currentQuestion.questoin" :choices="currentQuestion.choices" :rightAns="rightAns" 
                    ref="quizSec"
                    @MyEvent="setCurrentChoice($event)"></quiz-section>

               

                     <div v-if="isRightAns &&  checkedMode"  class="max-w-xl mx-auto  flex justify-center items-center rounded-md border-2  text-green-900 md:text-3xl text-xl border-green-700 py-4 px-3 ">
                        <font-awesome-icon :icon="['fas', 'check']"  class="mx-4"/>
    
                             Great Right Answer 
                        
                    </div>
                    <div v-if="!isRightAns && checkedMode" class=" border-2   max-w-xl  mx-auto flex justify-center items-center rounded-md text-red-900 md:text-3xl text-xl  border-red-500 py-4 px-3  ">
                        <font-awesome-icon :icon="['fas', 'xmark']" class="mx-4" /> Wront Answer
                        
                  
                        </div>

                        <div>

                     
                       
                    </div>
                </div>
            </div>
          
        </div>

        <!-- .......................... -->
        
        <div class="controllers border-t border-secondText mt-3 py-5 w-[95%] mx-auto text-end">
                  <button class=" bg-[#2980b9] py-3 px-9 rounded-xl mx-8 text-mianColor" v-if="currentState === 'studying'" @click="moveToQuize()" >continue</button>
                  <div class="w-3/4  flex justify-between  mx-auto" v-else >

                      <button class=" bg-none border-2 border-[#2980b9] py-3 px-9 rounded-xl mx-8 text-lightBlack" v-if="currentState === 'quize'" @click="backToSlides()">back to slides</button>
                      <!-- .... quize serction.. -->
                     
                      <button  :disabled="lockState" @click="showRightAns" class="lock" >
                        <font-awesome-icon :icon="['fas', 'lock']"  :class="disableLock ? 'text-slate-400' : 'text-[#c0392b]'"  />
                      </button>
                      <div>

                          
                          <button  :class="chekDisabled ? ' bg-slate-400 ' : 'bg-[#c0392b]'" class="     py-3 px-9 rounded-xl mx-8 text-mianColor" v-if="currentState === 'quize' && !tryAgainR && !isRightAns" @click="chekAns" :disabled="chekDisabled"  >check</button>

                          <button class="  bg-cyan-500    py-3 px-9 rounded-xl mx-8 text-mianColor" v-if="currentState === 'quize' && tryAgainR && !isRightAns " @click="resetMode" :disabled="chekDisabled" >tryAgain</button>

                          <button ref="next" :class="chekDisabled ? ' bg-slate-400 ' : 'bg-[#c0392b]'" class="      py-3 px-9 rounded-xl mx-8 text-mianColor" v-if="currentState === 'quize' && !tryAgainR && isRightAns && next" @click="nexQuestion" :disabled="chekDisabled " >Next</button>
                        
  
                          <button ref="nextLesson" :class="chekDisabled ? ' bg-slate-400 ' : 'bg-[#2bc062]'" class="     py-3 px-9 rounded-xl mx-8 text-mianColor" v-if="currentState === 'quize'  && nextSlide && isRightAns" @click="nextSlideB" :disabled="chekDisabled" >Next lesson</button>
                        </div>
                    </div>
            </div>
    </section>
    </template>

<script>
import BaseButton from '@/components/bases/BaseButton.vue';
import QuizSection from '@/components/Courses/QuizSection.vue';
export default {
  components: { BaseButton,QuizSection },

    data(){

        return{
            currentState:'studying',
            lessonName:'',
            currentChoice:1,
            isRightAns:false,
            chekDisabled:true,
            checkedMode:false,
            tryAgain:false,
            nextSlide:false,
            slideCounter:0,
            questionCounter:0,
            Score:0,
            next:true,
            
            disableLock:false,
          
         allSlides:[],
         currentSlide: {
            id:'',
            content:'',
            questions:[
              {
                questoin:'',
                choices:[],
                answer:1,
                point:1
              },
             
            ]
          },
          currentQuestion: {
                questoin:'',
                choices:[],
                answer:1,
                point:1
              },
        }
    },
    computed:{
      tryAgainR(){
        return this.tryAgain;
      },
   
      rightAns(){
        return this.currentQuestion.choices[this.currentQuestion.answer];
      },
      lockState(){
        return this.disableLock;
      }
    
    

    },
    methods:{
       
        showRightAns(){
            this.Score = this.Score - this.currentQuestion.point;
            this.disableLock =true;
            this.isRightAns = true;
            this.chekDisabled = false;
            this.$refs.quizSec.ShowAnsState(this.currentQuestion.answer);

        },
        
     
         nextSlideB(){
          if(this.slideCounter >=  this.allSlides.length -1 ){
             return;
            }
            this.slideCounter++;
            this.isRightAns = false;
            this.tryAgain = false;
            this.checkedMode = false;
            this.chekDisabled= true;
            this.disableLock  = false;
            this.currentState = 'studying';
            this.loadCurrentSlide();
        
            

         },
        nexQuestion(){
            if(this.questionCounter >=  this.currentSlide.questions.length -1 ){

             return;
            }
            this.questionCounter++;
            this.isRightAns = false;
            this.tryAgain = false;
            this.checkedMode = false;
            this.chekDisabled= true;
            this.loadCurrentQuestion();
            this.disableLock = false;
            this.$refs.quizSec.removeRightClass();
        

        },
        resetMode(){
            this.isRightAns = false;
            this.tryAgain = false;
            this.checkedMode = false;
        },
        setCurrentChoice(key){
            this.chekDisabled = false;
this.currentChoice = key;
        },
        chekAns(){
            const choice = this.currentChoice +1;
            const rithAns = this.currentQuestion.answer;
          this.checkedMode = true;
            if(choice == rithAns){
              this.Score = this.Score + this.currentQuestion.point;
             this.isRightAns = true;

            }else{
                this.tryAgain = true;
                this.isRightAns = false;
                
            }

        },
        Exit(){
            this.$router.go(-1);
        },
        getAllSlides(){
          let allSlides = this.$store.getters['courses/allLessons']
            // let  = this.$store.getters.allLessons;
            let lessonId = this.$route.params.lessonId;

            let currentLesson = allSlides.filter(el =>el.id == lessonId);
           
           
           const[{
            name:lessonName,
            slides:lessonSlide
           }] = currentLesson;

      
      this.allSlides = lessonSlide;
      this.lessonName = lessonName;

    
           
          
        },
        loadCurrentSlide(){
        
        this.currentSlide = this.allSlides[this.slideCounter];
    
        this.questionCounter =0;
        this.loadCurrentQuestion();
        console.log(this.Score);
      this.currentSlide.questions.forEach(el => {
        this.Score =this.Score + el.point ;
      });
        
        
        
    },
    loadCurrentQuestion(){
        this.currentQuestion = this.currentSlide.questions[this.questionCounter];

        if(this.questionCounter == this.currentSlide.questions.length -1){
            this.nextSlide = true;
          
        }
   



    },
    moveToQuize(){
        this.currentState = 'quize';
       
    },
    backToSlides(){
        this.currentState = 'studying';
    }
    },
    
    created(){
this.getAllSlides();
this.loadCurrentSlide();

    }

}
</script>


<style lang="scss" scoped>

.display{
    display: flex;
    justify-content: center;
    align-items: center;
}
.quizSec{
  overflow: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Set the color of the scrollbar thumb and track */
}

.quizSec::-webkit-scrollbar {
  width: 0.5em; /* Adjust the width as needed */
}

.quizSec::-webkit-scrollbar-track {
  background: transparent; /* Set the background color of the scrollbar track */
}
.lock{
    cursor: pointer;
}
.disabled{
  background: rgba($color: #ccc, $alpha: 1.0);
display: none;
}
</style>
<template>
    <section class="h-[25vh] shadow-lg">
        
        <div class="lg:w-3/4  container h-full m-auto     ">
            <div class="lg:w-3/4 m-auto h-full text-end py-5 px-3 flex place-content-end flex-row-reverse   space-x-5 items-center" >
                
                <span class=" space-y-3  flex flex-col">
                    
                    <font-awesome-icon v-if="role == 1" :icon="['fas', 'user-tie']"  class=" text-8xl" />
                    
                      <font-awesome-icon v-else :icon="['fas', 'user']"  class=" text-8xl" />
                     <button @click="$emit('UpdateTable')" class=" inline-block  py-1 px-2 bg-red-700 text-white  rounded-md" >
                    تحديث البيانات
                </button>
                </span>
                <div class=" flex justify-center flex-col ">

                 
                    <h1>{{ name }}</h1>
                    
                    <h1>{{ roleState }}</h1>
                </div>
                
              
            </div>
        </div>
    </section>
</template>

<script>
export default {

    data(){
        return{
        userName:'',
            
            role:''

        }
    },
    computed:{
       
    name(){
        return this.userName;
    },
    roleState(){
        return this.role;
    }
    },
    methods:{
    async   currentUser(){

        let userId = this.$store.getters['auth/userId'];
            

        try{
            await this.$store.dispatch('students/AllUsers')
                let user = this.$store.getters['students/allUsers'].find((el)=> el.id == userId);
                // console.log(this.$store.getters['students/allUsers']);
                
                // console.log(user);
                this.userName = user.userName
            
                 this.role = user.role;    
            }catch(e){
                console.log(e);
            }
      
           
        }
    },
    created(){
        this.currentUser();
    }

}
</script>

<style>

</style>
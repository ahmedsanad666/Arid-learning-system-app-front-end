<template>
    <section class="h-[25vh] shadow-lg">
        
        <div class="lg:w-3/4  container h-full m-auto ">
            <div class="lg:w-3/4 m-auto h-full text-end py-5 flex place-content-end flex-row-reverse   space-x-5 items-center" >
                
                <span>
                    
                    <font-awesome-icon v-if="role == 1" :icon="['fas', 'user-tie']"  class=" text-8xl" />
                    
                      <font-awesome-icon v-else :icon="['fas', 'user']"  class=" text-8xl" />
                
                </span>
                <div class=" flex justify-center flex-col ">

                    <h1 class="text-2xl font-bold">{{ fullName }}</h1>
                    <h1>{{ Email }}</h1>
                    
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
            FirstName:'',
            lastName:'',
            Email:'',
            role:0

        }
    },
    computed:{
        fullName(){
            return `${this.FirstName} ${this.lastName}`;
        },
        roleState(){
            return this.role === 1 ?'Admin' : 'student';
        }
    },
    methods:{
        currentUser(){
            let userId = this.$store.getters['auth/userId'];
            let user = this.$store.getters['students/allUsers'].find((el)=> el.id == userId);
          this.FirstName = user.FirstName;
          this.lastName = user.LastName;
          this.Email = user.Email;
          this.role = 1;
           
        }
    },
    created(){
        this.currentUser();
    }

}
</script>

<style>

</style>
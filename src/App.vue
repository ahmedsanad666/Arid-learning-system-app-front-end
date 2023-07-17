<template>
  <div class="main">
    <nav-bar />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  methods: {
    lang() {
      const currentLang = localStorage.getItem("lang");
      if (currentLang === "ar") {
        this.$i18n.locale = "ar";
        document.querySelector("html").dir = "rtl";
      } else {
        this.$i18n.locale = "en";
        document.querySelector("html").dir = "ltr";
      }
    },
   
    async loadCourses(){
      console.l
      try{
        await this.$store.dispatch('courses/AllCourses');
      }catch(e){
        console.log(e);
      
    }
  },
 
  },

  created() {
    this.lang();
  this.loadCourses();  

},


};
</script>

<style src="./assets/tailwind.css"></style>

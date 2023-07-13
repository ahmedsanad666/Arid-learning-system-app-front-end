<template>
    <section>

<h1 class="text-center py-5 font-bold lg:text-3xl text-2xl"> All Courses</h1>

  <ul class="w-3/4 space-y-3 mx-auto my-4 " >
    <li class=" bg-mainText py-3 px-2 rounded-lg" v-for="(item,key) in allCourses" :key="key">
      <router-link :to="`/courses/${item.id}`" class=" text-mianColor border flex px-5 items-center font-bold  tracking-wider" >
          {{ item.name }}
      </router-link>
  </li>
</ul>

</section>
</template>

<script>
export default {
    computed:{
    allCourses(){
        let courses = this.$store.getters['courses/allCourses'];
        return  courses;
    },
   
}

}
</script>

<style lang="scss" scoped>

li{
    cursor:pointer;
    position: relative

    ;
    min-height: 3rem;

a{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;

}
}
</style>
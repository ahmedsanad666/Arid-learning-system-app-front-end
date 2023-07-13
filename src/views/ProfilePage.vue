<template>
    <section class=" bg-bgColor" >

        <user-data class=" bg-mianColor">
            
        </user-data>
        <div class="m-auto   md:w-3/4">

            <!--  current user courses -->
            <current-courses ></current-courses>
            <!-- all courses -->
            <all-courses></all-courses>
        </div>
    </section>
</template>

<script>
import CurrentCourses from '@/components/Courses/CurrentCourses.vue'
export default {
  components: { CurrentCourses },

}
</script>

<style>

</style>
<template>
  <section class="min-h-screen">
    <h1 class="text-center py-3 my-4 font-bold md:text-3xl text-2xl">
      LeaderBoard
    </h1>
    <div class="container py-3 px-4">
      <ul class="md:w-[50%] w-[90%] m-auto shadow-xl rounded-l-lg space-y-4">
        <li
          class="flex rounded-lg py-3 px-2 justify-between items-center"
          v-for="(item, k) in newData"
          :key="k"
        >
          <span>{{ k }} | Username</span>
          <span>{{ item.userPoints }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      UsersData: [],
      newData: [],
    };
  },
  methods: {
    async usersPoints() {
      try {
        await this.$store.dispatch("courses/userCourses");
        this.UsersData = this.$store.getters["courses/UserCourses"];
        // this.UsersData.sort((a, b) => b.points - a.points);

         this.newData =  this.UsersData.slice().sort((a, b) => b.userPoints - a.userPoints);
         console.log(this.newData);
      } catch (e) {
        console.log(e);
      }
    },
    // getSortedArray() {
    //   this.newData = this.usersPoints();
    //   console.log(this.newData.data);
    // },
  },

  created() {
    this.usersPoints();
    // this.getSortedArray();
  },
};
</script>

<style lang="scss" scoped>
li:nth-child(odd) {
  background: #444654;
  color: #ecf0f1;
}
</style>

<template>
  <select
    class="bg-transparent outline-none cursor-pointer border p-1 px-2 rounded-full"
    v-model="$i18n.locale"
    @change="test"
  >
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return {
      locales: ["ar", "en"],
    };
  },
  methods: {
    test(e) {
      if (e.target.value === "ar") {
        document.querySelector("html").dir = "rtl";

        localStorage.clear();
        localStorage.setItem("lang", "ar");
        this.$store.dispatch("changeDir", "rtl");
      } else {
        document.querySelector("html").dir = "ltr";
        localStorage.clear();
        localStorage.setItem("lang", "en");
        this.$store.dispatch("changeDir", "ltr");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
option {
  background: #ccc;
  color: black;

  border: none;
  outline: none;
}
</style>

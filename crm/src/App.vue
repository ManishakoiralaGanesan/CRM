<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import DefaultLayout from "./layout/DefaultLayout";
import ContentLayout from "./layout/ContentLayout";

export default {
  name: "App",

  components: {
    DefaultLayout,
    ContentLayout,
  },

  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
};
</script>

<style scoped>
.app,
.content {
  height: 100%;
}
</style>

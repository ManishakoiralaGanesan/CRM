<template>
  <v-app class="app">
    <v-content
      class="content"
      style="
         {
          `height: 100%`;
        }
      "
    >
      <slot />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "content-layout",
};
</script>

<style scoped>
.app,
.content {
  height: 100%;
}
</style>

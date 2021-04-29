<template>
  <v-app class="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      dark
      color="#1E1D2D"
      :mini-variant.sync="mini"
    >
      <v-list>
        <v-list-item color="#F69323">
          <v-list-item-icon>
            <v-avatar size="30" color="black">
              <span class="white--text headline">J</span>
            </v-avatar>
          </v-list-item-icon>

          <v-list-item-title>Joyce Reality</v-list-item-title>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>
        <div>
          <v-list>
            <v-list-item :to="link">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                {{ title }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#ffffff"> </v-app-bar>

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
  name: "default-layout",

  data: () => ({
    title: "Hello world",
    link: "/helloworld",
    drawer: true,
    snackbar: false,
    mini: true,
    menuItemSections: [],
  }),
};
</script>



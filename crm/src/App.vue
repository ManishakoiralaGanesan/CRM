<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div v-for="(link, index) in items" :key="index">
        <v-menu offset-y :nudge-width="200">
          <template v-slot:activator="{ attrs, on }">
            <v-btn class="white--text ma-5" v-bind="attrs" v-on="on" text>
              {{ link.title }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in link.sections" :key="item" link>
              <v-list-item-title v-text="item.submenu"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    items: [
      {
        title: "Dashboard",
        sections: [
          {
            submenu: "All Leads",
          },
          {
            submenu: " Leads Detail",
          },
        ],
      },
      {
        title: "Home",
        sections: [
          {
            submenu: "Ciities",
          },
          {
            submenu: " Leads status",
          },
        ],
      },
      {
        title: "Reports",
        sections: [
          {
            submenu: "users",
          },
          {
            submenu: " Projects",
          },
        ],
      },
      {
        title: "users",
        sections: [
          {
            submenu: " Add users",
          },
          {
            submenu: " users list",
          },
        ],
      },
    ],
  }),
};
</script>
<style scoped>
</style>

<template>
  <div>
    <v-container>
      <v-toolbar app flat>
        <!-- <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon> -->
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <v-img
          lazy-src=""
          max-height="150"
          max-width="250"
          src="@/assets/etousoft.png"
        ></v-img>
        <v-spacer></v-spacer>
        <!-- <v-container class="hidden-sm-and-down nav-items">
          <router-link to="/" class="ml-6 nav-items">Home</router-link>
          <router-link to="/product" class="ml-6 nav-items">Products</router-link>
          <router-link to="/support" class="ml-6 nav-items">Support</router-link>
        </v-container> -->
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-spacer class="hidden-sm-and-down"></v-spacer>

        <v-spacer></v-spacer>

        <v-spacer></v-spacer>
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="brown" size="36">
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="white--text headline">{{ user.initials }}</span>
                </v-avatar>
                <h3>{{ user.fullName }}</h3>
                <p class="caption mt-1">
                  {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text to="/account">
                  Manage Account
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text to="/"> Sign Out </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-toolbar>
    </v-container>
    <!-- <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-md-and-up">
      <v-img
        lazy-src=""
        max-height="150"
        max-width="250"
        src="@/assets/etousoft.png"
      ></v-img>
      <v-list dense>
        <v-list-item>
          <router-link to="/" class="ml-6 nav-items">Home</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="" class="ml-6 nav-items">Products</router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/about" class="ml-6 nav-items">About</router-link>
        </v-list-item>
          <v-list-item>
          <router-link to="/sign-in" class="ml-6 nav-items">Sign In</router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </div>
</template>


<script>
export default {
  name: "Navbar",

  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      user: {
        initials: "JD",
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
    };
  },
};
</script>


<style scoped>
.nav-items {
  text-decoration: none;
  color: #000;
}
#btn {
  text-transform: none;
}
</style>
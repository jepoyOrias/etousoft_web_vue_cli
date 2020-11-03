<template>
  <div>
    <v-container>
      <v-toolbar app flat>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-img
          lazy-src=""
          max-height="150"
          max-width="250"
          src="@/assets/etousoft.png"
        ></v-img>
        <v-spacer></v-spacer>
        <v-container class="hidden-sm-and-down nav-items">
          <router-link to="/" class="ml-6 nav-items">Home</router-link>
          <router-link to="/product" class="ml-6 nav-items"
            >Products</router-link
          >
          <router-link to="/support" class="ml-6 nav-items"
            >Support</router-link
          >
        </v-container>
        <v-btn text id="btn" large to="/sign-in">Sign in</v-btn>
      </v-toolbar>
    </v-container>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="hidden-md-and-up"
    >
    

      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link to="/" class=" nav-items caption">Home</router-link>
          </v-list-item-content>
          
        </v-list-item>
        <v-list-item>
             <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
  <router-link to="/product" class="nav-items caption">Products</router-link>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item dense class="mt-12">
          <v-btn rounded width="100%" dark color="#01577A">Sign in</v-btn>          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
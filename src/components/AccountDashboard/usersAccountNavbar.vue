<template>
  <div>
    <v-toolbar flat dark color="#01577A" height="60">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <DashboardMenu></DashboardMenu>
      <v-spacer></v-spacer>
      <router-link to="/account" class="white--text nav-items hidden-md-and-up"
        >Etousoft Account</router-link
      >
      <v-container class="hidden-sm-and-down nav-items">
        <router-link to="/account" class="white--text nav-items text-sm-center"
          >Etousoft Account</router-link
        >
        <v-btn
          text
          to="/account/yourinfo"
          class="ml-6 nav-items white--text caption"
          id="btn"
          >Your Info</v-btn
        >
        <!--PAyment And billing Dropdown-->
        <v-menu bottom min-width="200px" offset-y class="ml-6">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text class="nav-items white--text caption" id="btn">
              Payment and Billing
              <span><v-icon>mdi-chevron-down</v-icon></span>
            </v-btn>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <router-link
                    to="/account/orderhistory"
                    class="nav-items black--text mt-2 caption"
                    id="btn"
                    >Order History</router-link
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <router-link
                    to="/account/managepayment"
                    class="nav-items black--text caption"
                    id="btn"
                    >Manage Payment</router-link
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-btn
          text
          to="/account/servicessubscription"
          class="nav-items white--text caption"
          id="btn"
          >Service and Subscription</v-btn
        >
        <v-btn
          text
          to="/account/mycompanies"
          class="nav-items white--text caption"
          id="btn"
          >My Company</v-btn
        >
      </v-container>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <!--AVATAR ACCount-->
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="white" outlined size="36">
              <span class="black--text headline">{{ user.initials }}</span>
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
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link
              to="/account/yourinfo"
              class="nav-items black--text font-weight-medium caption"
              >Your Info</router-link
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon small>mdi-credit-card-settings-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-medium caption"
              >Payment & Billing</v-list-item-title
            >
          </template>

          <v-list-item>
            <v-list-item-icon>
              <v-icon small>mdi-order-alphabetical-ascending</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link
                to="/account/orderhistory"
                class="nav-items black--text caption"
                >Order History</router-link
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon small>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link
                to="/account/managepayment"
                class="nav-items black--text caption"
                >Manage Payment</router-link
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-youtube-subscription</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link
              to="/account/servicessubscription"
              class="nav-items black--text caption"
              >Service and Subscription</router-link
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon small>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <router-link
              to="/account/mycompanies"
              class="nav-items black--text caption"
              >My Company</router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import DashboardMenu from "@/components/AccountDashboard/dashboardMenu";

export default {
  components: {
    DashboardMenu,
  },
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
}
#btn {
  text-transform: none;
  font: 9px;
}
</style>
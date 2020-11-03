<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container mt-12>
        <v-row justify-sm="center" justify-md="start" justify="center" >
          <v-cols cols="12">
            <v-avatar color="#01577A" size="100"
              ><h3 class="white--text">J D</h3></v-avatar
            >
            <h2>John Doe</h2>
            <h6>JohnDoe@etousoft.com</h6>
          </v-cols>
        </v-row>
      </v-container>
      <v-container mt-12>
        <v-row justify-sm="center" justify-md="start" justify="center">
          <v-cols
            cols="12"
            sm="6"
            md="4"
            v-for="content in contents"
            :key="content.name"
            class="mr-5"
          >
            <v-card
              flat
              outlined
              max-width="300px"
              min-width="300px"
              height="400"
              class="mt-6"
            >
              <h4 class="px-2 subtitle-1">{{ content.name }}</h4>
              <v-img
                :src="content.image"
                width="60%"
                height="120"
                class="ml-12 mt-12"
              ></v-img>
              <v-card-subtitle>
                <strong>{{ content.title }}</strong>
              </v-card-subtitle>
              <v-card-text>
                {{ content.desc }}
              </v-card-text>
              <v-row class="mt-12 px-5">
                <v-card-action>
                  <router-link :to="content.path" id="content-link">
                    {{ content.btntext }}
                    <span><v-icon>mdi-keyboard_arrow_right</v-icon></span>
                  </router-link>
                </v-card-action>
              </v-row>
            </v-card>
          </v-cols>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import UsersNavbar from "@/components/AccountDashboard/usersAccountNavbar";
import Footer from "@/components/LandingPage/footer";
export default {
  components: {
    UsersNavbar,
    Footer,
  },

  data: () => ({
    contents: [
      {
        name: "Subscription",
        image: require("@/assets/subscription.png"),
        title: "Try Etousoft products",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "Get etousoft product",
        path: "/account/servicessubscription",
      },

      {
        name: "My companies",
        image: require("@/assets/my_companies.png"),
        title: "FinancePH  can share to employee ",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "Add a company",
        path: "/account/addcompany/",
      },

      {
        name: "Discover",
        image: require("@/assets/discover.png"),
        title: "Discover Etousoft solution",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "Learn more",
        path: "/account/discover",
      },

      {
        name: "Payment &  billing ",
        image: require("@/assets/billing.png"),
        title: "View your recent orders",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "Order histrory",
        path: "/account/orderhistory",
      },
      {
        name: "Affiliate program",
        image: require("@/assets/affiliate.png"),
        title: "View earnings",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "View my earnings",
        path: "/account/affiliate/earnings",
      },

      {
        name: "Security",
        image: require("@/assets/security.png"),
        title: "Update your security info",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
        btntext: "Update security info",
        path: "/account/security",
      },
    ],
  }),
};
</script>

<style scoped>
#content-link {
  text-decoration: none;
}
</style>
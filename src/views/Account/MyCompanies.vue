<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container class="mt-12">
        <h2>Time in PRO</h2>
        <h4 class="ml-2">Members</h4>
        <v-row
          justify-sm="center"
          justify-md="start"
          justify="center"
          align-sm="center"
          align="center"
        >
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-12">
        <v-divider> </v-divider>
      </v-container>
      <v-container class="mt-12">
        <h2>Strategy PH</h2>
        <h4 class="ml-2">Members</h4>
        <v-row
          justify-sm="center"
          justify-md="start"
          justify="center"
          align-sm="center"
          align="center"
        >
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
          <v-col cols="6" sm="3" md="3">
            <v-sheet class="text-center">
              <v-avatar color="#01577A" size="80" class="my-6"
                ><h3 class="white--text">J D</h3></v-avatar
              >
              <h2>Josh Doe</h2>
              <h6>JoshDoe@etousoft.com</h6>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-12">
        <v-divider> </v-divider>
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
};
</script>
<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container mt-12>
        <v-row class="text-center text-md-start">
          <v-col cols="12" md="10">
            <v-avatar color="#01577A" size="100"
            ><h3 class="white--text">J D</h3></v-avatar
          >
          <h2 class="mt-2">John Doe</h2>
          <h5>JohnDoe@etousoft.com</h5>
          <h5 class="mt-6">
            <span><v-icon small>mdi-cake-variant</v-icon></span> May 6 1998
          </h5>
          <h5 class="mt-6">
            <span><v-icon small>mdi-city</v-icon></span> Address
          </h5>
          <h5 class="mt-6">
            <span><v-icon small>mdi-phone</v-icon></span> 0912-1232-212
          </h5>
              <EditProfile class="mt-6"></EditProfile>
            <ChangePassword class="mt-6"></ChangePassword>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-divider></v-divider>
      </v-container>
      <v-container>
        <v-row class="text-center text-md-start">
          <v-col cols="12" md="12">
 <h2 class="mt-2">Company Details</h2>
        <h5>Company email address</h5>
        <h5 class="mt-6">
          <span><v-icon small>mdi-city</v-icon></span> Address
        </h5>
        <h5 class="mt-6">
          <span><v-icon small>mdi-phone</v-icon></span> 0912-1232-212
        </h5>
        <h5 class="mt-6">
          <span><v-icon small>mdi-clock</v-icon></span> 8:00 pm
        </h5>
          </v-col>
        </v-row>
       
      </v-container>
      <v-container>
        <v-divider></v-divider>
      </v-container>
      <v-container>
        <v-row class="text-center text-md-start">
          <v-col cols="12" sm="6" md="4">
            <h2 class="mt-2">Earnings</h2>
          </v-col>
        </v-row>
        <v-row class="text-center text-md-start">
          
          <v-col cols="12" sm="6" md="4">
            <h5 class="mt-6">3 months</h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-account-multiple-check</v-icon></span>
              Invites : 3
            </h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-cash-check</v-icon></span> earning :
              &#8369; 200
            </h5>
          </v-col>
          <v-divider class="hidden-md-and-up" vertical></v-divider>
          <v-col cols="12" sm="6" md="4">
            <h5 class="mt-6">6 months</h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-account-multiple-check</v-icon></span>
              Invites : 6
            </h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-cash-check</v-icon></span> earning :
              &#8369; 400
            </h5>
          </v-col>
          <v-divider></v-divider>
          <v-col cols="12" sm="6" md="4">
            <h5 class="mt-6">12 months</h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-account-multiple-check</v-icon></span>
              Invites : 12
            </h5>
            <h5 class="mt-6">
              <span><v-icon small>mdi-cash-check</v-icon></span> earning :
              &#8369; 800
            </h5>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-divider></v-divider>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import UsersNavbar from "@/components/AccountDashboard/usersAccountNavbar";
import Footer from "@/components/LandingPage/footer";
import EditProfile from "@/components/Profile/EditProfile"
import ChangePassword from "@/components/Profile/ChangePassword"
export default {
  components: {
    UsersNavbar,
    Footer,
    EditProfile,
    ChangePassword
  },
};
</script>


<style scoped>
#router {
  text-decoration: none;
}
</style>
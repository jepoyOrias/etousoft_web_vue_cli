<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container class="mt-12">
        <h2>Manage your payment methods</h2>
      </v-container>
      <v-container class="mt-12">
        <h3>Notifications</h3>
        <v-card min-height="100" flat outlined class="mt-6">
          <v-row>
            <v-col cols="10" sm="10" md="10">
              <h5 class="ml-6">No Notifications</h5>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <v-container class="mt-12">
        <h3>Transaction - <span>past 60 days</span></h3>
        <v-card min-height="100" flat outlined class="mt-6">
          <v-row>
            <v-col cols="10" sm="10" md="10">
              <h5 class="ml-6">No Transaction for the past 60 days</h5>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
      <v-container class="mt-12">
        <h3>Payment methods</h3>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-card min-height="100" flat outlined class="mt-6">
              <h5 class="ml-6 pa-12">
                <span><v-icon color="black">mdi-plus</v-icon></span> Add payment
                method
              </h5>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card min-height="100" flat class="mt-6">
              <h5 class="ml-6 mt-2">
                <span><v-icon color="black">mdi-credit-card-check</v-icon></span
                >Credit card Information
              </h5>
              <h5 class="ml-6 mt-2">Credit Card number (123123*****)</h5>
              <h5 class="ml-6 mt-2">Expiration date</h5>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card min-height="100" flat class="mt-6">
              <h5 class="ml-6 mt-2">
                <span><v-icon color="black">mdi-credit-card-check</v-icon></span
                >Credit card Information
              </h5>
              <h5 class="ml-6 mt-2">Credit Card number (123123*****)</h5>
              <h5 class="ml-6 mt-2">Expiration date</h5>
            </v-card>
          </v-col>
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
};
</script>
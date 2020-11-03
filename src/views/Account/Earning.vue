<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container class="mt-12">
        <h2>Earnings</h2>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <v-card class="mt-12" flat>
              <v-card-title>2020</v-card-title>
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw
                :labels="labels"
                :color="black"
              >
              </v-sparkline>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card class="mt-12" flat>
              <v-card-title class="font-weight-medium subtitle-2">Total Earnings for the past 3 months</v-card-title>
              <h4 class="ml-6 caption">&#8369; 6,000</h4>
              <v-divider></v-divider>
               <v-card-title class="font-weight-medium subtitle-2">Total Earnings for the past 6 months</v-card-title
              >
              <h4 class="ml-6 caption">&#8369; 12,000</h4>
              <v-divider></v-divider>
               <v-card-title class="font-weight-medium subtitle-2">Total Earnings for the past 1 year</v-card-title
              >
              <h4 class="ml-6 caption">&#8369; 20,000</h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-12">
        <v-divider></v-divider>
      </v-container>

      <v-container class="mt-12">
        <h2>Invites</h2>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <v-card class="mt-12" flat>
              <v-card-title>2020</v-card-title>
              <v-sparkline
                :value="value"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                line-width="1"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                fill="true"
                type="bar"
                :auto-line-width="autoLineWidth"
                auto-draw
                auto-draw-duration="1500"
                :labels="labels"
                :color="black"
              >
              </v-sparkline>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card class="mt-12" flat>
             <v-card-title class="font-weight-medium subtitle-2">Total Successful invites</v-card-title>
              <h4 class="ml-6  caption">
                <span
                  ><v-icon class="pr-6"
                    >mdi-account-multiple-check</v-icon
                  ></span
                >12
              </h4>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-12">
        <v-divider></v-divider>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import UsersNavbar from "@/components/AccountDashboard/usersAccountNavbar";
import Footer from "@/components/LandingPage/footer";

const gradients = [["#01577A", "#00929B", "#AAC7D2"]];

export default {
  components: {
    UsersNavbar,
    Footer,
  },
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[0],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    value: [3, 29, 26, 45, 67, 23, 78, 12, 98, 12, 78, 12],
    gradientDirection: "top",
    gradients,
    fill: false,
    type: "trend",
    autoLineWidth: false,
  }),
};
</script>
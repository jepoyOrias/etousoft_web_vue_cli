<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container id="home" class="px-12 mt-12">
        <v-row>
          <v-col xs="12" sm="4" md="4">
            <h3>Refine</h3>
            <hr />
            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-header> Show </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item> All </v-list-item>
                      <v-list-item> In progress </v-list-item>
                      <v-list-item> Returned/Refund </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <!--End of Show-->
            <hr />
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  Order within
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item> All </v-list-item>
                      <v-list-item> In progress </v-list-item>
                      <v-list-item> Returned/Refund </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
          <v-col xs="12" sm="8" md="8" class="py-12">
            <v-card flat elevation="10">
              <v-container id="home">
                <v-row justify="center" align="center">
                  <h4 class="px-12 py-5">
                    Stuff you buy, or subscriptions you pay for, will show up
                    here.
                  </h4>
                </v-row>
                <v-row justify="center" align="center">
                  <v-img
                    src="@/assets/orderhistory.png"
                    width="60%"
                    height="20%"
                    class="ml-12 mt-12"
                  ></v-img>
                </v-row>
              </v-container>
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
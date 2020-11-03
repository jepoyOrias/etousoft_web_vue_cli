<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <v-carousel v-model="model" hide-delimiter-background>
          <v-carousel-item light fill-height>
            <v-row justify="center" align="center" class="mt-12">
              <v-col cols="12" sm="6" md="6" overflow>
                <v-row justify="center" align="center">
                  <v-col cols="10" md="8">
                    <h2 class="mt-12 font-weight-bold">Time in Pro</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, itaque.
                    </p>
                  </v-col>
                </v-row>

                <v-row justify="center" align="center">
                  <v-col cols="10" md="8">
                    <v-btn
                      flat
                      class="white--text text-capitalize btn"
                      color="#01577A"
                      >Subscribe<span
                        ><v-icon small>mdi-arrow-right</v-icon></span
                      ></v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-row justify="center" align-center>
                  <v-img lazy-src="" src="@/assets/time.jpg"></v-img>
                </v-row>
                <v-row justify="center" align-center>
                  <!-- <v-img
                    lazy-src=""
                    src="@/assets/timeinpro.png"
                      max-width="40%"
                    ></v-img> -->
                </v-row>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-container class="mt-12">
        <h2 >What's new</h2>
        <Products></Products>
      </v-container>
      <v-container>
        <v-sheets>
          <v-card flat max-height="300" min-height="300">
            <v-row class="ml-6">
              <v-col cols="10">
                <h1 class="pt-12 pb-6">Etousoft Strategy PH</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe cupiditate, quisquam accusantium consectetur enim
                  doloribus facilis cumque ab corporis praesentium aut molestiae
                  itaque magnam, labore minus! Dolorum fugiat soluta doloremque
                  ipsa sequi veritatis maxime voluptates perspiciatis vitae
                  eveniet! Assumenda, necessitatibus!
                </p>
                <v-btn class="white--text btn" color="#01577A"
                  >Learn more</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-sheets>
      </v-container>
      <v-container class="mt-12">
        <h2 class="mt-12">For business</h2>
        <Products></Products>
      </v-container>

      <Footer class="mt-12"></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/LandingPage/navbar";
import Footer from "../components/LandingPage/footer";
import Products from "../components/Product/productspartial";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Products,
  },
};
</script>

<style scoped>
.btn {
  text-transform: none;
}
#learn {
  background-image: url("../assets/strategy.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

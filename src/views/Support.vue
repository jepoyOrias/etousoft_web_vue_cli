<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <v-sheet height="500" width="100%" id="img"> </v-sheet>
        <div class="display-2 centered">
          Welcome to Etousoft Support
          <v-text-field
            placeholder="How can we help you?"
            outlined
            filled
            class="mt-4"
            id="search"
            append-icon="mdi-arrow-right"
          >
          </v-text-field>
        </div>
      </v-container>
      <v-container class="mt-12">
        <Products> </Products>
      </v-container>
      <v-container class="mt-12">
        <h2>How to use our products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ab
          unde ratione impedit cum laborum doloremque amet deserunt cupiditate a
          labore dolorem delectus voluptatem nobis porro voluptas laboriosam
          magni neque omnis minus aut, tempore rem maiores eum. Ex incidunt quae
          ea eligendi consequuntur cum debitis velit animi quas, accusamus eaque
          excepturi hic quibusdam illum quasi quod suscipit praesentium
          perspiciatis nobis error sit! Possimus numquam facilis enim. Tenetur
          blanditiis, quaerat provident nisi hic doloremque iusto dolor dicta
          perspiciatis eaque aliquam assumenda!
        </p>
      </v-container>
      <v-container class="mt-12">
        <h2>Learn to use Etousoft Time in Pro</h2>
        <v-row>
          <v-col cols="12" sm="12" md="6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0BIaDVnYp2A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0BIaDVnYp2A"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer class="mt-12"></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/LandingPage/navbar";
import Footer from "../components/LandingPage/footer";
import Products from "../components/Product/productspartial";
export default {
  components: {
    Navbar,
    Footer,
    Products,
  },
  methods: {},
};
</script>


<style scoped>
#img {
  background-image: url("../assets/support.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
}
.centered {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#search {
  background-color: white;
  color: white;
}
</style>
<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container class="mt-12">
        <h2>Subscribed Product</h2>
        <Product></Product>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/AccountDashboard/navbar";
import Footer from "@/components/LandingPage/footer";
import Product from "@/components/Product/productspartial";

export default {
  components: {
    Navbar,
    Footer,
    Product,
  },
};
</script>
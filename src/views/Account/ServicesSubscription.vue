<template>
  <v-app>
    <UsersNavbar></UsersNavbar>
    <v-main>
      <v-container mt-12>
        <h2>Services and Subscription</h2>
        <Products></Products>
      </v-container>
      <v-container mt-12>
        <h2>Perfect for business</h2>
        <Products></Products>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import UsersNavbar from "@/components/AccountDashboard/usersAccountNavbar";
import Footer from "@/components/LandingPage/footer";
import Products from "@/components/Product/productspartial";
export default {
  components: {
    UsersNavbar,
    Footer,
    Products,
  },
};
</script>


<style scoped>
#router {
  text-decoration: none;
}
</style>
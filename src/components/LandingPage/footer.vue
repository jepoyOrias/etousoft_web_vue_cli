<template>
  <div>
    <v-container class="mt-12">
      <h2>Help with etousoft account</h2>
      <v-row class="mt-4">
        <router-link to="" class="ml-4" id="help"
          >What is etousoft account ?</router-link
        >
      </v-row>
      <v-row class="mt-4">
        <router-link to="" class="ml-4" id="help"
          >Help for when you can't sign in
        </router-link>
      </v-row>
      <v-row class="mt-4">
        <router-link to="" class="ml-4" id="help"
          >How to reset your password</router-link
        >
      </v-row>
    </v-container>

    <v-footer padless class="mt-12">
      <v-card flat tile width="100%" color="grey lighten-2">
        <v-row class="mt-12">
          <v-col cols="12" sm="6" md="4">
            <v-row>
              <h3 class="px-12">About us</h3>
            </v-row>
            <v-row>
              <p class="px-12 pt-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus, itaque! Debitis fuga quo dolore. Itaque repudiandae
                sint sit quasi, quam a illo, voluptate eius ducimus perferendis
                accusamus iusto nisi alias.
              </p>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-row class="px-12">
              <h3>Contact us</h3>
            </v-row>
            <v-row>
              <p class="px-12 pt-6">Etousoft@etousoft.com</p>
            </v-row>
            <v-row>
              <p class="px-12">FinancePH@finance.com</p>
            </v-row>
            <v-row>
              <p class="px-12">32-23123-12</p>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-row class="px-12">
              <h3>Product Support</h3>
            </v-row>
            <v-row>
              <p class="px-12 pt-6">Support@product.com</p>
            </v-row>
            <v-row>
              <p class="px-12">02193-23-2212</p>
            </v-row>
          </v-col>
        </v-row>
        <v-divider> </v-divider>
        <v-card-text class="text-center">
          {{ new Date().getFullYear() }} — <strong>Etousoft</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#help {
  text-decoration: none;
}
</style>
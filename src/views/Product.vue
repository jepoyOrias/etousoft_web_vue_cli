<template>
 <v-app>
    <Navbar></Navbar>
    <v-main>
         <v-container>
          <v-sheet
            width="100%"
            id="img"
            >
            </v-sheet>
                    <div>
                       <h2>Search Etousoft products</h2>
                      <v-text-field
                      placeholder="search..."
                      outlined
                      filled
                      class="mt-4" id="search"
                      append-icon="mdi-arrow-right">
                      </v-text-field>
          </div>
          </v-container>
        <v-container class="mt-12">
            <h2>New Products</h2>
            <Products></Products>
        </v-container>
           <v-container class="mt-12">
            <h2>For business</h2>
            <Products></Products>
        </v-container>
          
    </v-main>
    <Footer class="mt-12"></Footer>
 </v-app>
</template>

<script>

import Navbar from '../components/LandingPage/navbar'
import Footer from '../components/LandingPage/footer'
import  Products from '../components/Product/productspartial'
export default {
    components:{
        Navbar,Footer,Products
    }
}
</script>

<style scoped>

    
</style>
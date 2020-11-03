<template>
    <v-app>
            <v-main>
                <v-container fill-height >
                    <v-row justify="center" align="center">
                    <v-window v-model="step">
                        <v-window-item
                        :value="1">
                            <v-sheet 
                           flat
                           
                            max-width="500"
                            width="500"
                            height="400"
                            >
                            <v-row class="mt-12 pt-6" justify="center">
                                <v-col cols="8" sm="8" md="8">
                                <v-img
                            lazy-src=""
                            width="300"
                            src="@/assets/etousoft.png"
                            class="px-12"
                                ></v-img>
                                <h3 class="mt-6">Sign in</h3>
                                <v-text-field
                                label="Email"
                                class="mt-6"
                                 color="black"
                                ></v-text-field>
                                No account ?<router-link  to="/sign-up" id="router" class="body-2"> Create One</router-link>
                                
                                </v-col>
                            </v-row>
                            <v-row justify="center">
                                    <v-col cols="8" sm="8" md="8">
                                        <router-link  to="" id="router" class="body-2"> forgot email ?</router-link>
                                    </v-col>
                            </v-row>
                            <v-row justify="end">
                            <v-col cols="10" sm="8" md="10" > 
                               <v-btn id="btn"  color="#01577A" class="white--text px-10 font-weight-light"
                               @click="step++">Next</v-btn>
                            </v-col>
                            </v-row>
                            </v-sheet>
                        </v-window-item>
                         <v-window-item
                        :value="2">
                            <v-sheet 
                          flat
                            max-width="500"
                            width="500"
                            height="400"
                            >
                            <v-row class="mt-12 pt-12" justify="center">
                                <v-col cols="8" sm="8" md="8">
                                <v-img
                            lazy-src=""
                            width="300"
                            src="@/assets/etousoft.png"
                            class="px-12"
                                ></v-img>
                                <h3 class="mt-6">Sign in</h3>
                                  <v-text-field
                                    :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="showpassword ? 'text' : 'password'"
                                    label="Password"
                                    class="input-group--focused"
                                    color="black"
                                    @click:append="showpassword = !showpassword"
                                ></v-text-field>
                                <router-link  to="" id="router"> forgot password ?</router-link>
                                </v-col>
                            </v-row>
                            <v-row justify="end">
                            <v-col cols="10" sm="8" md="10" > 
                            <v-btn id="btn"  color="#01577A" class="white--text px-10 font-weight-light" to="/dashboard">Sign in</v-btn>
                            </v-col>
                            </v-row>
                            </v-sheet>
                        </v-window-item>
                    </v-window>
                    </v-row>
                </v-container>
            </v-main>
    </v-app>
</template>

<script>
export default {
    data: () =>({
        step:1,
        showpassword: '',
    })
}
</script>


<style scoped>
    #router{
        text-decoration: none;
    }
    #btn{
        text-transform: none;
    }
</style>
<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-window v-model="step">
              <!--Email-->
            <v-window-item :value="1">
              <v-sheet  max-width="500" width="500" height="400" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">Create Account</h3>
                    <v-text-field
                      label="Email"
                      class="mt-6"
                      color="black"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
            <!--Password-->
            <v-window-item :value="2">
              <v-sheet max-width="500" width="500" height="400" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">Create password</h3>
                    <v-text-field
                      :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showpassword ? 'text' : 'password'"
                      label="Password"
                      class="input-group--focused"
                      color="black"
                      @click:append="showpassword = !showpassword"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
            <!--Name-->
            <v-window-item :value="3">
              <v-sheet max-width="500" width="500" height="450" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">What's your name</h3>
                    <v-text-field
                      label="Firstname"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                    <v-text-field
                      label="Lastname"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
               <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
            <!--Birthdate and Address-->
            <v-window-item :value="4">
              <v-sheet  max-width="500" width="500" height="450" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">What's your Birthdate</h3>
                    <v-text-field
                      label="Address"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Birthdate"
                          prepend-inner-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
            <!--Setting up the company-->
                 <v-window-item :value="5">
              <v-sheet  max-width="500" width="500" height="450" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">Let's setup your company</h3>
                    <v-text-field
                      label="Comapny name"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                    <v-text-field
                      label="Company Email"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
               <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
              <!--Setting up the Contact and address company-->
                  <v-window-item :value="6">
              <v-sheet max-width="500" width="500" height="450 " flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">Let's setup your company</h3>
                    <v-text-field
                      label="Comapny address"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                    <v-text-field
                      label="Company Contact (optional)"
                      class="mt-6"
                      color="black"
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
               <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        @click="step++"
                        >Next</v-btn
                      >
                    </v-row>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-window-item>
            <!--Setting up the Timezone and Logo company-->
               <v-window-item :value="7">
              <v-sheet  max-width="500" width="500" height="450" flat>
                <v-row class="mt-12 pt-12" justify="center">
                  <v-col cols="8" sm="8" md="8">
                    <v-img
                      lazy-src=""
                      width="300"
                      src="@/assets/etousoft.png"
                      class="px-12"
                    ></v-img>
                    <h3 class="mt-6">Let's setup your company</h3>
                     <v-select
                                :items="items"
                                label="Timezone"
                                ></v-select>
                      <v-file-input
                        :rules="imgRules"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        label="Company logo"
                    ></v-file-input>
                  </v-col>
                </v-row>
               <v-row>
                  <v-col cols="10" sm="8" md="10">
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="btn"
                        text
                        class="mr-2 px-10 font-weight-medium"
                        @click="step--"
                        >Back</v-btn
                      >
                      <v-btn
                        id="btn"
                        color="#01577A"
                        class="white--text px-10 font-weight-light"
                        to="/dashboard"
                        >Next</v-btn
                      >
                    </v-row>
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
  data: () => ({
    step: 1,
    showpassword: "",
    date: new Date().toISOString().substr(0, 10),
    modal: false,
  }),
};
</script>


<style scoped>
#router {
  text-decoration: none;
}
#btn {
  text-transform: none;
}
</style>



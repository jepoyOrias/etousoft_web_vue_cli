<template>
  <v-app>
    <v-container class="mt-12">
      <v-row justify="center" align="center">
        <v-col cols="10">
          <v-stepper v-model="step" vertical>
            <v-stepper-step :complete="step > 1" step="1">
              Select a way to pay
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-row class="justify-content-center">
                <v-col cols="10" md="10">
                  <h3>You’re one step away to start using Etousoft product!</h3>
                  <h6>
                    Etousoft SeminarsPH ₱4,699.00 every year By selecting
                    Subscribe, you agree to the Store Terms of Sale. Starting
                    today, we'll charge you ₱4,699.00 every year. You'll be
                    notified before any price changes. Cancel any time to stop
                    future charges by visiting your Etousoft account.
                  </h6>

                  <v-row>
                    <v-col cols="10" md="6">
                      <v-select
                        dense
                        :items="subs"
                        filled
                        :label="subs[0]"
                        class="primary--text"
                      ></v-select>
                      <v-select
                        dense
                        filled
                        label="Choose Payment method"
                        class="primary--text"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row dense>
                    <v-col cols="12" sm="4" md="6">
                      <v-card min-height="100" flat outlined @click="goto">
                        <h5 class="ml-6 pa-12">
                          <span><v-icon color="black">mdi-plus</v-icon></span>
                          Add payment method
                        </h5>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-btn color="primary" @click="step++" class="mt-12">
                    Continue
                  </v-btn>
                  <v-btn text class="mt-12" @click="goto"> Cancel </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-step :complete="step > 2" step="2">
              Review And Confirmation
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-row class="justify-content-center">
                <v-col cols="10" md="10">
                  <h3>You’re one step away to start using Etousoft product!</h3>
                  <h6>
                    Etousoft SeminarsPH ₱4,699.00 every year By selecting
                    Subscribe, you agree to the Store Terms of Sale. Starting
                    today, we'll charge you ₱4,699.00 every year. You'll be
                    notified before any price changes. Cancel any time to stop
                    future charges by visiting your Etousoft account.
                  </h6>
                  <h6 class="mt-12">Payment method:</h6>
                  <h6>Card name : master card</h6>
                  <h6>card number : 988-34-123****</h6>
                  <h6>billing address : PH</h6>

                  <v-btn color="primary" @click="step++" class="mt-12">
                    Continue
                  </v-btn>
                  <v-btn text class="mt-12" @click="step--"> Back </v-btn>
                </v-col>
              </v-row>
            </v-stepper-content>

            <v-stepper-step :complete="step > 3" step="3">
              Get the product
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-row>
                <v-col cols="12">
                  <h3>Thank you for subscribing Etousoft products</h3>
                  <h6>Etousoft SeminarsPH</h6>
                  <h6>₱4,699.00 every year</h6>

                  <h6>
                    By selecting Subscribe, you agree to the Store Terms of
                    Sale. Starting today, we'll charge you ₱4,699.00 every year.
                    You'll be notified before any price changes. Cancel any time
                    to stop future charges by visiting your Etousoft account.
                  </h6>
                </v-col>
              </v-row>
              <v-btn color="primary" @click="goto">
                Go back to Subscription
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      subs: ["Monthly (price per month)", "Annually (price per year)"],
    };
  },
  methods: {
    goto() {
      this.$router.push({ path: "/account/servicessubscription" });
    },
  },
};
</script>
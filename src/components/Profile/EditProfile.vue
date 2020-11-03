<template>
<div>
        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
     
          text
          class="black--text"
          v-bind="attrs"
          v-on="on"
          id="btn"
          small
        >
          <span><v-icon  small left>mdi-pencil</v-icon></span>Edit information
        
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User's Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="First name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Middle name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Last name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
              </v-col>
            
           
              <v-col
                cols="12"
                sm="6"
              >
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
              <v-col
                cols="12"
                sm="6"
              >
                  <v-text-field
                  label="Contact number"
                ></v-text-field>
        
              </v-col>
                     <v-col cols="12">
                <v-text-field
                  label="address"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
</div>
</template>

<script>
export default {
    data:() =>({
        dialog: false,
        date: new Date().toISOString().substr(0, 10),
        modal:false,
    })
}
</script>



<style scoped>
#btn{
    text-decoration: none;
    text-transform: none;
}    
</style>
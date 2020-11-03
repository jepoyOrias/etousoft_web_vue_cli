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
          <span><v-icon  small left>mdi-lock</v-icon></span>Change Password
        
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
           <v-col cols="12" sm="12" md="12">
               <h4 class="mb-12">Change your password</h4>
                <v-text-field label="Your password" type="password">

                </v-text-field>
                 <v-text-field label="New password" type="text">
                    
                </v-text-field>
                    <v-text-field label="Confirm new password" type="password">
                    
                </v-text-field>
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
    })
}
</script>

<style scoped>
#btn{
    text-transform: none;
    text-decoration: none;
}
</style>
<template>
  <div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-view-dashboard</v-icon>
      </template>
      <v-card width="400">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Subscribed Products</v-list-item-title>
              <v-list-item-subtitle>dashboard</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-row>
          <v-col cols="6" md="6">
            <v-list>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>

              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>

              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="6" md="6">
            <v-list>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>

              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>

              <v-list-item>
                <router-link to="">Product name</router-link>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-menu>
  </div>
</template>
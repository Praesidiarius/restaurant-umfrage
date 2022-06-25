<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center mx-auto">
        <span class="text-md-h4">
          {{ $t('title') }}
        </span>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-end mx-auto">
        <LocaleSwitcher></LocaleSwitcher>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import LocaleSwitcher from "@/components/LocaleSwitcher";
export default {
  name: 'App',
  components: {LocaleSwitcher},
  data: () => ({
    //
  }),
};
</script>

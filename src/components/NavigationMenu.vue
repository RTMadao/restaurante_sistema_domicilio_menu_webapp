<template>
    <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <h1>{{nombreRestaurante_titulo}}</h1>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    
  }),
  computed: {
      ...mapGetters(['nombreRestaurante_titulo'])
  },
};
</script>
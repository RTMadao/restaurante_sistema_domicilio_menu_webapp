<template>
  <v-app>
    <navigationMenu/>
    <v-main>
      <div class="my-3" v-for="categoria in menu" :key="categoria.nombreCategoria">
        <categoriaMenu :categoria="categoria" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import navigationMenu from './components/NavigationMenu';
import categoriaMenu from './components/categoriaMenu.component';
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    navigationMenu,
    categoriaMenu
  },
  computed: {
    ...mapGetters(['menu'])
  },
  data: () => ({
    //
  }),
};
</script>

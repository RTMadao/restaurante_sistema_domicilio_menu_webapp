<template>
    <div>
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="black--text align-end"
            height="200px"
            :src="categoria.imagen"
            >
            </v-img>
            <v-card-title>{{categoria.nombreCategoria}}</v-card-title>
            <v-card-subtitle>{{categoria.descripcion}}</v-card-subtitle>

            <v-card-text class="text--primary">
                <v-row v-for="plato in categoria.platos" :key="plato.nombre">
                    <v-col cols="8">{{plato.nombre}}</v-col>
                    <v-col class="text-right" cols="4">{{formatoMoneda(plato.precio)}}</v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['categoria'],
    methods: {
        formatoMoneda (valor) {
            return '$' + new Intl.NumberFormat('es-co', { currency: 'COP' }).format(valor)
        }
    }
}
</script>
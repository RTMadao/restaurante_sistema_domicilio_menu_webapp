import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nombreRestaurante: 'Rico Mondongo',
    menu: [
      {
        nombreCategoria: 'Sopas de mondongo',
        descripcion: 'Van acompañadas de una porción de arroz',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601168396/mondongo_psgxot.jpg',
        platos: [
          {
            nombre: 'Sopa de mondongo pequeña',
            precio: 11500
          },
          {
            nombre: 'Sopa de mondongo mediana',
            precio: 13000
          },
          {
            nombre: 'Sopa de mondongo grande',
            precio: 16500
          },
          {
            nombre: 'Sopa de mondongo pequeña llevar',
            precio: 11800
          },
          {
            nombre: 'Sopa de mondongo mediana llevar',
            precio: 13300
          },
          {
            nombre: 'Sopa de mondongo grande llevar',
            precio: 17500
          }       
        ]
      },
      {
        nombreCategoria: 'Sancocho trifásico',
        descripcion: 'Van acompañadas de una porción de arroz',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601170658/IMG_20200613_140606_ach2sw.jpg',
        platos: [
          {
            nombre: 'Sancocho trifásico mediano',
            precio: 16000
          },
          {
            nombre: 'Sancocho trifásico grande',
            precio: 20000
          },
          {
            nombre: 'Sancocho trifásico mediano llevar',
            precio: 16300
          },
          {
            nombre: 'Sancocho trifásico grande llevar',
            precio: 21000
          }      
        ]
      },
      {
        nombreCategoria: 'Bandejas de asado',
        descripcion: 'Se elige el acompañante papas a la francesa, patacón o yuca, y cuenta con una porción de ensalada',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601172041/bandeja_especial_ekweie.jpg',
        platos: [
          {
            nombre: 'Bandeja de carne',
            precio: 21000
          },
          {
            nombre: 'Bandeja de churrasco',
            precio: 22000
          },
          {
            nombre: 'Bandeja de punta gorda',
            precio: 22000
          },
          {
            nombre: 'Bandeja de pechuga',
            precio: 22000
          },
          {
            nombre: 'Bandeja de lomo de cerdo',
            precio: 22000
          },
          {
            nombre: 'Bandeja especial',
            precio: 32000
          }      
        ]
      },
      {
        nombreCategoria: 'Corrientes y secos',
        descripcion: 'De lunes a viernes, no incluye días festivos',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601176501/seco_akjubn.jpg',
        platos: [
          {
            nombre: 'Corriente',
            precio: 8500
          },
          {
            nombre: 'Corriente llevar',
            precio: 9000
          },
          {
            nombre: 'Seco',
            precio: 7500
          },
          {
            nombre: 'Seco llevar',
            precio: 8000
          }  
        ]
      },
      {
        nombreCategoria: 'Porciónes adicionales',
        descripcion: '',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601176510/porciones_hhp2xd.jpg',
        platos: [
          {
            nombre: 'Porción de papas a la francesa',
            precio: 5800
          },
          {
            nombre: 'Porción de patacón',
            precio: 4000
          },
          {
            nombre: 'Porción de papa al vapor',
            precio: 2500
          },
          {
            nombre: 'Porción de yuca',
            precio: 2500
          },
          {
            nombre: 'Porción de arroz',
            precio: 2000
          },
          {
            nombre: 'Porción de ensalada',
            precio: 3000
          },
          {
            nombre: 'Porción de carne',
            precio: 5000
          }     
        ]
      },
      {
        nombreCategoria: 'Bebidas',
        imagen: 'https://res.cloudinary.com/dlb2shwhr/image/upload/v1601176494/jugo_s2qqw4.jpg',
        platos: [
          {
            nombre: 'Gaseosa',
            precio: 2300
          },
          {
            nombre: 'Cerveza Aguila light',
            precio: 3300
          },
          {
            nombre: 'Cerveza Club colombia',
            precio: 3600
          },
          {
            nombre: 'Vaso agua de panela',
            precio: 2000
          },
          {
            nombre: 'Jarra agua de panela',
            precio: 7000
          },
          {
            nombre: 'Botella de agua',
            precio: 2500
          },
          {
            nombre: 'Jugos naturales',
            precio: 4200
          },
          {
            nombre: 'Limonada cerezada',
            precio: 5000
          },
          {
            nombre: 'Limonada coco',
            precio: 5500
          },
          {
            nombre: 'Jarra jugos naturales',
            precio: 11000
          },
          {
            nombre: 'Jarra limonada cerezada o coco',
            precio: 14000
          },
          {
            nombre: 'Aguila light michelada',
            precio: 4000
          }
          ,
          {
            nombre: 'Club colombia michelada',
            precio: 4300
          }
        ]
      }
    ]
  },
  getters: {
    nombreRestaurante_titulo: state => state.nombreRestaurante.toUpperCase(),
    menu: state => state.menu
  },
  mutations: {
    
  },
  actions: {

  }
})
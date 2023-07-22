import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            { name: 'Banana', price: 30 },
            { name: 'Apple', price: 23 },
            { name: 'Cake', price: 50 },
            { name: 'Sweet', price: 39 },
        ],
    },
    getters: {
        saleProducts: (state) => {
            let saleProducts = state.products.map((product) => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2,
                };
            });

            return saleProducts;
        },
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach((product) => {
                product.price -= payload;
            });
        },
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        },
    },
    modules: {},
});

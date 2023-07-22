<template>
    <div id="product-list-two">
        <h1>Product List Two</h1>
        <ul>
            <li v-for="product in saleProducts" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price"> Rs. {{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePrice(4)">ghh</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['saleProducts']),
        // products() {
        //     return this.$store.state.products;
        // },
        
    },
    methods: {
        ...mapActions(['reducePrice']),
        
    },
};
</script>

<style></style>

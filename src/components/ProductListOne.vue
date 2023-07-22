<template>
    <div id="product-list-one">
        <h1>Product List One</h1>
        <ul>
            <li v-for="product in products" :key="product.name">
                <span class="name">{{product.name }}</span>
                <span class="name"> Rs. {{product.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed:{
        products(){
            return this.$store.state.products
        }
    }
    
};
</script>

<style></style>

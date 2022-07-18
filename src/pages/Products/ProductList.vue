<template>
<section class="containerList">
   <product-item v-for="product in filteredProducts" :key="product.id" :title="product.product_name" :price="product.price" :image="product.image" :stock="product.stock_count"></product-item>
   <h4>{{ title }}</h4>
   </section>
</template>

<script>
import productItem from '../../components/ProductCard.vue'

export default {
    
    name: 'ProductList',
    components: {
     productItem
    },
    data() {
     return this.$store.getters['products/loadProductItems']
    },
    computed: {
        filteredProducts() {
            return this.$store.getters['products/products']
        },
    },
    created() {
        this.loadProductItems();
    },
    methods: {
        loadProductItems(){
        this.$store.dispatch('products/loadProductItems');
        }
    }
}
</script>

<style scoped>
.containerList {
    height: auto;
    background-color: white;
    flex-wrap: wrap;
    width: 100%;
    padding: 1%;
    display: flex;
    padding-bottom: 3%;
}
li {
    color: black;
    font-family: 'Poppins_bold';
}
</style>
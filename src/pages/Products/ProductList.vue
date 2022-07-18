<template>
<section class="containerList">
   <product-item v-for="result in filteredProducts" :key="result.id" :title="result.product_name" :price="result.price" :image="result.image" :stock="result.stock_count"></product-item>
   </section>
</template>

<script>
import productItem from '../../components/ProductCard.vue'
import results from '../../store/modules/Products/actions'

export default {

    name: 'ProductList',
    components: {
     productItem
    },
    data() {
        return {
            results: results
        }
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
        loadProductItems(results) {
           this.$store.dispatch('products/loadProductItems')
           return results
        }
              },
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
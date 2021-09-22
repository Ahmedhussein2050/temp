<template>
    <section class="mx-4 px-4 py-0">
        <ul v-if="hasProducts">
            <div class="row">
                    <product-details 
                    v-for="product in products.slice(0,4)" 
                    :key="product.id"
                    :id="product.id"
                    :name="product.name"
                    :image="product.image"
                    :salary="product.salary"
                    :rate="product.rate"
                    >
                    </product-details>
            </div>
        </ul>
        <h1 v-else>There is no products...!</h1>
    </section>
</template>
<script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: {
        ProductDetails,
    },
    computed: {
        products(){
            return this.$store.getters['products/products'];
        },
        hasProducts(){
            return this.$store.getters['products/hasProducts']
        }
    }
}
</script>
<style scoped>

ul {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
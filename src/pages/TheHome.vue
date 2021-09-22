<template>
  <the-slider></the-slider>
  <products-hiddeing>Top Deals</products-hiddeing>
  <products-list></products-list>
  <products-hiddeing>Electronics</products-hiddeing>
  <products-list></products-list>
  <products-hiddeing>Fashions</products-hiddeing>
  <products-list></products-list>
  <products-hiddeing>SuperMarket</products-hiddeing>
  <products-list></products-list>


</template>
<script>
import ProductsHiddeing from "./products/ProductsHiddeing.vue";
import TheSlider from "./TheSlider";
import ProductsList from "./products/ProductsList.vue";
export default {
  components: {
    ProductsList,
    TheSlider,
    ProductsHiddeing,
  },
};
</script>

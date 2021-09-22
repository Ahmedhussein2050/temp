<template>
  <div class="first-header">
    <side-nave></side-nave>

    <ul>
      <li>
        <span class="shopping-cart">
          <router-link to="/cart" class="icon">
            <fa :icon="{ prefix: 'fas', iconName: 'shopping-cart' }"/>
          </router-link>
          <span class="cart-counter">{{ cartQuantity }}</span>
        </span>
      </li>
      <li>
        <router-link to="/favourites">Favourites</router-link>
      </li>
    </ul>
    <form class="search d-flex">
      <input
        class="form-control me-2 sInput"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  </div>
  <div class="header">
    <ul>
      <li>
        <router-link to="/home">Home <fa icon="home"/></router-link>
      </li>
      <li><router-link to="/BandH">Beauty</router-link></li>
      <li><router-link to="/electronics">Electronics</router-link></li>
      <li><router-link to="/fashion">Fashion</router-link></li>
      <li><router-link to="/mobiles">Mobiles</router-link></li>
      <li><router-link to="/supermarket">Supermarket</router-link></li>
      <li><router-link to="/details">Details</router-link></li>
    </ul>
  </div>
</template>
<script>
import SideNave from "./SideNave.vue";
export default {
  components: {
    SideNave,
  },
  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"];
    },
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 40px;
  background-color: #3d4584;
  display: flex;
  justify-content: center;
}
.first-header {
  width: 100%;
  height: 2rem;
  background-color: #dbe4f3;
  position: relative;
}
.shopping-cart {
  position: relative;
  left: 1000px;
  width: 30px;
  z-index: 513513513;
}
.icon {
  font-size: 120%;
  color: #3d4584 !important;
  padding: 0;
  position: relative;
  top: 2 px;
  z-index: 1;
}
.icon:active,
.icon:hover,
.icon.router-link-active {
  border: none !important;
}
.cart-counter {
  font-size: 10px;
  background-color: rgb(243, 21, 21);
  color: white;
  border-radius: 50%;
  font-weight: 700;
  padding: 0px 4px;
  position: relative;
  z-index: 645;
  bottom: 12px;
  right: 40px;
  user-select: none;
}
.search {
  height: 25px;
  position: absolute;
  right: 550px;
  top: 3px;
  width: 400px;
}
.sInput {
  border-radius: 10px;
  background-color: white;
}
.sInput:focus {
  border-color: #3d4584;
  box-shadow: 0 0 0;
}
.f-right {
  float: right;
}
.clr {
  clear: both;
}
.search button {
  margin-right: 20px;
  padding: 1px 6px 2px;
  text-align: center;
  background-color: #3d4584;
  color: #dbe4f3;
  height: 25px;
  font-size: 14px !important;
  text-align: center;
  border: none;
  border-radius: 4px;
}

.header a,
.first-header a {
  text-decoration: none;
  color: #dbe4f3;
  display: inline-block;
  padding: 0.2rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #dbe4f3;
}

h2 {
  margin: 0;
}

h2 a {
  color: #3d4584;
  margin: 0;
}

h2 a:hover,
h2 a:active,
h2 a.router-link-active {
  border-color: transparent;
}

.header ul,
.first-header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>

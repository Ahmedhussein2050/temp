<template>
  <li class="col-md-3">
    <div class="card">
      <div class="imgs">
        <img class="img-fluid" :src="image" alt="" />
      </div>
      <div class="prod-data">
        <h5>{{ name }}</h5>
        <h5>{{rate}}</h5>
      </div>
      <div class="prod-footer">
        <span class="left"><fa @click="addToFav" class="plusIcon" icon="heart" /></span>
        <span class="salary">{{ salary + "$" }}</span>
        <span class="right">
          <fa  @click="addToCart" class="plusIcon" :icon="{ prefix: 'fas', iconName: 'plus-circle' }"/>
        </span>
      </div>
    </div>
  </li>
</template>
<script>
export default {
    props: ["id", "name", "image", "salary", "rate"],
    methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
      });
    },
    addToFav() {
      this.$store.dispatch('fav/addToFav', {
        id: this.id,
      });
    }
  },
 };
</script>
<style scoped>
.card {
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  /* padding: 1rem; */
  margin: 2rem 2rem;
  overflow: hidden;
}
.imgs img {
  width: 100%;
  height: 100%;
}
.plusIcon{
    margin-top: 2px;
    transition: 0.3s;
    font-size: 20px;
    font-weight: 200;

}

.imgs {
  width: 100%;
  height: 130px;
}
.prod-data{
    padding: 0.3rem 1rem ;
}
.prod-data h5{
    margin: 0;
    margin-bottom: 2px;
}
.prod-footer{
    padding: 0;
    text-align: center;
    background-color: #DBE4F3;
    display: flex;
}
.prod-footer .left,
.prod-footer .right{
    padding: 4px 2px;
    text-align: center;
    width: 20%;
    color: #3D4584;
    background-color: #CACEE9;
    cursor: pointer;
    user-select: none;
}
.prod-footer .salary {
    width: 60%;
    text-align: center;
    padding-top: 5px;
    user-select: none;
    color: #3D4584;
    font-weight: 700;
}
li {
  list-style: none;
}
</style>

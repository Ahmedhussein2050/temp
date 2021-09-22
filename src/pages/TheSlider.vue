<template>
  <div class="slider">
    <img class="img-fluid active" src="./imgs/01.jpg" alt="" />
    <img class="img-fluid" src="./imgs/02.jpg" alt="" />
    <img class="img-fluid" src="./imgs/03.jpg" alt="" />
    <img class="img-fluid" src="./imgs/04.jpg" alt="" />
    <img class="img-fluid" src="./imgs/05.jpg" alt="" />
    <div class="pagin">
      <span class="paginations">
        <ul id="pagination-ul">
          <li @click="setPag" data-index="0"></li>
          <li @click="setPag" data-index="1"></li>
          <li @click="setPag" data-index="2"></li>
          <li @click="setPag" data-index="3"></li>
          <li @click="setPag" data-index="4"></li>
        </ul>
      </span>
    </div>
    <div class="slider-control">
      <span id="prev" class="prev" @click="nextSlide"
        ><fa icon="chevron-left"
      /></span>
      <span id="next" class="next" @click="prevSlide"
        ><fa icon="chevron-right"
      /></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderImages: Array.from(document.querySelectorAll(".slider img")),
      sliderCounter: 1,
      paginationCreatedUl: document.getElementById("pagination-ul"),
      paginationLi: Array.from(document.querySelectorAll("#pagination-ul li")),
      nextbtn: document.getElementById("next"),
      prevbtn: document.getElementById("prev"),
    };
  },
  methods: {
//     setPag() {
//       this.sliderCounter = parseInt(
//         this.paginationLi.getAttribute("data-index")
//       );
//       this.checker();
//     },
//     nextSlide() {
//         this.sliderCounter++;
//         this.checker();
//     },
//     prevSlide() {
//         this.sliderCounter--;
//         this.checker();
//       },

//     checker() {
//       this.removeAllActive();
//       this.sliderImages[this.sliderCounter - 1].classList.add("active");
//       this.paginationCreatedUl.children[this.sliderCounter - 1].classList.add(
//         "active"
//       );
//     },
//     removeAllActive() {
//       this.sliderImages.forEach(function(img) {
//         img.classList.remove("active");
//       });
//       this.paginationLi.forEach(function(bullet) {
//         bullet.classList.remove("active");
//       });
//     },
  },
};
</script>
<style scoped>
.slider {
  width: 100%;
  height: 300px;
  margin: auto;
  position: relative;
}
.slider img {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  z-index: 1;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -ms-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
}
.slider img.active {
  opacity: 1;
}
.slider-control {
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-control .next,
.prev {
  user-select: none;
  cursor: pointer;
  margin: 0 20px;
}
.slider-control .next {
  float: right;
}
.slider-control .prev {
  float: left;
}
.slider-control .next.disabled,
.slider-control .prev.disabled {
  cursor: no-drop;
}
.pagin {
  width: 100%;
  position: absolute;
  z-index: 3;
  bottom: 5px;
  display: flex;
  justify-content: center;
}
.paginations ul {
  list-style: none;
  margin: 0;

  padding: 0;
  text-align: center;
}

.paginations li {
  user-select: none;
  display: inline-block;
  background-color: transparent;
  font-weight: bold;
  height: 10px;
  width: 10px;
  color: #333;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  line-height: 28px;
  margin: 0 2px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
}
.paginations li.active {
  background-color: slateblue;
  color: #fff;
}
</style>

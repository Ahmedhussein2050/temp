<template>
  <div @click="OpenIt" class="icon-con">
    <div class="tab"></div>
    <div class="tab"></div>
    <div class="tab"></div>
  </div>
  <div class="settings-box">
    <span class="close" @click="closeIt"
      ><fa color="white" icon="times-circle"
    /></span>
    <div class="settings-cont">
      <div class="option-box">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    OpenIt() {
      document.querySelector(".settings-box").classList.add("opened");
      document.querySelector(".icon-con").classList.add("dBlock");
    },

    closeIt() {
      document.querySelector(".settings-box").classList.remove("opened");
      setInterval(
        document.querySelector(".icon-con").classList.remove("dBlock"),
        2000
      );
    },
  },
};
</script>
<style scoped>
.settings-box {
  position: absolute;
  left: -250px;
  top: 0px;
  background-color: #3d4584;
  width: 250px;
  z-index: 1000;
  min-height: 100vh;
  transition: 0.5s;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
}
.settings-box.opened {
  left: 0px;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 80%);
}
.dBlock {
  display: none;
}
.icon-con {
  padding: 6px 6px 3px;
  cursor: pointer;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 40px;
  border-radius: 3px;
  transition: 0.3s;
}
.tab {
  margin-bottom: 3px;
  height: 4px;
  width: 20px;
  background-color: #3d4584;
}

.settings-box .icon-con.open {
  display: none;
}
.close {
  cursor: pointer;
  font-size: 130%;
  position: relative;
  top: 0px;
  left: 220px;
  background-color: transparent;
}

.settings-box .option-box {
  height: 150px;
  width: 150px;
  background-color: #ddd;
  margin: auto;
  text-align: center;
  border-radius: 50% 50%;
}
.settings-box .option-box h4 {
  margin: 0;
  margin-bottom: 10px;
  font-size: 16px;
  color: #666;
}
</style>

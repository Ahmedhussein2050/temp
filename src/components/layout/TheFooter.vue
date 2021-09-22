<template>
  <footer>
    <div class="logo">
      Logo
    </div>
    
    <div class="footer-content">
      <ul class="footer-ul">
        <li class="ul-head">Get To Know Us</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>News</li>
        <li>Faq</li>
      </ul>
      <ul class="footer-ul">
        <li class="ul-head">INFORMATION</li>
        <li>About Us</li>
        <li>Privacy | Policy</li>
        <li>Terms | conditions</li>
      </ul>
      <ul class="footer-ul">
        <li class="ul-head">MY ACCOUNT</li>
        <li>My Orders</li>
        <li>Profile</li>
        <li>My Adresses</li>
      </ul>
    </div>
    <div class="media">
      <ul class="footer-ul">
        
            <span class="icon"><fa :icon="{ prefix: 'fab', iconName: 'facebook-f' }"/></span>
            <span class="icon"><fa :icon="{ prefix: 'fab', iconName: 'twitter' }"/></span>
            <span class="icon"><fa :icon="{ prefix: 'fab', iconName: 'youtube' }"/></span>
            <span class="icon"><fa :icon="{ prefix: 'fab', iconName: 'instagram' }"/></span>
       
        <li>Follow Us</li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
footer {
  padding: 20px;
  color: #dbe4f3;
  background-color: #3d4584;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 25%;
}
.footer-content {
  width: 45%;
  display: flex;
  justify-content: space-between;
}
.footer-ul {
  list-style: none;
  text-align: left;
}
.footer-ul li {
  cursor: pointer;
  margin-bottom: 5px;
}
.footer-ul .ul-head {
  font-weight: bold;
  font-size: 110%;
  margin-bottom: 5px;
}
.media {
  width: 30%;
} 
.icon{
    cursor: pointer;
    font-size: 110%;
    margin: 0 5px;
    transition: 0.3s;
}
.icon:hover{
    color: #CACEE9;
}



</style>







            

















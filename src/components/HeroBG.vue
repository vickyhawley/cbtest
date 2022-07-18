<template>
<section class="wrapper">
<div class="container" id="heroContainer">
    <div id="heroBackground">
    <svg id='greenBlob' width="497" height="359" viewBox="0 0 497 309" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M287.082 -157.462C337.406 -162.376 399.026 -146.551 441.814 -104.643C484.602 -62.7344 508.418 6.0742 490.089 58.1254C471.761 110.177 411.384 145.834 368.025 187.45C324.665 229.066 298.658 276.552 259.171 296.483C219.349 316.503 166.048 308.968 109.837 293.252C53.291 277.626 -6.16392 253.82 -31.2606 208.34C-56.2599 163.223 -47.2355 96.5232 -37.1272 36.5454C-27.0189 -23.4324 -16.2586 -76.9619 16.5664 -99.0033C49.0569 -120.955 103.849 -111.872 150.523 -119.703C197.532 -127.624 236.659 -152.912 287.082 -157.462Z" fill="url(#paint0_linear_1072_300)"/>
        <defs>
        <linearGradient id="paint0_linear_1072_300" x1="7.66146" y1="366.06" x2="555.054" y2="219.387" gradientUnits="userSpaceOnUse">
        <stop stop-color="#73E0A9"/>
        <stop offset="1" stop-color="#5B68DF"/>
        </linearGradient>
      </defs>
    </svg>
    <svg id='greenBlob2' width="344" height="535" viewBox="0 0 344 535" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4723 291.021C-4.37173 245.183 -8.26404 179.305 21.3874 119.754C51.0388 60.2043 115.135 6.75086 175.684 1.00492C236.233 -4.74101 293.583 36.9652 351.521 59.7687C409.458 82.5721 467.778 86.1932 501.739 114.983C535.905 144.052 545.711 198.29 547.923 258.957C550.339 319.904 545.16 387.28 505.9 431.54C466.988 475.544 394.199 496.711 328.083 513.842C261.968 530.973 202.384 544.602 168.426 523.114C134.673 501.904 125.992 445.552 102.306 404.501C78.4161 363.17 38.9684 337.115 17.4723 291.021Z" fill="url(#paint0_linear_1072_301)"/>
       <defs>
       <linearGradient id="paint0_linear_1072_301" x1="658.019" y1="323.971" x2="322.865" y2="-133" gradientUnits="userSpaceOnUse">
       <stop stop-color="#73E0A9"/>
       <stop offset="1" stop-color="#5B68DF"/>
       </linearGradient>
       </defs>
    </svg>
    <HeaderMenu />
    <h1 id="heroTitle">Lorem ispum dolor sit amet.</h1>
    <div id="CTABox">
        <a id='CTA' href="#"><p id="CTAtext">Read More</p></a>
    </div>
    
</div>


</div>
</section>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
export default {
  name: 'HeroBG',
  components: {
    HeaderMenu
  }
}
</script>

<style scoped>
.wrapper {
    position: relative;
}

    #heroBackground {
        background-image: url(../assets/images/HeroBG.png);
        background-size: cover;
        position: relative;
    height: 120vh;
    width: 100%;
    }
    
    #greenBlob {
         position: absolute;
    right: 65.57%;
    bottom: 60.33%;
    z-index: 400;
    
    }
    
    #greenBlob2 {
        position: absolute;
    left: 78.91%;
    right: -7.58%;
    top: 23.32%;
    bottom: -29.77%;
    z-index: 999;
    }

    #heroTitle {
        position: absolute;
        left: 27.19%;
        right: 43.05%;
        top: 28.16%;
        bottom: 34.59%;
        font-family: "Poppins_bold";
        font-size: 64px;
        line-height: 96px;
        width: 40vw;
        text-transform: uppercase;
        text-align: left;
        color: #212121;
        }
 #CTA {
    width: 249px;
    height: 55px;
    position: absolute;
left: 27.19%;
right: 57.87%;
top: 56.75%;
bottom: 17.86%;
    background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
border-radius: 100px;
text-decoration: none;
 }

 #CTAtext {
    font-family: 'Poppins_bold';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
text-align: center;
text-decoration: none;
color: #FFFFFF;
margin-top: 7px;
 }
 #CTABox {
    margin-bottom: -100px;
 }
</style>
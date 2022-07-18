<template>
<router-view></router-view>
<section id="mainApp">
   <HeroBG />
     <InfoSection />
     <ProductList />
     <FooterSection id='marginDown'/>

</section>

</template>

<script>
import HeroBG from './components/HeroBG.vue'
import InfoSection from './components/InfoSection.vue'
import ProductList from './pages/Products/ProductList.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeroBG,
    InfoSection,
    ProductList,
    FooterSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#marginDown {
  margin-bottom: -100px;
}
#mainApp {
  display: flex;
  flex-direction: column;
}
@font-face{
    font-family: 'Poppins_Regular';
    src:url('./assets/fonts/Poppins-Regular.ttf');
font-style: normal;
font-weight: 400;

color: #000000;
    }
    @font-face{
        font-family: 'Poppins_Medium';
        src:url('./assets/fonts/Poppins-Medium.ttf') format('truetype');
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
        }
    
    @font-face{
        font-family: 'Poppins_bold';
        src:url('./assets/fonts/Poppins-Bold.ttf') format('truetype');
        font-style: normal;
font-weight: 700;
text-transform: uppercase;
    }
    @font-face{
        font-family: 'Poppins_semibold';
        src:url('./assets/fonts/Poppins-SemiBold.ttf') format('truetype');
        font-style: normal;
font-weight: 600;
text-transform: uppercase;
    }
</style>

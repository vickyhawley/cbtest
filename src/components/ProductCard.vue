<template>
<div id="cardStyle">
<img id="imageCard" :src="image" alt='pretend product'/>
<div id="cardText">
 <h4 class="aligning" id="productTitle">{{ title }}</h4>
 <h5 class="aligning" id="priceText">£{{ price }}</h5>
 <h6 class="aligning" id="stockText">Currently {{ stock }} in stock.</h6>
 </div>
</div>

</template>

<script>

export default {
    props: [
        'id', 'title', 'price', 'image', 'stock'
    ]

}
</script>

<style scoped>
#imageCard {
    height:314px;
    width:369px;
    border-radius: 30px;
    position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 28.64%;
filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.25));
border-radius: 30px;
}
#cardStyle {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
 height: 440px;
 width: 369px;
 margin: 45px;
 border-radius: 30px;
 background-color: #ffff;
 color: black;
 box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.15);
}
#productTitle {
font-family: 'Poppins_bold';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-transform: uppercase;
color: #212121;
margin-bottom: -20px;
}
#cardText {
    padding-left: 30px;

}
#priceText {
    font-family: 'Poppins_bold';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 36px;
/* identical to box height */

text-transform: uppercase;

color: #747474;
}
#stockText {
    font-family: 'Poppins_bold';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 36px;
/* identical to box height */

text-transform: uppercase;

color: #747474;
margin-top: -12px;
}
.aligning {
    text-align: left;
    margin-bottom: 5px;
}
</style>
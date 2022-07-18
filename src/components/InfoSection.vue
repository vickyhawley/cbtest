<template>
<div id="MainInfoContainer">
    <div id="infoBox">
        <h1 id="infoTitle">Lorem ipsum dolor sit amet</h1>
        <p id="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique risus nec feugiat in. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Consectetur adipiscing elit</p>
        <div class="wrapper"><a id='CalltoAction' href="#"><p id="ctaInfoText">Read more</p></a></div>
    </div>
    <div>
        <div id="largeImage"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'InfoSection'
}
</script>

<style scoped>
.wrapper {
    position: relative;
}
#MainInfoContainer {
    height: 90vh;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5%;
}
#infoTitle {
    font-family: 'Poppins_bold';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 54px;
text-transform: uppercase;
text-align: left;
color: #212121;
}

#infoText {
    font-family: 'Poppins_Regular';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: left;
color: #000000;
}
#infoBox {
    width: 40vw;
    padding: 10px;
}

#largeImage {
    background-image: url('../assets/images/plantImage.png');
    background-size: cover;
    height: 93vh;
    width: 42vw;
    margin-left: 100px;
    margin-bottom: 30px;
}

#CalltoAction {
    background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
border-radius: 100px;
width: 175px;
height: 40px;
position: absolute;
left: 0.16%;
right: 86.26%;
top: 79.91%;
bottom: 11.45%;
text-decoration: none;
}
#ctaInfoText {
    font-family: 'Poppins_bold';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
margin-bottom: 10px;
text-align: center;
color: #FFFFFF;
text-decoration: none;
margin-top: 8px;
}
</style>
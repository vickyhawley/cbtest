<template>
<v-footer app bottom fixed style="width: 100%;" padless>
<section id="footerContainer">
   <div id="blobContainer"><div id="marginMove">
<svg id='Greenblob3' width="585" height="469" viewBox="0 0 585 469" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-81.7735 365.675C-110.077 307.15 -116.224 223.565 -80.1311 148.643C-44.0387 73.7203 35.4193 7.18511 111.336 1.05853C187.252 -5.06804 260.058 48.8971 333.241 78.9112C406.424 108.925 479.721 114.63 522.912 151.775C566.367 189.278 579.716 258.22 583.652 335.167C587.851 412.472 582.637 497.783 534.187 553.138C486.169 608.176 395.179 633.617 312.492 654.07C229.804 674.522 155.251 690.661 112.201 662.772C69.4149 635.24 57.4382 563.64 26.9139 511.148C-3.87287 458.298 -53.9019 424.516 -81.7735 365.675Z" fill="url(#paint0_linear_27_342)"/>
<defs>
<linearGradient id="paint0_linear_27_342" x1="723.133" y1="419.686" x2="293.576" y2="-166" gradientUnits="userSpaceOnUse">
<stop stop-color="#73E0A9"/>
<stop offset="1" stop-color="#5B68DF"/>
</linearGradient>
</defs>
</svg>
</div>
<div id="footerLinkContainer">
    <div id="greenBlobText" class="FooterLinks">
        <h2 id="GreenBlobTitle" class="alignText">Chilled grape</h2>
        <p  id='GreenBlobPara' class="alignText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
    </div>
    <div id="footerLinksWhite">
    <div class="FooterLinks columnMove">
        <h4 class="alignText titleColor">Company</h4>
        <a class="alignText textColor" href="#">About</a>
        <a class="alignText textColor" href="#">Careers</a>
        <a class="alignText textColor" href="#">Our Work</a>
        <a class="alignText textColor" href="#">Contact</a>
    </div>
    <div class="FooterLinks columnMove">
        <h4 class="alignText titleColor">Products</h4>
        <a class="alignText textColor" href="#">About</a>
        <a class="alignText textColor" href="#">Careers</a>
        <a class="alignText textColor" href="#">Our Work</a>
        <a class="alignText textColor" href="#">Contact</a>
    </div>
    <div class="FooterLinks">
        <h4 id='socialIconsTitle' class="alignText">Follow Us</h4>
        <div class="rowZ">
          <a href="#"><div id="mail"></div></a>
          <a href="#"><div id='twitter' ></div></a>
          <a  href="#"><div id='youtube'></div></a>
        </div>
        <div class="rowZ">
            <a  href="#"><div id='facebook'></div></a>
            <a href="#"><div id="insta" ></div></a>
            <a  href="#"><div id='tiktok'></div></a>
        </div>
        </div>
    </div>
</div>
</div>

</section>
</v-footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>


<style>
#socialIconsTitle {
    font-family: 'Poppins_medium';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
margin-top: 5px;
}

.alignText {
    text-align: left;
    text-decoration: none;
}
.rowZ {
    display: flex; flex-direction: row;
}
.FooterLinks {
    height: 20vh;
    width: 14vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.textColor {
    font-family: 'Poppins_regular';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: justify;
color: #212121;
margin-bottom: 10px;
}
.columnMove {
    margin-left: 20px;
}
.titleColor {
    font-family: 'Poppins_medium';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
background: linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
text-decoration: none;
}
#footerContainer {
    position: relative;
    height: 50vh;
    width: 100vw;
    display: flex;
    padding-left: 4%;
    padding-right: 4%;
}
#Greenblob3 {
position: absolute;
left: -8%;
top: -180%;
bottom: 0% !important;
width: 600px;
height: 620px;
transform: rotate(0deg);
z-index: 0;
overflow: hidden;
}
#greenBlobText {
    width: 450px;
    padding: 4px;
    z-index: 777;
    margin-top: 20px;
}
#GreenBlobTitle {
 font-family: 'Poppins_bold';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 54px;
margin-top: -5px;
/* identical to box height */

text-transform: uppercase;

color: #FFFFFF;
}
#GreenBlobPara {
    font-family: 'Poppins_regular';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 33px;
margin-top: -15px;
color: #FFFFFF;
}
#blobContainer {
    position: relative;
    margin-top: 200px;
}
#footerLinkContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
#footerLinksWhite {
    margin-left: 180px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

#mail {
    background-image: url('../assets/images/mail.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
}
#facebook {
    background-image: url('../assets/images/facebook.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
}
#twitter{
    background-image: url('../assets/images/twitter.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
    margin-left: 20px;
}
#insta {
    background-image: url('../assets/images/insta.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
    margin-left: 20px;
}
#youtube {
    background-image: url('../assets/images/youtube.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
    margin-left: 20px;
}
#tiktok {
    background-image: url('../assets/images/tiktok.png');
    background-size: cover;
    height: 45px;
    width: 45px;
    margin: 5px;
    margin-left: 20px;
}
</style>
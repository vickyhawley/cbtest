<template>
 <div id="header">
        <div id="menu">
              <h2 id="logo">CHILLED grape</h2>
              <div id="menuBox">
                <div id="menuItems">
                 <a class='linkContainer' href='#'>Home</a>
                 <a class='linkContainer' href='#'>About</a>
                 <a class='linkContainer' href='#'>Home</a>
                 <a class='linkContainer' href="#">Pricing</a> 
                 <a id='button' href="#"><p id="btnText">Button</p></a>
                 </div>
              </div>

        </div>
    </div>
</template>
<script>
export default {
  name: 'HeaderMenu',
}
</script>

<style>
.menuBtn {
font-family: 'Poppins_bold';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;


color: #212121;

}
#header {
    display: flex;
    flex-direction: row;
}
#menu {
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       margin-left: 5vw;
       align-items: center;
       z-index: 998 !important;
       }
       #menuBox {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
       }
#menuItems {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 35vw;
    text-decoration: none;
    align-items: center;
}
.menuBtn {
    text-decoration: none;
    width: 120px;
}
.linkContainer {
    font-family: 'Poppins_bold';
    width: 50px;
    height: 24px;
    margin-left: 25px;
    text-decoration: none;
    color: #212121;
}

 #button {

            width: 150px;
            height: 34px;
            margin-left: 50px;
        background: linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%);
        border-radius: 100px;
        text-decoration: none;

        }
        #btnText {
        font-family: 'Poppins_bold';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
text-decoration: none;
color: #FFFFFF;
margin-top: 4px;
        }
    #logo {
    font-family: 'Poppins_bold', helvetica;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-transform: uppercase;
    color: #FFFFFF;
    }
</style>
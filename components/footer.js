const footer = ()=>{
    return `<div id="container">
    <p style="text-align: center; margin-top: 5px;">KNOW MORE</p>
    <!-- <i style="margin-top: -20%; margin-left: 50%;" class="fa-solid fa-angles-down fa-1x"></i> -->
    <div id="customer">
        <ul class="alllist">
            <ul id="cust">Customer Service</ul>
            <br>
            <ul>HELP & CONTACT</ul>
            <br>
            <ul>DELIVERY INFORMATION</ul>
            <br>
            <ul>INTERNATIONAL SHIPPING</ul>
            <br>
            <ul>RETURN</ul>
            <br>
            <ul>PAYMENT OPTIONS</ul>
            <br>
            <ul>TRACK ORDER</ul>
            <br>
            <ul>ENCIRCLE PROGRAM</ul>
            <br>
            <ul>OFFER & CONTEST DETAILS</ul>
        </ul>
    </div>
    <div id="leftside">
        <ul id="about">About Tanishq</ul>
        <ul>CAREERS</ul>
        <ul>FIND A STORE</ul>
        <ul>BLOG</ul>
    </div>    
    <div id="innerdiv">
        <div id="innerdiv1">
            <i class="fa-brands fa-cc-visa fa-2x" ></i>
            <i style="margin-left: 20%;" class="fa-brands fa-cc-mastercard fa-2x"></i>
            <i style="margin-left: 20%;" class="fa-brands fa-paypal fa-2x"></i>
            <i  style="margin-left: 20%;"class="fa-brands fa-cc-amex fa-2x"></i>
            <img style="margin-left: 20%; width: 30% ; height: 30px; margin-top: 25px;" src="./img/rupay.png" alt="">

        </div>
    </div>
    <div id="input_box">
        <p>Sign up to receive exclusive offers and news</p>
        <form id="form">
            <input name="subscribe" style="width: 50%; height: 43px; background-color:#B0A16E; border: 1px solid white" type="text" ng-model="subscriptionEmailId" maxlength="{{globalPropertiesList.EMAILADDRESS_MAX_LENGTH}}" ng-pattern="emailRegexp" class="ENTER" placeholder="ENTER YOUR EMAIL ADDRESS">
            <button type="submit" style="width: 30%; height: 47px; margin-left: -5px; border: 1px solid white;" class="btn">Subscribe</button>
        </form>
        <p style="margin-top: 5px;">Follow us on</p>
        <div id="input_box1" >
            <i style="margin-left: 10%;" class="fa-brands fa-facebook-f"></i>
            <i style="margin-left: 10%;" class="fa-brands fa-twitter"></i>
            <i style="margin-left: 10%;" class="fa-brands fa-instagram"></i>
        </div>
        <div id="logo">
            <h4>DOWNLOAD OUR TANISHQ APP</h4>
            <div id="putlogo">
                <div id="img1">
                    <img style="width:105%; height: 50px;" src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/1115befe-2f44-4ba1-aa4a-2e516cfa8d33/iOs.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-1115befe-2f44-4ba1-aa4a-2e516cfa8d33-nhHOjmu" alt="applelogo">
                </div>
                <div id="img2">
                    <img style="width:105%; height: 50px;" src="https://www.tanishq.co.in/wps/wcm/connect/tanishq/36630bbd-afb2-4ea8-bb0f-7b922f212045/google-play-store.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0RT10QIMVSTFU3006-36630bbd-afb2-4ea8-bb0f-7b922f212045-nhD-nMo" alt="playstore">
                </div>
            </div>
            <div id="ptag1">
                <div id="ptag">
                    <h5 style="color: white; font-size: 10px;">TERMS & CONDITIONS</h5>
                  <h5 style="color: white; margin-left: 8%; font-size: 10px;">PRIVACY POLICY</h5>
                </div>
                <h5 style="color: white;font-size: 10px; margin-top: -1%;">© 2022 Titan Company Limited. All Rights Reserved.</h5>
            </div>
        
        </div>
        
    </div>
</div>`
}

export {footer}
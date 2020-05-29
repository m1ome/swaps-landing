<template>
    <div style="position: relative;">
        <!-- Main body -->
        <div class="body">
            <!-- Basic information -->
            <div class="info">
                <h1>Simple and reliable crypto wallet solution is heading your way</h1>
                <p>Closed beta start in July 2020</p>

                <div class="contact_form">
                    <input type="text">
                    <button>Stay tuned</button>
                </div>
            </div>

            <!-- Mockup -->
            <center>
                <div class="mockup"></div>
            </center>

            <div class="info">
                <h2>OTC Trading Desk for high net-worth individuals and institutions.</h2>
                <div class="small">
                    Take advantage with the most experienced desk in the industry with traders from JP Morgan, Credit Suisse, UBS, Morgan Stanley and Merrill Lynch.
                </div>
            </div>
        </div>

        <!-- Columns -->
        <center>
            <div class="columns">
                <div class="column">
                    <div class="image_cover"></div>
                    <h2>We got your cover</h2>
                    <p>24/7 Trading & Support, with a full team servicing all global time-zones.</p>
                </div>
                <div class="column">
                    <div class="image_sepa"></div>
                    <h2>SEPA available</h2>
                    <p>Fast and Secure settlement services for both Crypto and Fiat via SEPA protocol for deposit and withdrawal.</p>
                </div>
                <div class="column">
                    <div class="image_slippage"></div>
                    <h2>No slippage</h2>
                    <p>Guaranteed execution price for any block size, removing the risk of slippage.</p>
                </div>                                
            </div>
        </center>

        <!-- Mainframe -->
        <center>
            <div class="banner">
                <div class="image"></div>
                <div class="frame">
                    <h3>100% regulated service</h3>
                    <p>Swaps team believes that cryptocurrency will inevitably become an everyday means of payment.</p>
                </div>
            </div>
        </center>

        <!-- Information -->
        <center>
            <div class="add_info">
                <div class="column">
                    <div class="col_shield"></div>
                    Our business operates in compliance with AML regulations and adjusts our internal policies and procedures accordingly. 
                </div>

                <div class="column">
                    <div class="col_crypto"></div>
                    Swaps builds its business with licensed partners and applies strict AML policies when it comes to partners, 3rd party service.
                </div>                
            </div>
        </center>
    </div>
</template>

<style scoped>
.add_info {
    width: 1200px;
    height: 400px;
    margin-top: 150px;
}

.add_info .column {
    float: left;
    width: 25%;
    margin-left: 10%;
    margin-right: 10%;
    text-align: left;
    padding-left: 60px;
    padding-top: 10px;
    font-size: 20px;
    line-height: 32px;
    color: #193040;
    opacity: 0.75;
    position: relative;
}

.add_info .column .col_shield {
    width: 48px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url("../assets/images/icon_shield.svg");
}

.add_info .column .col_crypto {
    width: 48px;
    height: 48px;
    position: absolute;
    left: 0px;
    top: 0px;
    background: url("../assets/images/icon_crypto.svg");
}

.banner {
    /* background: red; */
    position: relative;
    width: 1000px;
    height: 400px;
    margin-top: 140px;
}

.banner .image {
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 545px;
    height: 344px;
    background: url("../assets/images/Shield.svg");
    z-index: 1;
}

.banner .frame {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #1EC03833;
    border-radius: 48px;
    width: 707px;
    text-align: left;
    height: 341px;
}

.banner .frame h3 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.9;
    z-index: -1;
    margin-left: 280px;
    padding-right: 100px;
}

.banner .frame p {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.75;
    margin-left: 280px;
    padding-right: 100px;
}

.columns {
    width: 1200px;
    height: 400px;
    margin-top: 140px;
}

.columns .column {
    float: left;
    text-align: left;
    width: 30%;
    margin-left: 40px;
}

.columns .column .image_cover {
    background: url("../assets/images/Bulb.svg");
    width: 290px;
    height: 195px;
    margin-bottom: 50px;
}

.columns .column .image_sepa {
    background: url("../assets/images/Rocket.svg");
    width: 290px;
    height: 195px;
    margin-bottom: 50px;
}

.columns .column .image_slippage {
    background: url("../assets/images/Chart.svg");
    width: 290px;
    height: 195px;
    margin-bottom: 50px;
}

.columns .column h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.9;
    margin: 0px 16px;
}

.columns .column p {
    font-size: 20px;
    line-height: 32px;
    color: #193040;
    opacity: 0.75;
    letter-spacing: 0.02em;
    margin: 0px 16px;
}

.mockup {
    width: 1440px;
    height: 644px;

    background: url("../assets/images/Mockup.svg");
    margin-bottom: 130px;
}

.body {
    text-align: center;
}

.body .info {
    width: 710px;
    margin: 0 auto;
    margin-top: 60px;
}

.body .info h1 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.9;
    margin: 0px;
    padding: 0px;
}

.body .info h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.9;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
}

.body .info .small {
    font-size: 20px!important;
    line-height: 32px!important;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.75;
    margin: 0px;
    padding: 0px;
}

.body .info p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.5;
    margin: 0px;
    margin-top: 20px;
}

.body .info .contact_form {
    position: relative;
    height: 80px;
    width: 510px;
    margin-top: 50px;
    margin-bottom: 80px;
    margin-left: 80px;
}

.body .info .contact_form input {
    position: absolute;
    width: 340px;
    left: 0px;
    height: 50px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: #193040;
    background: none;
    opacity: 0.75;    
    border: 0px;
    border-bottom: 2px solid #193040;
}

.body .info .contact_form button {
    position: absolute;
    left: 360px;
    padding: 16px 32px;

    /* Main / Accent */
    background: #2595DF;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;

    /* FX / Default Shadow */
    border: none;
    box-shadow: 0px 8px 16px rgba(167, 201, 223, 0.5);
    border-radius: 48px;
}

.body {
    text-align: center;
}
</style>
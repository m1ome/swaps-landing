<template>
    <div class="layout">
        <h1>Fees and Limits</h1>
        <h2>1. What are the limits of Services?</h2>
        <table>
            <thead>
                <tr>
                    <td>LIMIT</td>
                    <td>VALUE</td>
                    <td>COMMEND</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Minimum single Fiat deposit</td>
                    <td>€10.00</td>
                    <td>Change shall not accept transfers that are lower than the specific value.</td>
                </tr>
                <tr>
                    <td>Maximum single Fiat deposit</td>
                    <td>€10,000.00</td>
                    <td>Change should request source of funds documents it transfer amout are higher than the specific value.</td>
                </tr>
                <tr>
                    <td>Minimum single Fiat withdrawal</td>
                    <td>€10.00</td>
                    <td>Change shall not process Fiat withdrawals that are lower than the specific value.</td>
                </tr>
                <tr>
                    <td>Monthly total withdrawals</td>
                    <td>-</td>
                    <td>Due to regulatory restrictions Change withdrawal amounts are limited to client KYC level.</td>
                </tr>
                <tr>
                    <td>Maximum Fiat and cryptocurrency balance</td>
                    <td>unlimited</td>
                    <td></td>
                </tr>                                                                
            </tbody>
        </table>

        <h2>2. What are the conversion fees?</h2>
        <table>
            <thead>
                <tr>
                    <td>CRYPTOCURRENCY</td>
                    <td>VALUE</td>
                    <td>COMMEND</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Any</td>
                    <td>up to 2.00%</td>
                    <td>Change shall charge a fee on buying or selling a specified cryptocurrency.</td>
                </tr>                                                           
            </tbody>
        </table>        

        <h2>3. What are the transfer fees?</h2>
        <table>
            <thead>
                <tr>
                    <td>TRANSCATION</td>
                    <td>VALUE</td>
                    <td>COMMEND</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fiat deposit</td>
                    <td>0.00%</td>
                    <td>Change shall not charge any percentage for transferring Fiat from a bank account to the Fiat Account.</td>
                </tr>
                <tr>
                    <td>Fiat withdrawal</td>
                    <td>1.00%</td>
                    <td>Change shall charge a fee for transferring Fiat from Fiat Account to the bank account.</td>
                </tr>      
                <tr>
                    <td>Cryptocurrency deposit</td>
                    <td>0.00%</td>
                    <td>Change shall not charge any percentage for transferring cryptocurrencies to the Wallet.</td>
                </tr>        
                <tr>
                    <td>Cryptocurrency withdrawal</td>
                    <td>0.00% + network fee</td>
                    <td>Change shall charge network fee for transferring cryptocurrencies from the Wallet.</td>
                </tr>                                                                                 
            </tbody>
        </table>  

    </div>
</template>

<style scoped>
.layout {
    width: 1200px;
    margin: 0 auto;
    margin-bottom: 140px;
}
.layout h1{
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;
    color: #193040;
    opacity: 0.9;
    margin: 16px;
}
.layout table {
    width: 600;
    margin: 0 100px;
}
.layout table thead td {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #8C979F;
    padding-bottom: 20px;
    padding-right: 50px;
}
.layout table tbody td {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #193040;
    padding-bottom: 15px;
    padding-right: 50px;
    vertical-align: top;
}

.layout p.small {
    font-size: 16px;
    line-height: 24px;
    color: #193040;
    opacity: 0.75;
}

.layout ul li {
    font-size: 16px;
    line-height: 24px;
    color: #193040;
    opacity: 0.75;
    margin-bottom: 20px;
}

.layout h2 {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #193040;
    margin: 24px;
}

.layout p {
    font-size: 20px;
    line-height: 32px;
    color: #193040;
    letter-spacing: 0.02em;
    margin: 0px 24px;
}
</style>
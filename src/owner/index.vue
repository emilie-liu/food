<template>
    <div id="index-main">
        <div class="owner-title">
            <img class="avatar-img" src="../assets/images/user-manage.png" />
            <div class="name">澳門深情咖喱茶餐廳</div>
            <div class="bottom-div">
                <div class="order-div">
                    <div class="order-data">20</div>
                    <div>今日訂單</div>
                </div>
                <div class="order-div">
                    <div class="order-data">500000</div>
                    <div>訂單總額</div>
                </div>
            </div>
        </div>
        <!--<div  v-for="value in arr" class="owner-li">{{value}}</div>-->
        <div  class="owner-li">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
        <div  class="owner-li">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
        <div  class="owner-li">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
        <div  class="owner-li">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
        <div  class="owner-li" @click="go">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
        <div  class="owner-li">
            <img src="../assets/images/leijidingdan.png" />
            <div class="total-data">135</div>
            <div>累積訂單總數</div>
        </div>
    </div>
</template>
<style>
    body {
        margin: 0;
        background-color: #f6f8f8;
        width: 100%;
        height: 100%;
    }
    .owner-title{
        width: 100%;
        height: 268px;
        background: linear-gradient(to bottom, #52B293, #509C9C);
        margin-bottom: 10px;
        position: relative;
    }
    .avatar-img{
        width: 90px;
        height: 90px;
        margin: 20px 0 12px;
    }
    .name{
        color: #fff;
        font-size: 18px;
    }
    .bottom-div{
        background-color:rgba(255,255,255,0.06);
        width: 100%;
        height: 73px;
        position: absolute;
        bottom: 0;
        font-size: 14px;
    }
    .order-div{
        float: left;
        width: 49%;
        color: #fff;
        line-height: 30px;
        margin-top: 10px;
    }
    .order-div:not(:last-child){
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    .order-data{
        font-size: 25px;
    }
    .owner-li{
        background-color: #fff;
        float: left;
        width: 33%;
        margin: 0 1px 1px 0;
        color: #999999;
        font-size: 12px;
        padding: 20px 0;
    }
    .owner-li img{
        width: 25px;
        height: 25px;
    }
    .total-data{
        color: #FA875D;
        font-size: 14px;
        margin: 4px 0;
    }
</style>
<script data-type="es6" type="text/ecmascript-6">
    export default {
        name:'index',
        methods:{
            go(){
                this.$router.push('/showstatements')
            }
        }
    }

</script>

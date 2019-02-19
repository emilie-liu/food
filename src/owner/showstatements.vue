<template>
    <div class="return-div"><i class="icon-fab-chevron-left" @click="back"></i>≤È‘É»’ΩYÜŒ
        <h1>fdjkdbd</h1>
        <h1>fdjkdbd</h1>
        <h1>fdjkdbd</h1>
        <h1>fdjkdbd</h1>
        <h1>fdjkdbd</h1>
        <h1>fdjkdbd</h1>
    </div>

</template>
<style>
    body {
        background-color: #f6f8f8;
        margin: 0;
    }

    .return-div {
        background: linear-gradient(to bottom, #52B293, #509C9C);
        width: 100%;
        height: 64px;
        color: #fff;
        font-size: 18px;
        padding: 0 12px;
        line-height: 64px;
        text-align: left;
    }

    .return-div i {
        font-size: 18px;
        vertical-align: middle;
        margin-right: 10px;
    }
</style>
<script data-type="es6" type="text/ecmascript-6">
    export default {
        name: 'showstatements',
        methods: {
            back(){
        this.$router.push('/')
    }
    }
    }
</script>
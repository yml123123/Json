<template>
<div class="login">
    <el-card class="box-card" style="width:350px ;height:350px">
        <img src="../../assets/logo_index.png" alt="">
        <el-form>
            <el-form-item>
                <el-input></el-input>

            </el-form-item>
        </el-form>
    </el-card>

</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .login {
        background-image: url(../../assets/login_bg.jpg);
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
         text-align: center;
        img {
            height: 38px;

        }

    }
</style>

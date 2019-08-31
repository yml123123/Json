<template>
<div class="login">
    <el-card class="box-card" style="width:400px ;height:350px">
        <img src="../../assets/logo_index.png" alt="">
        <el-form>
            <el-form-item >
                <el-input placeholder="请输入手机号" ></el-input>
            </el-form-item>
            <el-form-item >
                <el-input placeholder="验证码" style="width:240px" ></el-input>
                <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
            <el-form-item >
                 <el-checkbox :checked="true" style="float:left">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" style="width:100%">主要按钮</el-button>
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

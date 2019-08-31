<template>
<div class="login">
    <el-card class="box-card" style="width:400px ;height:350px">
        <img src="../../assets/logo_index.png" alt="">
        <el-form  ref='loginForm' style="margin-top:25px" :model='loginForm' :rules="loginRules">
            <el-form-item pro="mobile" >
                <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
            </el-form-item>
            <el-form-item pro="code">
                <el-input placeholder="验证码" style="width:240px" v-model="loginForm.code"></el-input>
                <el-button style="float:right">发送验证码</el-button>
            </el-form-item>
            <el-form-item pro="check">
                 <el-checkbox :checked="true" style="float:left" v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                 <el-button type="primary" style="width:100%"  @click="login">主要按钮</el-button>
            </el-form-item>

        </el-form>
    </el-card>

</div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('错误信息'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'

        },
        {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'

        },
        {
          pattern: /^\d{6}$/,
          message: '验证码必须为6位纯数字'
        }],
        check: [{
          validator
        }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then((result) => {
            console.log(result)
          }).catch((err) => {
            console.log(err)
          })
        }
      })
    }
  }

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

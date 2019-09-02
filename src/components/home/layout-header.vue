
   <template>
   <el-row type="flex" justify="space-between" class="layout-header">
                         <el-col class="left" :span='6' >
                             <i class="el-icon-s-unfold icon" ></i>
                             <span>江苏传智播客教育科技股份有限公司</span>
                         </el-col>
                         <el-col class="right" :span='3'>
                             <img src="../../assets/avatar.jpg" class="head-img" alt="">
                             <el-dropdown trigger="click">
                                 <span class="el-dropdown-link">82期 <i class="el-icon-arrow-down el-icon--right"></i></span>
                                 <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="account">个人信息</el-dropdown-item>
                                    <el-dropdown-item command="git">git地址</el-dropdown-item>
                                    <el-dropdown-item command="lgout">退出</el-dropdown-item>
                                </el-dropdown-menu>
                             </el-dropdown>
                         </el-col>
                     </el-row>

 </template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/avatar.jpg')

    }
  },
  methods: {
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then((result) => {
        console.log(result)
      })
    },
    handleMenuItem (command) {
      if (command === 'account') {
        // 账户信息
      } else if (command === 'git') {
        // git
      } else {
        window.localStorage.clear()
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
    .layout-header {
        padding:8px 0;
        .left {
            .icon{
                font-size: 22px;
                margin-right: 3px
            }
            display: flex;
            align-items: center;
        }
        .right {
            display:flex;
            align-items: center;
            .head-img {
                width:40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 5px

            }
        }
    }
</style>

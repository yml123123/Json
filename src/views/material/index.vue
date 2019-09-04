<template>
 <el-card class="metrial">
     <bread-crumb slot="header">
        <template slot="title">素材管理</template>
     </bread-crumb>

     <el-tabs>
         <el-tab-pane>
             <!-- //全部素材的内容 -->
             <div class="card-list">
                 <el-card class="img-card" v-for="item in list" :key="item.id" >
                     <img src="../../assets/avatar.jpg" alt />
                     <el-row class="operate">
                         <i  class="el-icon-star-on"></i>
                         <i class="el-icon-delete-solid"></i>
                     </el-row>
                 </el-card>
             </div>

         </el-tab-pane>
     </el-tabs>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4]

    }
  }
}
</script>

<style lang="less" scoped>
.metrial{
    .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .img-card {
            width:180px;
            height: 180px;
            margin: 30px;
            img {
                width: 100%;
               max-height: 120px;
            }
            .operate {

                display: flex;
                justify-content: space-around;

                 width: 100%;
                 bottom:0;
                 left: 0;
                 height: 30px;
                 background-color: #f4f5f6;
                 font-size: 18px;
            }

        }
    }
}

</style>

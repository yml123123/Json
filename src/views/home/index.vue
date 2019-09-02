<template>

         <el-container>
             <el-aside  style='width:200px;background-color:#323745'>
                 <layout-aside></layout-aside>
             </el-aside >
             <el-container>
                 <el-header>
                     <!-- <div class="el-icon-s-unfold">江苏传智播客教育科技股份有限公司</div> -->
                    <layout-header></layout-header>
                 </el-header>
                 <el-main style="padding:0;margin:0">
                        <router-view></router-view>
                 </el-main>
             </el-container>
         </el-container>

</template>

<script>

export default {

}
</script>

<style >

</style>

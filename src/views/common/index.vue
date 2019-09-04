<template>
    <el-card>
        <bread-crumb slot='header'>
           <template slot='title'>评论列表</template>
        </bread-crumb>
        <el-table :data='list'>
            <el-table-column label="标题" prop="title" width="700"></el-table-column>
            <el-table-column label='评论状况' prop="comment_status"></el-table-column>
            <el-table-column label='总评论数' prop="total_comment_count"></el-table-column>
            <el-table-column label='粉丝评论' prop="fans_comment_count"></el-table-column>
            <el-table-column label='操作' prop="name"></el-table-column>

        </el-table>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []

    }
  },
  methods: {
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(result => {
        console.log(result)
        this.list = result.data.results
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
</style>

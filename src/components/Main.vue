<template>
  <div id="app" v-cloak>
    <div><h1 style="text-align: center">车辆管理系统</h1></div>
    <el-container style="height: 500px; border: 1px solid #eee; margin-top: 20px;">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">车辆信息</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <a href="#">list1</a>
              </el-menu-item>
              <el-menu-item index="1-2">
                <a href="#">list2</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">用户信息</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <a href="#">list1</a>
              </el-menu-item>
              <el-menu-item index="2-2">
                <a href="#">list2</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">设备信息</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <a href="#">list1</a>
              </el-menu-item>
              <el-menu-item index="3-2">
                <a href="#">list2</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 15px; float:right">
          <p style="text-align: right; float:left">车辆信息</p>
        <el-dropdown >
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a href="#">查看</a></el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </el-header>
        <el-main style="text-align: left">
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="320">
            </el-table-column>
            <el-table-column prop="name" label="车主" width="320">
            </el-table-column>
            <el-table-column prop="address" label="车牌" width="320">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <el-row>
      <el-col :span="24">
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: 'Form',
    data() {
      const item = {
        date: '2018-09-25',
        name: 'frank',
        address: '京AAAA'
      };
      return {
        tableData: Array(100).fill(item)
      }
    },
    computed: {
      user(){
        //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
        return this.$store.state.user
      }
    },
    methods: {
      deleteRow(index, rows) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          cocontainetonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    /*created() {
      this.open();
    }*/


  }
</script>

<style>





</style>

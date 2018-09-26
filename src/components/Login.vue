<template>
  <div class = "note" :style = "note">
	  <div class="loginFram">
      <el-form class = "demo-ruleForm login-container">
        <div class = "formGroup">
          <el-form-item  label = "账号">
            <el-input type = "text"  placeholder = "请输入您的账号"
                      class = "form-control" v-model="name"></el-input></el-form-item>
          <el-form-item label = "密码"  class = "form-inline">
            <el-input type = "password" placeholder = "请输入密码"
                      class = "form-control" v-model="pwd"></el-input></el-form-item>

        </div>
        <div class = "remFor">
          <el-checkbox  class = "remember">记住密码</el-checkbox>
          <a href ="123" class = "forget">忘记密码？</a>
        </div>
        <div class = "formButton">
          <el-form-item style = "width:100%;">
            <el-button type = "primary" style = "width:100%;" @click="isLogin">登录</el-button>
          </el-form-item>
        </div>


      </el-form>
		</div>
  </div>
	</template>
	<script>
		export default {
			data() {
				return {
					name:'',
					pwd:'',
					error:'',
          note: {
            position:"absolute",
            top:"0px",
            left:"0px",
            width: "100%",
            height:"100%",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",


          },
				}

			},
			computed: {
				user() {
					return this.$store.state.user
				}
			},
			methods:{
				isLogin:function() {
					this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd).then((response) => {
						//这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
						//注意这里是个难点，Vuex与Vue-Resource结合使用。
						if(response.body != null & response.body.length > 0){
							this.$store.commit('isLogin',response.body[0]);
							this.name=''
							this.pwd= ''
							this.$router.push({ path: 'main' })
						}else{
							alert('请输入正确的用户名和密码！！！');
							this.name=''
							this.pwd= ''
						}

					}).then((error)=> this.error = error)
				}
			}
		}
	</script>
  <style>

  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7)

  ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }
  label{
    width:70px;
    text-align:left;


  }

  .form-control{
    width:270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;

  }
  .remember{
    width:250px;
    text-align:left;


  }
  .forget{
    width:500px;
    text-align:right;
    font-size:14px;
    font-family:PingFang SC;

  }
  .remFor{
    margin-bottom: 10px;
    padding-bottom: 10px;
  }


</style>

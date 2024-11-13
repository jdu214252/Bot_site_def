<template>
    <div id="app">
      <div class="container" :class="{ 'right-panel-active': isSignUpActive }">
        <div class="form-container sign-up-container">
          <form @submit.prevent = "register">
            <h1 class="h1">Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" v-model="name" required/>
            <input type="email" placeholder="Email" v-model="email" required/>
            <input type="password" placeholder="Password" v-model="password" required/>
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form @submit.prevent="login">
            <h1 class="h1">Sign in</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" v-model="loginEmail"/>
            <input type="password" placeholder="Password" v-model="loginPassword"/>
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button class="ghost" @click="togglePanel(false)">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button class="ghost" @click="togglePanel(true)">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <footer>
        <p>
         DEFENSY <i class="fa fa-heart"></i>

        </p>
      </footer> -->
    </div>
  </template>
  
  <script>

import axios from 'axios';

  export default {
    data() {
      return {
        isSignUpActive: false,
		name: '',
		email: '',
		password: '',
		loginEmail: '',
		loginPassword: ''
      };
    },
    methods: {
      togglePanel(isSignUp) {
        this.isSignUpActive = isSignUp;
		},

		async register(){
			try{
				const response = await axios.post('http://127.0.0.1:5000/register', {
					username: this.name,
					email: this.email, 
					password: this.password
				});
				alert(response.data.msg); 
			}catch(error){
				alert(error.response ? error.response.data.msg : error.message); 
			}
		},

		async login(){
			try{
				const response = await axios.post('http://127.0.0.1:5000/login', {
					email: this.loginEmail,
					password: this.loginPassword
				});
				localStorage.setItem('accsess_token', response.data.access_token)
				alert(response.data.msg)
				this.$router.push('/');
			}catch(error){
				const errorMsg = error.response?.data?.msg || 'Network error occurred';
					alert(errorMsg);
			}
		}
    },

	
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  
  * {
    box-sizing: border-box;
  }

  #app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/back_3.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative; /* Add this to allow absolute positioning of children */

  
}

#app::before {
  content: ''; /* Required for pseudo-elements */
  position: absolute; /* Position it absolutely within the #app */
  top: 0;
  left: 0;
  width: 100%; /* Cover the entire area */
  height: 100%; /* Cover the entire area */
  background-color: rgba(0, 0, 0, 0.749); /* Dark overlay with 50% opacity */
  z-index: 1; /* Ensure it is above the background but below content */
}
  
  body {
    background: #f6f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: -20px 0 50px;
  }

.container{
	position: relative;
	z-index: 2;
}
  
 
h1 {
	font-weight: bold;
	margin: 0;
}
.h1{
	color: #222;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #d4af37;
	background-color: #d4af37;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 850px;
	max-width: 100%;
	min-height: 600px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background-image: url('@/assets/back_3.jpg');
	/* background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C); */
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #ffffff;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* Пример: черный цвет с 50% прозрачностью */
	z-index: 1;
}

.overlay-panel {
	position: relative;
	z-index: 2;
}


.container.right-panel-active .overlay {
	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
  
  </style>
  
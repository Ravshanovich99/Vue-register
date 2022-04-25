<template>
    <div class="alert primary" v-if="succesRegistred">
        <h2>
            You have been registred succesfully!
        </h2>
        <h4>
            Now you can log in, by your login and paswword.
        </h4>
        <h3>
            <a href="#"><router-link to="/login">Login</router-link></a>
        </h3>
        <button class="btn primary center" @click="succesRegistred = false">Close</button>
    </div>
    <form class="card" @submit.prevent='createUser'>
        <h2>Registration</h2>
        <div class="form-control" :class="this.$store.state.errors.firstNameError ? 'invalid' : ''">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your first name" v-model.trim='this.$store.state.firstName'>
            <small>{{$store.state.errors.firstNameError}}</small>
        </div>
        <div class="form-control" :class="this.$store.state.errors.lastNameError ? 'invalid' : ''">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your last name" v-model.trim='this.$store.state.lastName'>
            <small>{{$store.state.errors.lastNameError}}</small>
        </div>
        <div class="form-control" :class="this.$store.state.errors.emailError ? 'invalid' : ''">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" v-model.trim='this.$store.state.email'>
            <small>{{$store.state.errors.emailError}}</small>
        </div>
        <div class="form-control" :class="this.$store.state.errors.loginError ? 'invalid' : ''">
            <label for="login">Login</label>
            <input type="text" id="login" class="form-control" placeholder="Enter login" v-model.trim="this.$store.state.login">
            <small>{{$store.state.errors.loginError}}</small>
        </div>
        <div class="form-control" :class="this.$store.state.errors.passwordError ? 'invalid' : ''">
            <label for="paswd">Password</label>
            <input :type="this.passwordShow ? 'password' : 'text'" id="paswd" class="form-control password"
            placeholder="Enter password"
            v-model="this.$store.state.password">
            <i class="fa-solid" @click="this.passwordShow = ! this.passwordShow" :class="this.passwordShow ? 'fa-eye' : 'fa-eye-slash'"></i>
            <small>{{$store.state.errors.passwordError}}</small>
        </div>
        <button class="btn primary" type="submit">Register</button>
        <p>
            Already have an account?
            <router-link to="/login">
                <a href="#">Login</a>
            </router-link>
        </p>
    </form>
  
</template>

<script>
export default {
    data(){
        return{
            passwordShow: true,
            succesRegistred: false,
        }
    },

    methods:{
        // https://vue-register-ebec5-default-rtdb.asia-southeast1.firebasedatabase.app

        async createUser(){
            if(this.$store.getters.forgetFormChecker && this.$store.getters.loginFormChecker){
                const response = await fetch('https://vue-register-ebec5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',{
                    method: 'POST',
                    headers:{
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        userLogin: this.$store.state.login,
                        userPassword: this.$store.state.password,
                        userFirstName: this.$store.state.firstName,
                        userLastName: this.$store.state.lastName,
                        userEmail: this.$store.state.email,
                    }),
                });

                console.log(response);
                this.$store.state.login = ''
                this.$store.state.password = ''
                this.$store.state.firstName = ''
                this.$store.state.lastName = ''
                this.$store.state.email = ''
                this.succesRegistred = true
            }
        }
    },

}
</script>

<style scoped>
    .password{
        position: relative;
    }
    .fa-solid{
        position: absolute;
        right: 10px;
        top: 35px;
        transition: 0.2s;
    }

    .fa-solid:hover{
        color: #42b983;
    }
    a{
        text-decoration: underline;
    }
    
</style>
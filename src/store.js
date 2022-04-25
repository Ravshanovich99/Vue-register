import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            auth: false,
            users: [],
            login: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            whoLogged: [],
            errors: {
                firstNameError: null,
                lastNameError: null,
                emailError: null,
                loginError: null,
                passwordError: null,
                loginPasswordInvalid: null,
            },
        }
    },

    mutations:{
        returnData(state, data){
            state.users = Object.keys(data)
            state.users = state.users.map(elem => {
                return {
                    userLogin: data[elem].userLogin,
                    userPassword: data[elem].userPassword,
                    userFirstName: data[elem].userFirstName,
                    userLastName: data[elem].userLastName,
                    userEmail: data[elem].userEmail,
                }
            })
        }
    },

    getters: {
        forgetFormChecker(state){
            let isValidForm = true
            if(state.firstName.length < 4){
              state.errors.firstNameError = 'First-name must include minimum 4 characters'
              isValidForm = false
            }
            else {
              state.errors.firstNameError = null
            }
            if(state.lastName.length < 4){
                state.errors.lastNameError = 'Last-name must include minimum 4 characters'
                isValidForm = false
            }
            else {
                state.errors.lastNameError = null
            }
            if(state.email.length < 4){
              state.errors.emailError = 'Email must include minimum 4 characters'
              isValidForm = false
            }
            else {
              state.errors.emailError = null
            }
            return isValidForm
        },

        loginFormChecker(state){
            let isValidForm = true
            if(state.login.length < 4){
                state.errors.loginError = 'Login must include minimum 4 characters'
                isValidForm = false
            }
            else {
                state.errors.loginError = null
            }
            if(state.password.length < 4){
                state.errors.passwordError = 'Password must include minimum 4 characters'
                isValidForm = false
            }
            else {
                state.errors.passwordError = null
            }
            return isValidForm
        },
    },

    actions: {
        async asnycGetData({commit}){
            const {data} = await axios.get('https://vue-register-ebec5-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')
            commit('returnData', data)
        },
    },
})

export default store
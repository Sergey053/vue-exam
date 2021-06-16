<template>
    <div>
        <h4>Login</h4>
        <form @submit.prevent="handleSubmit">
            <label for="name" >Name</label>
            <div>
                <input id="name" type="name" v-model="name" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" >
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
name: "Autorization",

 
 methods : {
            handleSubmit(){
                for (let user of this.$store.state.userLoad) {
if (user.name === this.name && user.password === this.password){
     console.log ("Успешный вход")
}
else console.log("Некорректные данные");
                }
                // if (this.password.length > 0 && this.password.length < 8& this.name.length > 0 && this.name.length < 15 ) {
                //     this.$http.post('//localhost:3000/login', {
                //         name: this.name,
                //         password: this.password
                //     })
                   
                }
            }
}
</script>

<style scoped>
   
</style>



<script setup>
const state = reactive({
  email: "",
  password: "",
});
const {user,registerByEmailAndPassword} = useAuth()
async function register(){
  try {
   await registerByEmailAndPassword(state.email,state.password)
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="flex items-center min-h-screen justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-200 px-8 ">
      <div class="xl:w-1/3 lg:w-1/2 md:w-2/3 w-full  bg-slate-800 px-12 py-20 ">
        <h2 class="text-5xl font-mono mb-8 text-center">Login</h2>
        <form @submit.prevent="register">
          <div class="mb-8">
            <label for="email" class="label">Email</label>
            <input id="email" class="input" type="text" v-model="state.email" required/>
          </div>
          <div class="mb-8">
            <label for="password" class="label">password</label>
            <input
              id="password"
              class="input"
              type="password"
              v-model="state.password"
              required
            
            />
          </div>
          <div class="flex items-center justify-center">
            <button class="btn-lg btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
</template>

<style>

</style>
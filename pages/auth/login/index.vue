
<script setup>
const router = useRouter()
const {user,loginWithEmailAndPassword,loginWithGoogle} = useAuth()

const form = reactive({
  email: "",
  password: "",
});
const errors=reactive({
  email: "",
  password: "",
})
async function login(){
  try {
   await loginWithEmailAndPassword(form.email,form.password)
  router.push(`/`)
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="flex items-center min-h-screen justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-200 px-8 ">
      <div class="xl:w-1/3 lg:w-1/2 md:w-2/3 w-full  bg-slate-800 px-12 py-20 rounded-md">
        <h2 class="text-5xl font-mono mb-8 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-8">
            <label for="email" class="label">Email</label>
            <input id="email" class="input" type="text" v-model="form.email" required />
            <p></p>
          </div>
          <div class="mb-8">
            <label for="password" class="label">password</label>
            <input
              id="password"
              class="input"
              type="password"
              v-model="form.password"
              required
            />
          </div>
          <div class="flex ">
            <button class="btn-lg btn-primary w-full">Login</button>
          </div>
        </form>
    
        <div class="flex flex-col justify-between gap-y-4 mt-5">
            <button class="btn-lg  w-full bg-white text-primary" @click="loginWithGoogle">Continue with Google</button>
        </div>
      </div>
    </div>
</template>

<style>

</style>
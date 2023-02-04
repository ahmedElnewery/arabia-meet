
<script setup>
const {logout} = useAuth()

</script>
<template>
    <div class="flex gap-x-3">
      <NuxtLink to="/profile">  go to profile</NuxtLink>
      <NuxtLink to="/auth/login"> login</NuxtLink>
      <NuxtLink to="/auth/register">register </NuxtLink>
      <button @click="logout">sign out </button>
      </div>
</template>
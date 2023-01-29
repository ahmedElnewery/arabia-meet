

<script setup>
definePageMeta({
  middleware: ['auth']
})
const {user} =useAuth()

</script>

<template>
<pre>{{user}}</pre>
</template>
<style>

</style>
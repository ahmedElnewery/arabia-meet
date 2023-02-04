export default defineNuxtPlugin(() => {

    addRouteMiddleware('auth', () => {
        const { user } = useAuth()

        if(!user.value?.uid) {
            return navigateTo('/auth/login')
        }
    })
  })
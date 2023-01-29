import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth'

export default function () {
  const { $auth } = useNuxtApp()
  const userCookie = useCookie("userCookie")
  const fbUser = useState<User | null>("fbUser", () => userCookie.value as any || null)
  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        fbUser.value = userCreds.user

      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        throw error
      }

    }
  }
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCreds = await signInWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        fbUser.value = userCreds.user
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        throw error
      }

    }
  }

  const initUser = async () => {

    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        fbUser.value = user
        userCookie.value = JSON.stringify(user)
      } else {

      }
    })
  }


  return {
    user: fbUser,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    initUser
  }
}

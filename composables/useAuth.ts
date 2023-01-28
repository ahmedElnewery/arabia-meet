import { createUserWithEmailAndPassword,signInWithEmailAndPassword, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()
  const user = useState<User | null>("user", () => null)

  const registerWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCreds = await createUserWithEmailAndPassword($auth, email, password)
      if (userCreds) {
        user.value = userCreds.user

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
        user.value = userCreds.user
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        throw error
      }

    }
  }
  


  return {
    user,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword
  }
}
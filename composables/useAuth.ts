import { createUserWithEmailAndPassword, User} from 'firebase/auth'

export default function() {
  const { $auth } = useNuxtApp()
  const user = useState<User | null>("user", () => null)

  const registerByEmailAndPassword = async (email: string, password: string) => {
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

  return {
    user,
    registerByEmailAndPassword
  }
}
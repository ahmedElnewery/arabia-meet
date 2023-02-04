import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  User,
  GoogleAuthProvider,
} from "firebase/auth";

export default function () {
  const provider = new GoogleAuthProvider();
  const { $auth } = useNuxtApp();
  // const userCookie = useCookie("userCookie")
  const fbUser = useState<User | null>("fbUser", () => null);
  const registerWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        fbUser.value = userCreds.user;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        throw error;
      }
    }
  };
  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        fbUser.value = userCreds.user;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
        throw error;
      }
    }
  };
  const loginWithGoogle = async () => {
    try {
      const userCreds = await signInWithPopup($auth, provider);
      fbUser.value = userCreds.user;
    } catch (error) {
      if (error instanceof Error) {
        // handle error
        throw error;
      }
    }
  };
  const logout = async () => {
    try {
      await signOut($auth);
    } catch (error) {
      if (error instanceof Error) {
        // handle error
        throw error;
      }
    }
  };
  const initUser = async () => {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        fbUser.value = user;
        // userCookie.value = JSON.stringify(user)
      } else {
        fbUser.value = null;
        // userCookie.value = ""
      }
    });
  };

  return {
    user: fbUser,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    initUser,
    logout,
  };
}

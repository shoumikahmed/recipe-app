import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="bg-orange-400 btn rounded-lg w-full px-5 py-3"
      >
        Login with Google
      </button>
    </div>
  );
}

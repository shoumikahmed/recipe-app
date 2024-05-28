import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    navigate("/");
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

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      }
    });
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

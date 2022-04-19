import { signInWithGoogle } from "../scripts/firebase";
export const Login = () => {
  const handleLogin = () => {
    signInWithGoogle.then((r) => {
      console.log(r);
    });
  };

  return (
    <div className="login-buttons">
      <button className="login-provider-button" onClick={handleLogin}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
          alt="google icon"
        />
        <span> Continue with Google</span>
      </button>
    </div>
  );
};

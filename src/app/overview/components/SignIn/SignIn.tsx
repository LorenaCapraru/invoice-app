import {
  CurrentUser,
  isPopupConfirmOpenState,
  popupConfirmTextState,
  isUserLoggedInState,
  userNameState,
  userPictureURLState,
} from "@/app/recoil/atoms";
import { signUpWithGoogle } from "../../../firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSetRecoilState, useRecoilState } from "recoil";
import "./SignIn.css";

export default function SignIn() {
  const router = useRouter();
  const setIsPopupConfirmOpen = useSetRecoilState<boolean>(
    isPopupConfirmOpenState
  );
  const setPopupConfirmText = useSetRecoilState<string>(popupConfirmTextState);
  const [isUserLoggedIn, setUserLoggedIn] =
    useRecoilState<boolean>(isUserLoggedInState);
  const [userName, setUserName] = useRecoilState<string | null>(userNameState);
  const [userPictureURL, setUserPictureURL] = useRecoilState<string | null>(
    userPictureURLState
  );

  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signUpWithGoogle();
      const user = userCredential.user;
      if (user && user.email) {
        let userName = "";
        let userSurname = "";
        if (user.displayName !== null) {
          const nameParts = user.displayName.split(" ");
          userName = nameParts[0];
          userSurname = nameParts[1];
        }
      }
      setUserLoggedIn(!isUserLoggedIn);
      setUserPictureURL(userCredential.user?.photoURL);
      setUserName(userCredential.user?.displayName);

      console.log("Google Sign Up successful:", userCredential.user?.photoURL);

      router.push("/overview");
      setPopupConfirmText("You have been successfully logged in!");
      setIsPopupConfirmOpen(true);
    } catch (error: any) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <main className="sign-in-main">
      <div className="signin-container">
        <h1>Welcome to Invoice Tracker Application</h1>
        <p>Sign in to manage your invoices.</p>
        <p className="login-text" onClick={handleGoogleSignUp}>
          <Image
            src="/icons/google.svg"
            alt="Google icon"
            width={30}
            height={30}
          />
          <span> CONTINUE WITH GOOGLE</span>
        </p>
      </div>
    </main>
  );
}

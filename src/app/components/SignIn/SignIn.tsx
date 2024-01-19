import {
  CurrentUser,
  isPopupConfirmOpenState,
  popupConfirmTextState,
} from "@/app/recoil/atoms";
import { signUpWithGoogle } from "../../firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

export default function SignIn() {
  const router = useRouter();
  const setIsPopupConfirmOpen = useSetRecoilState<boolean>(
    isPopupConfirmOpenState
  );
  const setPopupConfirmText = useSetRecoilState<string>(popupConfirmTextState);

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

      console.log("Google Sign Up successful:", userCredential.user?.email);
      router.push("/");
      setPopupConfirmText("You have been successfully logged in!");
      setIsPopupConfirmOpen(true);
    } catch (error: any) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div>
      <div className="connect-container">
        <p>Be connect with</p>

        <div>
          <Image
            src="/icons/google.svg"
            alt="Google icon"
            width={40}
            height={40}
            onClick={handleGoogleSignUp}
            className="icon"
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "5px",
              background: "white",
              filter: "invert(100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

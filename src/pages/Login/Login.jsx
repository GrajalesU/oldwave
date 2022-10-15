import OldWaveLogo from "../../assets/oldwave-icon.png";
import GoogleLogo from "../../assets/google-logo.png";
import BackArrow from "../../assets/images/arrow-back.svg";
import BackArrowDesktop from "../../assets/images/arrow-back-desktop.svg";
import LoginImg from "../../assets/images/login.svg";
import styles from "./Login.module.css";
import useBreakpoint from "../../hooks/useBreakpoints";
import { useGoogleLogin } from "@react-oauth/google";
import { saveUser } from "../../utils/saveUser";

const Login = () => {
  const breakpoint = useBreakpoint();

  const login = useGoogleLogin({
    onSuccess: saveUser,
  });

  return (
    <div className={styles.container} data-testid="container">
      {(breakpoint.lg || breakpoint.xl) && (
        <div className={styles.login_img}>
          <img src={LoginImg} alt="Guy unlocking phone with big key" />
        </div>
      )}
      <div className={styles.login}>
        <div className={styles.login_title_group}>
          <img
            className={styles.login_ow_logo}
            src={OldWaveLogo}
            alt="Oldwave Logo"
          />
          <h1 className={styles.login_title}>Login</h1>
        </div>
        <div className={styles.login_description}>
          <div className={styles.login_description_decoration} />
          <p className={styles.login_description_text}>
            Inicia sesión en un click
          </p>
          <div className={styles.login_description_decoration} />
        </div>

        <div className={styles.login_btns}>
          <button className={styles.login_google_btn} onClick={login}>
            <img src={GoogleLogo} alt="Google Logo" />
            {(breakpoint.lg || breakpoint.xl) && (
              <span>Inicia sesión con Google</span>
            )}
          </button>

          <button className={styles.login_back_btn}>
            <img
              src={
                breakpoint.lg || breakpoint.xl ? BackArrowDesktop : BackArrow
              }
              alt="Back symbol"
            />
            {(breakpoint.lg || breakpoint.xl) && <span>Regresa</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

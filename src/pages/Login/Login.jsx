import OldWaveLogo from "../../assets/oldwave-icon.png";
import GoogleLogo from "../../assets/google-logo.png";
import BackArrow from "../../assets/images/arrow-back.svg";
import BackArrowDesktop from "../../assets/images/arrow-back-desktop.svg";
import LoginImg from "../../assets/images/login.svg";
import styles from "./Login.module.css";
import useBreakpoint from "../../hooks/useBreakpoints";
import { useGoogleLogin } from "@react-oauth/google";
import { getUser } from "../../utils/user";
import { useDispatch, useUser } from "../../context/user";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleUser } from "../../utils/api";
const Login = () => {
  const breakpoint = useBreakpoint();
  const dispatchUser = useDispatch();
  const user = useUser();
  const navigation = useNavigate();

  const redirectToHome = () => {
    navigation("/");
  };

  const saveUser = async (token) => {
    const { name, picture, email, given_name, family_name, sub } =
      await getUser(token);
    await handleUser(sub, email, given_name, family_name);
    dispatchUser({ type: "login", value: { name, picture, email, sub } });
  };

  useEffect(() => {
    if (user.name) navigation("/");
  }, [user]);

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

          <button className={styles.login_back_btn} onClick={redirectToHome}>
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

import styles from "./nav.module.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      <PrimaryButton
        onClick={() => {
          router.push("/login");
        }}
      >
        start recruiting
      </PrimaryButton>
    </div>
  );
};

export default Nav;

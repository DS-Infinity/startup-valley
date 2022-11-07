import styles from './index.module.scss';

const PrimaryButton = ({ children, props }) => {
  return <button className={styles.buttonContainer}>{children}</button>;
};

export default PrimaryButton;

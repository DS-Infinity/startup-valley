import styles from './index.module.scss';

const PrimaryButton = ({ children, style, ...props }) => {
  return (
    <button className={styles.buttonContainer} style={style} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;

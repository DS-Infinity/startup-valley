import styles from './index.module.scss';

const PrimaryButton = ({ children, style, onClick, ...props }) => {
  return (
    <button className={styles.buttonContainer} onClick={onClick} style={style} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;

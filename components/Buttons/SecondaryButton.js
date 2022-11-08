import styles from './index.module.scss';

const SecondaryButton = ({ children, style, onClick, ...props }) => {
  return (
    <button className={styles.buttonContainer2} onClick={onClick} style={style} {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;

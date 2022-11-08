import styles from "./index.module.scss";

const Textarea = ({state, setState, placeholder}) => {
    return (
        <textarea className={styles.input} value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)}></textarea>
    )
}

export default Textarea;
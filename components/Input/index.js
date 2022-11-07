import styles from "./index.module.scss";

const Input = ({state, setState, placeholder}) => {
    console.log(state, setState)
    return (
        <input className={styles.input} value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)}></input>
    )
}

export default Input;
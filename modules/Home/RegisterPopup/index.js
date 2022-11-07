import Image from "next/image";
import styles from "../index.module.scss"

const RegisterNoPopup = () => {
    return (
        <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'center',}}>
            <Image height={300} width={300} src={"/pussy.png"} style={{display: 'block'}} />
            <h1 className={styles.heading}>you ^</h1>
        </div>
    )
}
export default RegisterNoPopup;
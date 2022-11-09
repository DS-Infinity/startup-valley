import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import styles from "./index.module.scss"

const PostPopup = ({content}) => {
    return (
        <div className={styles.popup}>
            <p className={styles.body}>{content}</p>
            <hr className={styles.sep}></hr>
            <div className={styles.bottom}>
                <div className={styles.comments}>
                    comments: 89 &bull; likes: 24
                </div>
                <div className={styles.buttons}>
                <PrimaryButton style={{backgroundColor: '#A1A34E'}}>like</PrimaryButton>
                <PrimaryButton>dislike</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default PostPopup;
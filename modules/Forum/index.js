import { useEffect, useRef, useState } from "react";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Input from "../../components/Input";
import styles from "./index.module.scss";
import axios from "../../utils/axios";
import { Popup, useOnClickOutside } from "../../components/Popup";
import ForumPopup from "./ForumPopup";
import PostPopup from "./PostPopup";

const Content = () => {
    const [search, setSearch] = useState("");
    const [postOpen, setPostOpen] = useState(false);
    const [openTitle, setOpenTitle] = useState("");
    const [openContent, setOpenContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [newPopup,  setNewPopup] = useState(false);
    const postPopupRef = useRef(null);
    const newPopupRef = useRef(null);
    useOnClickOutside(newPopupRef, () => {setNewPopup(false)})
    useOnClickOutside(postPopupRef, () => {setPostOpen(false)})
    const [posts, setPosts] = useState([]);
    async function getPosts() {
        const data = await axios.get("/api/forum")
        const json = await data.data
        setPosts(json)
    }
    useEffect( () => {
        getPosts()
        setLoading(false);
    }, [loading])

    return (
        <div className={styles.main}>
            <h1 className={styles.main__title}>the gossip center</h1>
            <h2 className={styles.main__subtitle}>ps: dont gossip about trade secrets</h2>
            <div className={styles.main__bar}>
                <Input state={search} setState={setSearch} placeholder={"search..."}></Input>
                <SecondaryButton style={{padding: '0px', width: '140px'}} onClick={() => {
                    setNewPopup(true)
                }}>new post</SecondaryButton>
            </div>
            <div className={styles.main__forum}>
                {console.log(posts)}
                {posts.map((post) => {
                    return (
                        <div className={styles.main__forum__post} onClick={(e) => {
                            setOpenTitle(post.title)
                            setOpenContent(post.content)
                            setPostOpen(true)
                        }}>
                            <h1 className={styles.main__forum__post__heading}>{post.title}</h1>
                            <h2 className={styles.main__forum__post__data}>posted by: {post.author.username} &bull; 21h ago &bull; 77 likes &bull; 99 comments</h2>
                        </div>
                    )
                })}
            </div>
            <Popup popupState={newPopup} ref={newPopupRef} heading1={"ooh... new gossip"} heading2={""} crossHandler={() => {setNewPopup(false)}}>
                <ForumPopup setLoading={setLoading} state={setNewPopup}></ForumPopup>
            </Popup>
            <Popup popupState={postOpen} ref={postPopupRef} heading1={openTitle} heading2={""} crossHandler={() => {setNewPopup(false)}}>
                <PostPopup content={openContent}></PostPopup>
            </Popup>
        </div>
    )
}

export default Content;
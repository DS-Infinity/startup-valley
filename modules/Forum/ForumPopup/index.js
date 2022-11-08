import { useState } from "react";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import axios from "../../../utils/axios";
import useUser from "../../../utils/hooks/useUser";

const ForumPopup = ({setLoading, state}) => {
    const [title, setTitle] = useState("");
    const user = useUser();
    const[content, setContent] = useState("");
    async function postStuff () {
        if (title === "" || title.trim() === "" || content === "" || content.trim() === "") {
            return;
        }
        if (!user) {
            return;
        }
        let data = await axios.post("/api/forum", {authorId: user.user._id, title: title, content: content})
        setLoading(true)
        state(false)
    }
    return (
        <div style={{display: 'flex', flexFlow:'column', gap: '12px'}}>
            <Input state={title} setState={setTitle} placeholder={"headline"}></Input>
            <Textarea state={content} setState={setContent} placeholder={"gossip..."}></Textarea>
            <PrimaryButton
          style={{
            marginLeft: 'auto',
            marginTop: '0px',
            padding: '6px 40px',
            height: '100%',
          }}
          onClick={() => {postStuff()}}
        >
          post
        </PrimaryButton>
        </div>
    )
}
export default ForumPopup;
import { useState } from "react";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import Input from "../../../components/Input";
import styles from "../index.module.scss";
import Image  from "next/image";

const OnbaordingPopup = ({pageNum, setPageNum}) => {
    const [userName, setUserName] = useState("");
    const [selectedGender, setGender] = useState("male");
    if (pageNum == 1) {
    return (
        <div style={{height: '100%'}}>
            <Input state={userName} setState={setUserName} placeholder="your name"></Input>
            <h1 className={styles.heading}>are you sure you're ready?</h1>

            <PrimaryButton style={{marginLeft: 'auto', marginTop: '51px', padding: '6px 35px', boxSizing: 'border-box', marginRight: '1px'}} onClick={(e) => {setPageNum(pageNum + 1)}}>yes</PrimaryButton>
            
        </div>
    )
    } else if (pageNum == 2) {
        return (
            <div style={{height: '100%'}}>
               <div className={styles.genders}>
                    <div className={styles.genders__gender} style={selectedGender === "male" ? {borderColor: 'var(--primary-orange)', cursor: 'default'} : {}} onClick={(e) => {if (selectedGender === "male") {} else {setGender("male")}}}>
                        <Image src={"/men.png"} height={115} width={135} style={{margin: '8px 0'}}></Image>
                    </div>
                    <div className={styles.genders__gender} style={selectedGender === "female" ? {borderColor: 'var(--primary-orange)', cursor: 'default'} : {}} onClick={(e) => {if (selectedGender === "female") {} else {setGender("female")}}}>
                        <Image src={"/women.png"} height={115} width={155} style={{margin: '8px 0'}}  ></Image>
                    </div>
               </div>     
               <PrimaryButton style={{marginLeft: 'auto', marginTop: '14px', padding: '6px 40px', height: '100%'}} onClick={(e) => {setPageNum(pageNum - 1)}}>go</PrimaryButton>        
            </div>
        )
    }
}

export default OnbaordingPopup;     
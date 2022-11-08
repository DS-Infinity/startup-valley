import { useState } from 'react';
import PrimaryButton from '../../../components/Buttons/PrimaryButton';
import Input from '../../../components/Input';
import styles from '../index.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useUser from '../../../utils/hooks/useUser';

const OnbaordingPopup = ({ pageNum, setPageNum }) => {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [selectedGender, setGender] = useState('male');
  const { user, fetchUser } = useUser();
  if (pageNum == 1) {
    return (
      <div style={{ height: '100%' }}>
        <Input
          state={userName}
          setState={setUserName}
          placeholder="your name"
        ></Input>
        <h1 className={styles.heading}>are you sure you're ready?</h1>

        <PrimaryButton
          style={{
            marginLeft: 'auto',
            marginTop: '51px',
            padding: '6px 35px',
            boxSizing: 'border-box',
            marginRight: '1px',
          }}
          onClick={(e) => {
            setPageNum(pageNum + 1);
          }}
        >
          yes
        </PrimaryButton>
      </div>
    );
  } else if (pageNum == 2) {
    return (
      <div style={{ height: '100%' }}>
        <div className={styles.genders}>
          <div
            className={styles.genders__gender}
            style={
              selectedGender === 'male'
                ? { borderColor: 'var(--primary-orange)', cursor: 'default' }
                : {}
            }
            onClick={(e) => {
              if (selectedGender === 'male') {
              } else {
                setGender('male');
              }
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={'/men.png'}
                height={115}
                width={135}
                style={{ margin: '8px 0' }}
              ></Image>
            </div>
          </div>
          <div
            className={styles.genders__gender}
            style={
              selectedGender === 'female'
                ? { borderColor: 'var(--primary-orange)', cursor: 'default' }
                : {}
            }
            onClick={(e) => {
              if (selectedGender === 'female') {
              } else {
                setGender('female');
              }
            }}
          >
            <div className={styles.imageContainer}>
              <Image
                src={'/women.png'}
                height={115}
                width={155}
                style={{ margin: '8px 0' }}
              ></Image>
            </div>
          </div>
        </div>
        <PrimaryButton
          style={{
            marginLeft: 'auto',
            marginTop: '14px',
            padding: '6px 40px',
            height: '100%',
          }}
          onClick={async () => {
            const data = await fetch('/api/updateuser', {
              method: 'POST',
              headers: {
                // 'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: userName,
                female: selectedGender === 'female' ? true : false,
              }),
            });
            const res = await data.json();
            console.log(res);

            if (res.success) {
              fetchUser();
              return router.push('/home');
            }
          }}
        >
          go
        </PrimaryButton>
      </div>
    );
  }
};

export default OnbaordingPopup;

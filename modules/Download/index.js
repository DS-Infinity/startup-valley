import Image from 'next/image';
import styles from './index.module.scss';

export default function Content() {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>
        where do you want to continue your quest for world domination?
      </h1>
      <h2 className={styles.main__subtitle}>
        I am warning you, this won't be easy
      </h2>
      <div className={styles.main__downloads}>
        <div className={styles.main__downloads__download}>
          <Image src={"/windows.png"} width={"140"} height={"140"}/>
          <span className={styles.main__downloads__download__name}>Windows</span>
        </div>
        <div className={styles.main__downloads__download}>
          <Image src={"/apple.png"} width={"125"} height={"125"} style={{marginTop: '8px'}}/>
          <span className={styles.main__downloads__download__name}>MacOS</span>
        </div>
        <div className={styles.main__downloads__download}>
          <Image src={"/linux.png"} width={"125"} height={"125"} style={{marginTop: '6px'}}/>
          <span className={styles.main__downloads__download__name}>Linux</span>
        </div>
        <div className={styles.main__downloads__download}>
          <Image src={"/android.png"} width={"100"} height={"120"} style={{marginTop: '8px'}}/>
          <span className={styles.main__downloads__download__name}>Android</span>
        </div>
      </div>
      <h1 className={styles.main__subtitle} style={{marginTop: '60px'}}>ios users? L BOZO RIP</h1>
    </div>
  );
}

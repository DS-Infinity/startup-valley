import styles from './index.module.scss';
import Image from 'next/image';
import Men from '../../public/men.png';
import Women from '../../public/women.png';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import useUser from '../../utils/hooks/useUser';

import { slaves } from '../../utils/data';
import axios from '../../utils/axios';

const SlaveCard = ({ slave }) => {
  const { user } = useUser();

  const hire = async (slave) => {
    if (user.money < slave.price) return alert('not enough money');

    const { data } = await axios.post('/api/slaves', { id: slave.id });

    
  };
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {slave.avatar === 0 ? (
          <Image src={Women} width={240} />
        ) : (
          <Image src={Men} width={240} />
        )}
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__name}>{slave.name}</div>
        <div className={styles.card__content__stats}>
          <div className={styles.card__content__stats__stat}>
            <div>field:</div>
            <div>{slave.faction}</div>
          </div>
          <div className={styles.card__content__stats__stat}>
            <div>price:</div>
            <div>{slave.price}</div>
          </div>
        </div>
        <hr />
        <div className={styles.card__content__buttons}>
          <PrimaryButton style={{ background: '#A1A34E' }}>stats</PrimaryButton>
          <PrimaryButton
            onClick={() => {
              hire(slave);
            }}
          >
            hire
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

const PowerupCard = ({image, content, price, name , faction, imwidth, imheight, imstyle}) => {
  const { user } = useUser();

  const hire = async (slave) => {
    if (user.money < slave.price) return alert('not enough money');

    const { data } = await axios.post('/api/slaves', { id: slave.id });

    
  };
  return (
    <div className={styles.cardpower}>

      <div className={styles.cardpower__content}>
        <div className={styles.imagestuff}>
          <div className={styles.imgContainer2}>
            <Image src={image} width={imwidth? imwidth : 120} style={imstyle} height={imheight? imheight: 120} />
          </div>
        <div>
        <div className={styles.card__content__name}>{name}</div>
        <div className={styles.card__content__content}>
            {content}
        </div>
        <div className={styles.card__content__stats} style={{marginTop: '12px'}}>
          <div className={styles.card__content__stats__stat}>
            <div>field:</div>
            <div>{faction}</div>
          </div>
          <div className={styles.card__content__stats__stat}>
            <div>price:</div>
            <div>{price}</div>
          </div>
        </div>
        </div>
        </div>
        <hr /> 
        <div className={styles.cardpower__content__buttons}>
          <PrimaryButton
            onClick={() => {  
              
            }}
          >
            buy
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};


const Content = () => {
  const { user } = useUser();

  if (!user) return null;

  const difference = slaves.filter(
    (x) => !user.slaves.some((y) => y.id === x.id)
  ); //slaves which the user can still buy (that is meant to sound wrong)

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.textshit}>
          <div>recruiting</div>
          <div>the best startup deserves the best team</div>
          <div>offers expiring in 13:02:24</div>
        </div>
        <div className={styles.main__content}>
          {difference.map((slave) => {
            return <SlaveCard slave={slave} />;
          })}
        </div>
        <div className={styles.textshit}>
          <div>Powerups</div>
        </div>
        <div className={styles.main__content}>
          <PowerupCard image={"/stackoverflow.png"} name={"Stackoverflow Snips"} faction={"dev"} price={"200"} content={"the developer instantly ctrl + c and ctrl + v's stackoverflow code"}></PowerupCard>
          <PowerupCard image={"/npm.png"} imstyle={{marginLeft: '16px'}} imwidth={90} imheight={120} name={"NPM Package"} faction={"dev"} price={"100"} content={"the developer finds a npm package to do just what the startup needs"}></PowerupCard>
          <PowerupCard image={"/behance.png"} imstyle={{marginLeft: '0px'}} imwidth={90} imheight={90} name={"Behance \"Inspiration\""} faction={"design"} price={"300"} content={"the designer finds a design just like what he was tasked to :wink:"}></PowerupCard>
          <PowerupCard image={"/image.png"} imstyle={{marginLeft: '0px'}} imwidth={110} imheight={120} name={"Royalty Free Assets"} faction={"design"} price={"300"} content={"the designer finds some free assets which he he can use without credit"}></PowerupCard>
          <PowerupCard image={"/tiktok.png"} imstyle={{marginLeft: '0px'}} imwidth={110} imheight={150} name={"Viral TikTok"} faction={"design"} price={"300"} content={"the marketer's tiktok dance while shilling the app goes trending"}></PowerupCard>
          <PowerupCard image={"/twitter.png"} imstyle={{marginLeft: '0px'}} imwidth={105} imheight={105} name={"Elon Musk Tweets"} faction={"design"} price={"300"} content={"elon musk just tweets about the app this comes in marketing right?"}></PowerupCard>
        </div>
      </div>
    </div>
  );
};

export default Content;

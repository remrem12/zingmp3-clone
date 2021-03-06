import React from "react";
import Figure from "../Figure";
import styles from './TabItemImg.module.scss'
import CustomLink from '../../atoms/CustomLink'

type Props = {
  rank: number,
  name: string,
  artist: string,
  view: any,
  img: string,
  imgUrl: string,
  h: number
}

const TabItemImg:React.FC<Props> = ({ rank, name, artist, view, img, imgUrl, h }: Props) => {
  const image = img !== "";
  const thumb = imgUrl !== ''

  const renderArtist = (artist) =>
    artist.map((a) => (
      <CustomLink key={a} color={img ? "#fff" : "#959595"} size={12}>
        {" "}
        {a}{" "}
      </CustomLink>
    ));

  const renderRank = (rank) => {
    if (rank < 10) {
      return `0${rank}`;
    }
    return `${rank}`;
  };

  return (
    <div className={`${styles.tabItem} ${image ? styles.firstImage : ""}`} style={{height: `${h + 10}px`}}>
      {image ? <img src={img} alt="anh" /> : null}

      <div className={styles.content} style={{height: `${h + 10}px`}}>
        <div className={styles.rank}>
          {" "}
          {renderRank(rank)}{" "}
        </div>
        <div className={styles.info}>
          { thumb && (
            <Figure
              imgUrl={imgUrl}
              h={h}
              w={110}
              showPlay={true}
              iconSize={30}
              name={name}
            />
          ) }
          <div className={styles.infoDetail}>
            <div className={styles.songInfo}>
              <h3 className={styles.songName}>
                <CustomLink color={img ? "#fff" : "#000"} size={14}>
                  {name}
                </CustomLink>
              </h3>
              <h4 className={styles.artist}>{renderArtist(artist)}</h4>
            </div>
            <p className={styles.view}>{view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabItemImg;

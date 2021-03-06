import React from 'react'
import Figure from '../../molecules/Figure'
import OptionBtn from '../../molecules/OptionBtn'
import SongInfo from '../../molecules/SongInfo'
import styles from './TopFiveItem.module.scss'

type Props = {
  rank: any,
  imgUrl: string,
  name: string,
  artist: string,
  view: any,
  iconSize: number
}

const TopFiveItem:React.FC<Props> = ({rank, imgUrl, name, artist, view, iconSize}: Props) => {
  
  const colors = ['#4a90e2', '#00AF64', '#D8541C', '#666', '#666']

  return (
    <article className={styles.topFiveItem}>
      <div className={styles.rank} style = {{color: colors[rank-1]}}> {rank} </div>
      <div className={styles.divider}>
        <div className={styles.dividerContent}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.detail}>
          <Figure
            imgUrl={imgUrl}
            showPlay={true}
            w={60} h={60}
            iconSize={iconSize}
            name={name}
          />
          <SongInfo
            name={name}
            artist={artist}
            st={{ marginLeft: '10px' }}
          />
        </div>
        <OptionBtn/>
      </div>
      <div className={styles.view}> {view} </div>
    </article>
  )
}


export default TopFiveItem
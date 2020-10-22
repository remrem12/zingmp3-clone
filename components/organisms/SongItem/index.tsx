import React from 'react'
import styles from './SongItem.module.css'
import SongDetail from '../../molecules/SongDetail'
import ToolBtn from '../../molecules/ToolBtn'
import MoreBox from '../MoreBox'
import {Dropdown} from 'antd'

type Props = {
  name: string,
  artist: string,
  imgUrl: string,
  type: string,
  icon: string,
  time: string,
  stt: any,
  songUrl: string,
  music?: boolean
}

const SongItem:React.FC<Props> = ({name, artist, imgUrl, type, icon, time, stt, songUrl, music}: Props) => {
  const box = <MoreBox
    name={name}
    artist={artist}
    imgUrl={imgUrl}
  />

  return (
    <Dropdown overlay={box} trigger={["contextMenu"]} placement="bottomCenter">
      <div className={styles.songItem}>
        <div className={styles.left}>
          <div className={styles.stt}>{stt}</div>
          <SongDetail
            name={name}
            artist={artist}
            imgUrl={imgUrl}
            type={type}
            icon={icon}
            songUrl={songUrl}
            music={music}
          />
        </div>
        <div className={styles.time}> {time} </div>
        <ToolBtn 
          name={name}
          artist={artist}
          imgUrl={imgUrl}
          size='small'
        />
      </div>
    </Dropdown>
  )
}

export default SongItem

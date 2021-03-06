import React from 'react'
import { Spin } from 'antd'
import styles from './Loader.module.scss'

const Loader:React.FC = () => (
  <div className={styles.loader}>
    <Spin tip="Loading..."/>
  </div>
)

export default Loader
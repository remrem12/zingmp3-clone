import React from 'react'
import { Input } from 'antd'
import './SearchBar.module.scss'

const { Search } = Input

export const SearchBar:React.FC = () => {

  return (
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
  )
}
import React, { useEffect, useState } from 'react'
import './IdeaList.scss'
import currentAPI from '../../MockData/MockApi'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import LikeDislike from '../LikeDislike/LikeDislike'
import CommentCount from '../CommentCount/CommentCount'
import { ReactComponent as Arrow } from '../../assets/icons/arrow_short-fat.svg'
import Avatar from '../Avatar/Avatar'
import TileIdeas from '../TileIdeas/TileIdeas'

const getDataIdeas = async () => await currentAPI.getDataIdeas()

const IdeaList = (props) => {
  const [dataIdeas, setDataIdeas] = useState({})
  const { setType } = props

  useEffect(() => {
    setType('index')
    async function fetchData() {
      const response = await getDataIdeas()
      setDataIdeas(response)
    }
    fetchData()
  }, [])
  if (!Object.keys(dataIdeas).length) return null
  return <TileIdeas dataIdeas={dataIdeas} />
}

export default IdeaList

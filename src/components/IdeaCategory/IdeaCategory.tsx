import React, { useEffect, useState } from 'react'
import './IdeaCategory.scss'
import TileIdeas from '../TileIdeas/TileIdeas'
import currentAPI from '../../MockData/MockApi'
import { Link } from 'react-router-dom'
import Tag from '../Tag/Tag'
import LikeDislike from '../LikeDislike/LikeDislike'
import CommentCount from '../CommentCount/CommentCount'
import { ReactComponent as Arrow } from '../../assets/icons/arrow_short-fat.svg'
import Avatar from '../Avatar/Avatar'

const getDataIdeas = async (href) => await currentAPI.getCategory(href)

const IdeaCategory = (props) => {
  const { setType, location } = props
  const [dataIdeas, setDataIdeas] = useState({})
  const [hrefCategory, setHrefCategory] = useState('')

  useEffect(() => {
    setType('category')
    setHrefCategory(location.pathname)
  }, [])

  useEffect(() => {
      if (!hrefCategory) return
    async function fetchData() {
        const response = await getDataIdeas(hrefCategory)
      setDataIdeas(response)
    }
    fetchData()
  }, [hrefCategory])
    if (!Object.keys(dataIdeas).length) return null
  return <TileIdeas dataIdeas={dataIdeas} />
}

export default IdeaCategory

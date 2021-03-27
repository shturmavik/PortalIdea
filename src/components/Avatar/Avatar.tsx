import React from 'react'
import cn from 'classnames'
import { ReactComponent as NoPhoto } from '../../assets/icons/user.svg'

type Props = {
  width: number
  height: number
  src: string
  className: string
}

const Avatar = ({
  width = 64,
  height = 64,
  src = '',
  className = '',
}: Props) => {
    className = `rounded-full ${className}`;
    const styles = {
        width: `${width}px`,
        height: `${height}px`
    }
    return (
    <>
      {!src && <NoPhoto style={styles} className={className} />}
      {!!src && <img src={src} style={styles} className={className} />}
    </>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default Avatar

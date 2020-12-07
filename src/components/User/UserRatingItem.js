import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import login from '../../assets/img/login.png'

const UserRatingItem = (props) => {
  return(
    <div className='rates-item'>
      <div className='item-info'>
        <div>
          <img src={props.img ? `http://195.38.164.24:8080/media/${props.img}` : login} alt='avatar-for-user' className='item-img'/>
        </div>
        <div className='item-names'>
          <div className='item-names-name'>{props.name}</div>
          <div className='item-names-kills'>{props.kills}</div>
        </div>
      </div>
      <div>
        <StarBorderIcon className='star-icon' />
      </div>
    </div>
  )
}

export default UserRatingItem

/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 使用者
 */
import Nerv from 'nervjs'
import { isLocaleChinese } from '../../util'
import './user.scss'

import CpTitle from '../cp_title/cp_title'

class User extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    const isCN = isLocaleChinese.call(this)
    return (
      <div className='user'>
        <div className='grid_c1'>
          <CpTitle data={'users'} />
          <div className='user_main'>
            <img className='user_main_show' src='https://storage.jd.com/taro-resource/user-cases.png' />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = User

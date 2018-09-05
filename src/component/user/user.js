
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
            <img className='user_main_show' src='//img30.360buyimg.com/uba/jfs/t1/5128/33/29/883763/5b8e90aaE60dfdb7a/cb4027fb890de465.png?ynotemdtimestamp=1536128211696' />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = User

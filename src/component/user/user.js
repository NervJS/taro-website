
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
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='http://jd.com/' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>京东购物</span>}
                {!isCN && <span className='user_desc'>JD MALL</span>}
              </div>
            </div>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='http://www.toplife.com/' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>TOPLIFE</span>}
                {!isCN && <span className='user_desc'>TOPLIFE</span>}
              </div>
            </div>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='javascript:;' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>一起有局</span>}
                {!isCN && <span className='user_desc'>PARTY TOGETHER</span>}
              </div>
            </div>
            <div className='user_wrap'>
              <div className='user_card'>
                <a href='javascript:;' className='user_card_img' target='_blank' />
                {isCN && <span className='user_desc'>玲珑智能设计</span>}
                {!isCN && <span className='user_desc'>EXQUISITE INTELLIGENT DESIGN</span>}
              </div>
            </div>
          </div>
          <div className="user_other">
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/2441562/42329803-2c2871d0-80a4-11e8-9708-fdede6048ac5.jpg" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/5935390/43631321-765fdc46-9735-11e8-8312-798846c3f557.jpg" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/5653652/43824908-def1a8cc-9b25-11e8-8548-1e88d4c0296d.jpg" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/7992920/43836676-b286c812-9b48-11e8-83fd-29ce92221498.png" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/21174764/44625217-c0a27300-a936-11e8-9da9-04174f4699f1.jpg" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://camo.githubusercontent.com/ee74f799ba3d1dca89e533226739434892f2b757/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30392f30342f356238653233306538623034612e706e67" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://user-images.githubusercontent.com/12668546/44951956-e97db780-aea4-11e8-8266-a0606c161291.jpg" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://camo.githubusercontent.com/1798e5e987b56a7db4fdace8c2e20039ba2a7275/68747470733a2f2f7773322e73696e61696d672e636e2f6c617267652f303036395256546467793166757279636b62686a346a3330373630373674396f2e6a7067" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://camo.githubusercontent.com/7215d23a6da1da409ef4545fb5e74fe941bfd26f/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30392f30342f356238653233306266306539662e6a7067" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://camo.githubusercontent.com/0a305f44235360012ed852d2ecdb32ebce951f2e/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30392f30342f356238653233306330316663312e6a7067" alt=""/>
            </div>
            <div className="user_other_wrap">
              <img src="https://camo.githubusercontent.com/e282897c4ffd62de747b2bb3e082e19e20f91fff/68747470733a2f2f692e6c6f6c692e6e65742f323031382f30392f30342f356238653233306335336464342e706e67" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = User

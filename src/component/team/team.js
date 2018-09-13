/**
 * @author yvonnexchen
 * @date 2017-11-27
 * @desc
 */
import Nerv from 'nervjs'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import './team.scss'

import CpTitle from '../cp_title/cp_title'

class Team extends Nerv.Component {
  render () {
    return (
      <div className='team clearfix'>
        <div className='grid_c1'>
          <CpTitle data='teams' />
          <div className='team_main'>
            <a href='//nervjs.github.io/taro/docs/team.html#%E6%A0%B8%E5%BF%83%E5%BC%80%E5%8F%91%E8%80%85'>
              <h3>
                <span className='team_icon team_icon_core' />
                <p>
                  <FormattedMessage id='teams_core' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_core_desc' />
              </p>
            </a>
            <a href='//nervjs.github.io/taro/docs/team.html#%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%EF%BC%88%E8%81%94%E5%90%88%E5%9B%A2%E9%98%9F%EF%BC%89'>
              <h3>
                <span className='team_icon team_icon_partner' />
                <p>
                  <FormattedMessage id='teams_partner' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_partner_desc' />
              </p>
            </a>
            <a href='//nervjs.github.io/taro/docs/team.html#%E4%B8%AA%E4%BA%BA%E8%B4%A1%E7%8C%AE%E8%80%85'>
              <h3>
                <span className='team_icon team_icon_contributor' />
                <p>
                  <FormattedMessage id='teams_hero' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_hero_desc' />
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Team

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
            <div>
              <h3>
                <span className='team_icon team_icon_core' />
                <p>
                  <FormattedMessage id='teams_core' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_core_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='team_icon team_icon_partner' />
                <p>
                  <FormattedMessage id='teams_partner' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_partner_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='team_icon team_icon_contributor' />
                <p>
                  <FormattedMessage id='teams_hero' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teams_hero_desc' />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Team

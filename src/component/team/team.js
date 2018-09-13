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
                  <FormattedMessage id='teamCore' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teamCoreDesc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='team_icon team_icon_partner' />
                <p>
                  <FormattedMessage id='teamPartner' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teamPartnerDesc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='team_icon team_icon_contributor' />
                <p>
                  <FormattedMessage id='teamHero' />
                </p>
              </h3>
              <p className='team_desc'>
                <FormattedMessage id='teamHeroDesc' />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Team

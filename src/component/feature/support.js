/**
 * @author tim
 * @date 2018-05-27
 * @desc
 */
import Nerv from 'nervjs'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import './feature.scss'

import CpTitle from '../cp_title/cp_title'

class Support extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='feature support' style="border-top: 1px solid #e3e6e9;">
        <div className='grid_c1'>
          <CpTitle data='support' />
          <div className='feature_main support_main'>
            <div>
              <h3>
                <span className='feature_icon feature_icon_wechat' />
                <p>
                  <FormattedMessage id='support1' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support1_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_h5' />
                <p>
                  <FormattedMessage id='support2' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support2_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_rn' />
                <p>
                  <FormattedMessage id='support3' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support3_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_alipay' />
                <p>
                  <FormattedMessage id='support5' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support5_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_baidu' />
                <p>
                  <FormattedMessage id='support6' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedHTMLMessage id='support6_desc' />
              </p>
            </div>
            <div>
              <h3>
                <span className='feature_icon feature_icon_tt' />
                <p>
                  <FormattedMessage id='support7' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedHTMLMessage id='support7_desc' />
              </p>
            </div>
            <div className='feture_main_grey'>
              <h3>
                <span className='feature_icon feature_icon_fastapp' />
                <p>
                  <FormattedMessage id='support4' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support4_desc' />
              </p>
            </div>
            <div className='feture_main_grey'>
              <h3>
                <span className='feature_icon feature_icon_qqbrowser' />
                <p>
                  <FormattedMessage id='support8' />
                </p>
              </h3>
              <p className='feature_desc'>
                <FormattedMessage id='support8_desc' />
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Support

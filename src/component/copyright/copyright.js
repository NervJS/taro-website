/**
 * @author yvonnexchen
 * @date 2017-12-5
 * @desc 版权
 */
import Nerv from 'nervjs'
import './copyright.scss'

class Copyright extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='footer'>
        {/* <div className='footer-logo-container'>
          <div className='footer-logo'></div>
        </div> */}
        <div className='footer-link-container'>
          <div className='footer-link'>
            <h3>相关资源</h3>
            <p><a className='link' href="https://taro.js.org/">Taro</a> - 多端解决方案</p>
            <p><a className='link' href="https://taro-ui.aotu.io/">Taro</a> - 多端解决方案</p>
            <p><a className='link' href="https://nerv.aotu.io/">Nerv</a> - 类 React 框架</p>
            <p><a className='link' href="https://athena.aotu.io/">Athena</a> - 前端流程工具</p>
            <p><a className='link' href="https://at.aotu.io/">AT-UI</a> - Vue 组件库</p>
          </div>
          <div className='footer-link'>
            <h3>社区</h3>
            <p><a href="https://github.com/NervJS/taro/issues">反馈建议</a></p>
            <p><a href="https://github.com/NervJS/taro">GitHub</a></p>
          </div>
          {/* <div className='footer-link'>
            <h3>关于我们</h3>
            <p><a href="https://aotu.io/">凹凸实验室</a></p>
          </div> */}
        </div>
      </div>
    )
  }
}

module.exports = Copyright

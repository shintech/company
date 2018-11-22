import React from 'react'
import Wrapper from './wrapper'
/* /components/Services/index.js */
import TwentyFour from 'static/images/24-hours-support.svg'
import Cloud from 'static/images/cloud.svg'
import Help from 'static/images/help.svg'
import Repair from 'static/images/cloud-repair.svg'
import Tools from 'static/images/tools-folder.svg'

const onClick = () => {}

class Services extends React.Component {
  render () {
    const { services } = this.props

    return (
    <Wrapper>
      <li className='it-services-icon' onClick={onClick}>
        <TwentyFour />
        <div>24/7 Tech Support</div>
      </li>

      <li className='it-services-icon' onClick={onClick}>
        <Cloud />
        <div>Cloud Hosting</div>
      </li>

      <li className='it-services-icon' onClick={onClick}>
        <Help />
        <div>IT Management</div>
      </li>

      <li className='it-services-icon' onClick={onClick}>
        <Repair />
        <div>Configuration</div>
      </li>

      <li className='it-services-icon' onClick={onClick}>
        <Tools />
        <div>Maintenance</div>
      </li>
    </Wrapper>
    )
  }
}

export default Services

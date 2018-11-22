import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import Services from 'components/Services'
import api from 'api/about'
import actions from 'state/actions/about'

class About extends React.Component {
  static async getInitialProps ({ store }) {
    return {
      services: [
        {"title":"Configuration","imageURL":"/static/cloud-repair.svg","_id":"1vAt1l7qPmfaMA3O"},
        {"title":"IT Management","imageURL":"/static/help.svg","_id":"2KnwH2PDLvvDbUsQ"},
        {"title":"24 Hour Tech Support","imageURL":"/static/24-hours-support.svg","_id":"MNlKZ8JZ8Iy2R4tK"},
        {"title":"Maintenance","imageURL":"/static/tools-folder.svg","_id":"OM1rahEr3NDIbk8t"},
        {"title":"Cloud Hosting","imageURL":"/static/cloud.svg","_id":"UOJSWhk2mKnGQX40"}        
      ]
    }
  }

  static propTypes = {
    about: PropTypes.object.isRequired
  }

  render () {
    return (
      <Main title='services' host='shintech.ninja' favicon='/static/images/react.svg' >
        <Title title='Services' fontSize='24ch' colors={['mediumorchid', 'indigo']} />
        <Services services={this.props.services} />
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)

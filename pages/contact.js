import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Title from 'components/Title'
import Content from 'components/Content'
import api from 'api/about'
import actions from 'state/actions/about'

class About extends React.Component {
  static async getInitialProps ({ store }) {
    return {
      custom: 'About!!'
    }
  }

  static propTypes = {
    about: PropTypes.object.isRequired
  }

  render () {
    return (
      <Main title='contact' host='shintech.ninja' favicon='/static/images/react.svg' >
        <Title title='Contact' fontSize='24ch' colors={['steelblue', 'indigo']} />
        <p>
          <email>{process.env['EMAIL']}</email>
        </p>
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({ })
)(About)

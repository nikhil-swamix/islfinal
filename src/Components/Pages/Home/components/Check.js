import React from 'react'
import axios from 'axios'
import Useful from './Useful'
import Middleevent from './Middleevent'

class Check extends React.Component {
  state = {
    event_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://backend-isl.herokuapp.com/api/infos/event',
    )
    try {
      this.setState({
        event_list: response.data,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { event_list } = this.state

    return (
      <React.Fragment>
        {event_list.length === 0 ? <Useful /> : <Middleevent />}
      </React.Fragment>
    )
  }
}
export default Check

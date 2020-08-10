import React from 'react'
import axios from 'axios'
import Events from './Events'
import Usefullinks from './Usefullinks'
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
        {event_list.length === 0 ? <Usefullinks /> : <Events />}
      </React.Fragment>
    )
  }
}
export default Check

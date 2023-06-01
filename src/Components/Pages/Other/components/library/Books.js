import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner } from 'react-bootstrap'

class Books extends React.Component {
  state = {
    syllabus_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://islec.herokuapp.com/api/books',
    )
    try {
      this.setState({
        syllabus_list: response.data,
        isLoading: false,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    const { isLoading, syllabus_list } = this.state

    const tableColumns = [
      { title: 'Type', prop: 'type' },
      { title: 'Title', prop: 'title' },
      { title: 'Author', prop: 'author' },
      { title: 'Availability', prop: 'available'},
    ]

    return (
      <>
        {!isLoading ? (
          <div className="libr table-responsive mt-10">
            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={syllabus_list}
              initialPageLength={8}
              pageLengthOptions={[5, 20, 30, 40, 50, 60]}
            />
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center mt-20">
              <div className="container text-center">
                <Spinner animation="border" style={{ color: '#192f59' }} />
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}

export default Books

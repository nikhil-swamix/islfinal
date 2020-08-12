import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner } from 'react-bootstrap'

class Table extends React.Component {
  state = {
    syllabus_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://tranquil-springs-03360.herokuapp.com/json/syllabus',
    )
    try {
      this.setState({
        syllabus_list: response.data.syllabus_list,
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
      {
        title: 'Title of the National / International Conference / Journal',
        prop: 'sem',
      },
      { title: 'Title of The Paper', prop: 'type' },
      { title: 'Date', prop: 'sem' },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="research table-responsive">
            <h4>Publication</h4>

            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={syllabus_list}
              initialPageLength={5}
              pageLengthOptions={[10, 20, 30, 40, 50, 60]}
            />
          </div>
        ) : (
          <>
            <div className="d-flex align-items-center ">
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
export default Table

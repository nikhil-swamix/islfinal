import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner } from 'react-bootstrap'

class Table extends React.Component {
  state = {
    publication_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://backend-isl.herokuapp.com/api/research/publications',
    )
    try {
      this.setState({
        publication_list: response.data,
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


    const { isLoading, publication_list } = this.state
    const tableColumns = [
      {
        title: 'Title',
        prop: 'descp',
      },
      { title: 'IEEE / Journal', prop: 'title' },
      { title: 'Date', prop: 'date' },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="research table-responsive">
            <h4>Publication</h4>

            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={publication_list}
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

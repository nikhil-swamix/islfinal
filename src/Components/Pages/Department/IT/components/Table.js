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
      'https://mern1ayaz.herokuapp.com/api/publications/it',
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
    const renderSyllabusUrl = (val, row) => (
      <a href={`${row['link']}`}> {`${row['title']}`} </a>
    )

    const { isLoading, publication_list } = this.state
    const tableColumns = [
      {
        title: 'Title',
        prop: 'title',
        render: renderSyllabusUrl,
      },
      {
        title: 'National / International Journal / Conference',
        prop: 'journal',
      },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="table-responsive publication mt-10">
            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={publication_list}
              initialPageLength={10}
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

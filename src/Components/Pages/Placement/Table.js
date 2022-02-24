import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner } from 'react-bootstrap'
import moment from 'moment'


class Table extends React.Component {
  state = {
    publication_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://mern1ayaz.herokuapp.com/api/placements/allPlacements',
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
        title: 'Company',
        prop: 'title',
      },
      {
        title: 'Campus',
        prop: 'dept',
      },
      {
        title: 'Date',
        prop: 'journal',
        render: function (data, type, row, meta) {
          return moment(data).format('D MMM YYYY')
        },
      },
      {
        title: 'Department',
        prop: 'link',
      },
      {
        title: 'Package',
        prop: 'salary',
      },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="research table-responsive">

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

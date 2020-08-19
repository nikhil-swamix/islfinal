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
      'https://mern1ayaz.herokuapp.com/api/syllabs',
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
    const renderSyllabusUrl = (val, row) => (
      <a href={`${row['syllabus']}`}>
        <i class="fa fa-download" aria-hidden="true"></i>
      </a>
    )

    const { isLoading, syllabus_list } = this.state
    const tableColumns = [
      { title: 'Department', prop: 'dept' },
      { title: 'Sem', prop: 'sem' },
      { title: 'Type', prop: 'type' },
      { title: 'Download', prop: 'syllabus', render: renderSyllabusUrl },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="syll text-center table-responsive">
            <p className="font-weight-bold">
              Year I Common Group-A(ECE, IT, ME) -- Group-B(CE, CSE, EEE)
            </p>
            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={syllabus_list}
              initialPageLength={8}
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

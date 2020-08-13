import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner } from 'react-bootstrap'

class Syllabus extends React.Component {
  state = {
    syllabus_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://backend-isl.herokuapp.com/api/papers/ce',
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
    const renderPaperUrl = (val, row) => (
      <a href={`${row['paper']}`}>
        {row['paper'] === 'na' ? (
          <a href="#na" class="badge badge-light">
            N/A
          </a>
        ) : (
          <i class="fa fa-download" aria-hidden="true"></i>
        )}
      </a>
    )

    const renderSyllabusUrl = (val, row) => (
      <a href={`${row['syllabus']}`}>
        <i class="fa fa-download" aria-hidden="true"></i>
      </a>
    )
    const { isLoading, syllabus_list } = this.state

    const tableColumns = [
      { title: 'Subject Code', prop: 'subject_code' },
      { title: 'Subject Name', prop: 'subject_name' },
      { title: 'Sem', prop: 'sem' },
      { title: 'Type', prop: 'type' },
      { title: 'Syllabus', prop: 'syllabus', render: renderSyllabusUrl },
      { title: 'Paper', prop: 'paper', render: renderPaperUrl },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="table-responsive mt-10">
            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={syllabus_list}
              initialPageLength={5}
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

export default Syllabus

import React from 'react'
import axios from 'axios'
import { DataTable } from 'react-data-components'
import { Spinner, Container } from 'react-bootstrap'
import moment from 'moment'

class Table extends React.Component {
  state = {
    news_list: [],
    isLoading: true,
    errors: null,
  }

  async getData() {
    const response = await axios.get(
      'https://mern1ayaz.herokuapp.com/api/exams',
    )
    try {
      this.setState({
        news_list: response.data,
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

    const { isLoading, news_list } = this.state

    const tableColumns = [
      {
        title: 'Notifications / Time Table',
        prop: 'title',
        render: renderSyllabusUrl,
      },
      {
        title: 'Date',
        prop: 'date',
        render: function (data, type, row, meta) {
          return moment(data).format('D MMM YYYY')
        },
      },
    ]

    return (
      <>
        {!isLoading ? (
          <div className="table-responsive syll mt-10">
            <DataTable
              keys="id"
              columns={tableColumns}
              initialData={news_list}
              initialPageLength={10}
              pageLengthOptions={[10, 20, 30, 40, 50, 60]}
            />
          </div>
        ) : (
          <>
            <div className="text-center mt-20 ">
              <Container>
                <Spinner animation="border" style={{ color: '#192f59' }} />
              </Container>
            </div>
          </>
        )}
      </>
    )
  }
}

export default Table

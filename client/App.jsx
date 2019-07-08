import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Table } from 'react-bootstrap'
import Item from './Item.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      categories: [],
      currentPage: 1,
      pageCount: 0
    }
    this.getEvents = this.getEvents.bind(this)
    this.editEvent = this.editEvent.bind(this)
    this.saveEvent = this.saveEvent.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.sortBy = this.sortBy.bind(this)
  }

  componentDidMount() {
    this.getEvents(this.state.currentPage)
  }

  

  getEvents(page) {
      axios.get(`/events?_page=${page}`)
      .then(results => {
        let total = results.headers['x-total-count']
        this.setState({pageCount: total / 10}, () => {
          this.setState({events: results.data})
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  sortBy() {
    axios.get(`/events?_sort=category1&_page=1`)
      .then(results => {
        this.setState({events: results.data})
      })
  }

  editEvent(id) {

  }

  saveEvent(id) {
    
  }

  handlePageChange(e) {
    this.getEvents(e.selected)
  }

  render() {
    return (
          <React.Fragment>
            <Table bordered hover variant="dark" responsive>
              <thead>
                <Search />
                <tr>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                {this.state.events.map((event => {
                  return (
                    <Item key={event.id} event={event} edit={this.editEvent} save={this.saveEvent} />
                  )
                }))}
                <tr>
                  <td colSpan="3">
                    <ReactPaginate
                    onPageChange={this.handlePageChange}
                    forcePage={this.state.currentPage - 1}
                    initialPage={this.state.currentPage - 1}
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    activeClassName={'active'}
                    pageCount={this.state.pageCount}
                    disableInitialCallback={true}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
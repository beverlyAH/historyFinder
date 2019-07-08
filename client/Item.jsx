import React from 'react'
import Edit from './Edit.jsx'

class Item extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr key={this.props.event.id}>
        <td className="year">{this.props.event.date}</td>
        <td><Edit edit={this.props.edit} save={this.props.save} event={this.props.event} /></td>
        <td>{this.props.event.description}</td>
      </tr>
    )
  }
}

export default Item
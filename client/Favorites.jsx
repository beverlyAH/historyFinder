import React from 'react'

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: ['Science', 'India']
    }
  }

  render() {
    return (
      <React.Fragment>
      {this.state.favorites ?
      <select>
        {this.state.favorites.map(favorite => {
          return <option>{favorite}</option>
        })}
      </select> :
      <div></div>}
      </React.Fragment>
    )
  }
}

export default Favorites
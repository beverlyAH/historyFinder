import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <tr>
        <td colSpan="2"><h3>historyFinder</h3></td>
          <td colSpan="2">
            <InputGroup className="mb-3">
              <FormControl />
                <InputGroup.Append>
                  <Button variant="info">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </td>
      </tr>
    )
  }
}

export default Search
import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';

class DisplayIngredients extends Component {
  constructor(props){
    super(props);

    this.state={
      listOfIngredients: props.list
    }
  }
  
  render() {
    return (
        <Panel.Body>
          <div>
            <h6>Ingredients</h6>
            <div>
              <ul>
                {
                  this.state.listOfIngredients.map((ingredient, index) =>{
                    return(
                      <li key={index}>
                        {ingredient}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      </Panel.Body>
    )
  }
}

export default DisplayIngredients;

import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import '../style/ingredientListExpand.css';

class DisplayIngredients extends Component {
  constructor(props){
    super(props);
    this.state={
      listOfIngredients: props.list
    }
  }
  toggle(){
    this.props.toggleEdit(this.props.recipe);
  }

  delete(){
    this.props.deleteRecipe(this.props.recipe);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.recipe !== nextProps.recipe){
      this.setState({listOfIngredients:nextProps.list});
    }
  }
  render() {
    return (
      <div className="container">
          <div>
            <h6>Ingredients</h6>
          </div>
          <hr></hr>
          <div className="ingredient-box">
              <ul className="list-group">
                {
                  this.state.listOfIngredients.map((ingredient, index) =>{
                    return(
                      <li className="list-group-item" key={index}>
                        {ingredient}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          <div className="ingredient-box-bottom row">
            <div className="button-holder">
            <Button onClick={() => {this.delete()}} className="delete-button" bsStyle="danger">Delete <i className="fas fa-trash-alt "></i></Button>
            <Button onClick={() => {this.toggle()}} className="edit-button" bsStyle="warning">Edit  <i className="fas fa-edit"></i></Button>
            </div>
          </div>
    </div>
    )
  }
}

export default DisplayIngredients;

import React, {Component} from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import '../style/RecipeBox.css';

import DisplayIngredients from './SelectedIngredientList';

class RecipeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      showId: ''
    }
  }

    toggleHidden(event) {
      this.setState({
        isHidden: !this.state.isHidden
      });
      this.setState({
        showId: event.target.value
      }, () => {

      })
    }
  render() {
    let recipes = this.props.currentRecipesInApp;
    let recipesList = recipes.map((recipe, index) => {

      return (
        <div className="card individual-recipe-holder" key={index}>
              <div className="alert-success">
                <Button bsStyle='link' value={recipe.idNumber} onClick={this.toggleHidden.bind(this)}>
                  {recipe.recipeName}
                </Button>
              </div>

                {!this.state.isHidden &&
                  this.state.showId == recipe.idNumber &&
                  <DisplayIngredients
                    list={recipe.ingredientList}
                    recipe={recipe}
                    toggleEdit={this.props.toggleEdit}
                  />}
        </div>
      )
    })
    return (
      <div>
      <Jumbotron className="box">
        <div className="title-holder">
            <h1 className="jumbo-title">Recipe Box   <i className="fas fa-utensils"></i></h1>
        </div>
            {recipesList}
        <div className="button-holder">
          <button
            className='btn btn-primary btn-lg'
            onClick={() => {this.props.toggleAdd()}}>
            Add Recipe
          </button>
      </div>
      </Jumbotron>
      </div>
    )
  }
}
export default RecipeBox;

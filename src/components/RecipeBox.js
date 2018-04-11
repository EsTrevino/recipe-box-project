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
        console.log()
      })
    }

  render() {
    let recipes = this.props.currentRecipesInApp;
    //function for manipulating and displaying recipes
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
                  <DisplayIngredients list={recipe.ingredientList}
                  />}
        </div>
      )
    })
    return (
      <Jumbotron className="box">
        <div className="title-holder">
            <h1 className="jumbo-title">Recipes   <i className="fas fa-utensils"></i></h1>
        </div>

      {recipesList}
      </Jumbotron>
    )
  }
}
export default RecipeBox;

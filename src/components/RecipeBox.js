import React, {Component} from 'react';
import {Button, Panel, Jumbotron} from 'react-bootstrap';

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

          <Panel key={index}>
            <Panel.Heading>
              <Panel.Title>
                <Button bsStyle='link' value={recipe.idNumber} onClick={this.toggleHidden.bind(this)}>
                  {recipe.recipeName}
                </Button>
              </Panel.Title>
            </Panel.Heading>
                {
                  !this.state.isHidden && this.state.showId == recipe.idNumber &&
                    <DisplayIngredients list={recipe.ingredientList} />
                }
          </Panel>
      )
    })
    return (
      <Jumbotron>
      {recipesList}
      </Jumbotron>
    )
  }
}
export default RecipeBox;

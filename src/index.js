import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RecipeBox from './components/RecipeBox';
import AddModal from './components/AddModal';
import Edit from './components/Edit';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      recipes:[{recipeName:'Eggs Benedict', ingredientList: ['Eggs', 'Toast', 'Sauce'], idNumber:1},
       {recipeName:'Bacon and Eggs', ingredientList: ['Bacon', 'Eggs', 'Coffee'], idNumber:2}],
      editIsHidden: true,
      addIsHidden: true,
      editObject: null
    }
  }


  render(){
    const toggleAdd = () =>{
      this.setState({addIsHidden: !this.state.addIsHidden});
    }
    const addRecipe = (recipeObject) =>{
           this.setState(prevState => ({
             recipes:[...prevState.recipes, recipeObject]}
            ))
            this.setState({addIsHidden: !this.state.addIsHidden});
          }
    const toggleEdit = (recipeObject) => {
        this.setState(
          {editIsHidden: !this.state.editIsHidden,
          editObject: recipeObject});
        }
    const closeEdit = () =>{
      this.setState({editIsHidden: !this.state.editIsHidden});
    }
    const updateRecipe = (recipeObject) => {
        let idForSearching = recipeObject.idNumber;
        let index = this.state.recipes.findIndex(recipe => recipe.idNumber === idForSearching);
        this.setState({
          recipes: [
            ...this.state.recipes.slice(0, index),
            Object.assign({}, this.state.recipes[index],
              {recipeName: recipeObject.recipeName}, {ingredientList: recipeObject.ingredientList}),
              ...this.state.recipes.slice(index + 1)
          ]
        });
    }
    const deleteRecipe = (recipeObject) =>{
      let idForSearching = recipeObject.idNumber;
      let index = this.state.recipes.findIndex(recipe => recipe.idNumber === idForSearching);
      this.setState({
          recipes: this.state.recipes.filter((_, i) => i !== index)
        });
    }
    return(
      <div className="container">
        <RecipeBox
          currentRecipesInApp={this.state.recipes}
          toggleEdit={toggleEdit}
          toggleAdd={toggleAdd}
          deleteRecipe={deleteRecipe}
         />
        {!this.state.addIsHidden &&
          <AddModal
            addRecipe={addRecipe}
            toggleAdd={toggleAdd}
          />}
        {!this.state.editIsHidden
          &&
          <Edit
            recipeForEdit={this.state.editObject}
            updateRecipe={updateRecipe}
            toggleEdit={toggleEdit}
            closeEdit={closeEdit}
          />}
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

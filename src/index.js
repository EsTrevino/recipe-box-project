import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RecipeBox from './components/RecipeBox';
import AddModal from './components/AddModal';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      recipes:[
        {recipeName: "beans", ingredientList: ["beans", "stew"], idNumber: 10},
        {recipeName: "Onion Stew", ingredientList: ["onions", "stew", 'pepper'], idNumber: 11},
        {recipeName: "Waffles", ingredientList: ["batter", "vanilla", 'stawberries', 'whipcream'], idNumber: 12},
        {recipeName: "Eggs Benedict", ingredientList:['Eggs', 'Toast', 'Pepper'], idNumber: 13}
      ]
    }
  }

  render(){
    const addRecipe = (recipeObject) =>{
           this.setState(prevState => ({
             recipes:[...prevState.recipes, recipeObject]}
            ))
          }
    return(
      <div className="container">
        <RecipeBox currentRecipesInApp={this.state.recipes} />
        <AddModal addRecipe={addRecipe}/>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('root'));

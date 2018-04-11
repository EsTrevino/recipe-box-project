import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import RecipeBox from './components/RecipeBox';
import AddModal from './components/AddModal';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      recipes:[

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

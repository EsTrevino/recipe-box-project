import React,{ Component } from 'react';

class AddModal extends Component{
  constructor(props){
    super(props)
    this.state={
      recipe: '',
      ingredients: '',
      ingredientsArr: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let ingredientsArrayUpdater = (ingredient) => {
      this.setState(prevState => ({
        ingredientsArr: [
          ...prevState.ingredientsArr,
          ingredient
        ]
      }))
    }
    let splitUserInput = this.state.ingredients.split(',');

    splitUserInput.map(ingredient => {
      return(
      ingredientsArrayUpdater(ingredient.trim())
    )
    });

    let recipeObject = {
      recipeName: this.state.recipe,
      ingredientList: this.state.ingredientsArr,
      idNumber: Math.floor((Math.random() * 100000000) + 1)
    }
    this.props.addRecipe(recipeObject);
  }
  render(){
    return(
        <div className="card">
          <div className="card-header">
           <span>Add Recipe</span> <i className="fas fa-utensils"></i>
         </div>
       <div className="card-body">
          <label>Recipe</label>
         <input value={this.state.recipe} onChange={event =>
             this.setState({recipe: event.target.value})} type="text"
             className="form-control"/>
         <label className="add-ingredients-label">Add Ingredients (Ex: Apples, Crutons, etc..)</label>
            <textarea value={this.state.ingredients} onChange={event =>
            this.setState({ingredients: event.target.value})}
            className="form-control"></textarea>
        </div>
           <div className="card-footer">
             <button className="close-button btn btn-outline-danger btn-sm">
               Close
                <i className="fas fa-times"></i>
           </button>
           <button onClick={this.handleSubmit.bind(this)}
               className="btn btn-outline-success btn-sm">
               Add Recipe
              <i className="fas fa-plus"></i>
          </button>
           </div>
          </div>
      );
    }
 }
 export default AddModal;

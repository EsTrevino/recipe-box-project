import React, {Component} from 'react';

class Edit extends Component {
  constructor(props){
    super(props);
    this.state={
      recipe: props.recipeForEdit.recipeName,
      ingredientList: props.recipeForEdit.ingredientList.join(),
      idNumber: props.recipeForEdit.idNumber
    }
  }

  render() {
    let updatedRecipeObject = {
      recipeName: this.state.recipe,
      ingredientList: this.state.ingredientList.split(','),
      idNumber: this.state.idNumber
    }
    return (
      <div className="card">
        <div className="card-header">
         <span>Edit Recipe</span> <i className="fas fa-utensils"></i>
       </div>
     <div className="card-body">
        <label>Recipe</label>
       <input value={this.state.recipe} onChange={event =>
           this.setState({recipe: event.target.value})} type="text"
           className="form-control"/>
       <label className="add-ingredients-label">Edit Ingredients (Ex: Apples, Crutons, etc..)</label>
          <textarea value={this.state.ingredientList} onChange={event =>
          this.setState({ingredientList: event.target.value})}
          className="form-control"></textarea>
      </div>
         <div className="card-footer">
           <button onClick={this.props.closeEdit} className="close-button btn btn-outline-danger btn-sm">
             Close
              <i className="fas fa-times"></i>
         </button>
         <button
             onClick={() => {this.props.updateRecipe(updatedRecipeObject)}}
             className="btn btn-outline-success btn-sm">
             Update
            <i className="fas fa-plus"></i>
        </button>
         </div>
        </div>
    )
  }
}

export default Edit;

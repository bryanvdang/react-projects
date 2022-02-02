import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from '../UI/LoadingIndicator'
// Line 25-29, set value to the current snapshot at array 0, on event, update our state to the amount of whatever the user types in
// as well as pass in the input state for the other value so we don't lose the current state/previous value when updating the object, otherwise we'll get an error
// Line 27 we create a method that returns the object body and we set the latest "committed" state to previous state, that we're setting with an updating function
// therefore line 31 guarantees we get the latest state at all times
// line 28 since we're using a closure we want to capture the event object value and update the title instead of using the same event that captured all the time

const IngredientForm = React.memo(props => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({title: enteredTitle, amount: enteredAmount}); //pointer to Ingredients.js
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredTitle} 
              onChange={event => {
                const newTitle = event.target.value;
                setEnteredTitle(newTitle)
              }} 
            /> 
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount} 
              onChange={event => {
                const newAmount = event.target.value;
                setEnteredAmount(newAmount)
              }} 
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.isLoading && <LoadingIndicator />}
            {/* {props.loading ? <LoadingIndicator /> : null} */}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;

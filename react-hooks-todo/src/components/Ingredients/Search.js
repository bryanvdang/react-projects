import React, { useState, useEffect, useRef} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

    //help to maintain HTTP side effects, useEffect get executed after every rerendered, not before, not simultaneous but after every render cycle
  useEffect(() => {
    const timer = setTimeout(()=> {
      //if old input 500ms ago, if the old value is equal to the current value
      if (enteredFilter === inputRef.current.value) {
        const query = 
        enteredFilter.length === 0
        ? '' 
        : `?orderBy="title"&equalTo="${enteredFilter}"`; //firebase syntax to query whats being entered
        fetch('https://react-hooks-update-77b76-default-rtdb.firebaseio.com/ingredients.json' + query)
        .then(response => response.json())
        .then (responseData => {
          const loadedIngredients = [];
          for (const key in responseData) {
            loadedIngredients.push({
              id: key,
              title: responseData[key].ingredient.title,
              amount: responseData[key].ingredient.amount
            });
          }
          onLoadIngredients(loadedIngredients); //function that runs after useEffect, feeds loadedIngredients to ingredients component
        });
      }
    }, 500 );
    //cleanup function to clear previous timer
    return () => {
      clearTimeout(timer);
    }
  }, [enteredFilter, onLoadIngredients, inputRef]); // run whenever enteredFilter changes or if the onLoadIngredients prop changes

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            ref={inputRef}
            type="text" 
            value={enteredFilter} 
            onChange={event => setEnteredFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;

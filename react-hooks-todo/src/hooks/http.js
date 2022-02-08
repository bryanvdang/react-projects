import { useReducer, useCallback } from 'react';

//we don't need to import react itself because we're not building a react component here.
//A hook is not a react component. We just want to use some react packages such as 'useReducer()'



//here we're using reducer to manager our state to reflect the UI, we're not actually sending the state. Only thing we want to display is loading icon or an error
const httpReducer = (currentHttpState, action) => {
    //what 3 scenarios do you get when running an HTTP request? Hence the switch cases
    switch (action.type) {
        case 'SEND':
            return { isLoading: true, error: null, data: null, extra: action.extra };
        case 'RESPONSE':
            return { ...currentHttpState, isLoading: false, data: action.responseData };
        case 'ERROR':
            return { loading: true, error: action.errorMessage };
        case 'CLEAR':
            return { ...currentHttpState, error: null };
        default:
            throw new Error('Should not get here');
    }
}


//define the reducer outside the function because we don't want it to
//rerun on every render cycle. 

//your hook will get called whenever the component where you're using the
//hook gets executed
const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, { 
        isLoading: false, 
        error: null,
        data: null,
        extra: null
     });
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState();
  
//only need headers for post, but doesn't hurt to put it in for a GET
    const sendRequest = useCallback((url, method, body, requestExtra) => {
        dispatchHttp({type: 'SEND', extra: requestExtra})
        fetch(
            url, 
            {
              method: method,
              body: body,
              headers: {
                  'Content-Type': 'application/json'
              }
            }
          ).then(response => {
              return response.json(); 
          })
          .then(responseData => {
            dispatchHttp({type: 'RESPONSE', responseData: responseData});
            // setIsLoading(false);
            // setUserIngredients(previousIngredient => {
            //   previousIngredient.filter(ingredient => ingredient.id !== ingredientId);
            // });
            // dispatch({ type: 'DELETE', id: ingredientId});
          }).catch(error => {
            dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong'});
            // setError(error.message);
            // setIsLoading(false);
          });
    }, []);

    // `https://react-hooks-update-77b76-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`


    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        requestExtra: httpState.extra
    };
};

export default useHttp;
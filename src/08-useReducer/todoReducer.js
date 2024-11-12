export const todoReducer = (initialState = [], action) => {
     switch (action.type) {
          case '[TODO] Add Todo':
               return [...initialState, action.payload];

          case '[TODO] Remove Todo':
               // Devolvemos todos menos el que tiene el id indicado en el payload
               return initialState.filter((todo) => todo.id !== action.payload);

          case '[TODO] Toggle Todo':
               // Devolvemos todos menos el que tiene el id indicado en el payload
               return initialState.map((todo) => {
                    if (todo.id === action.payload) {
                         return {
                              ...todo,
                              done: !todo.done
                         }
                    }

                    return todo;
               });

          default:
               return initialState;
     }
};

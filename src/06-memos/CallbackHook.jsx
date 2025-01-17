import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
     const [counter, setCounter] = useState(10);

     const incrementFather = useCallback(
          //Function being called here, is the one that will be called in ShowIncrement
          (value) => {
               setCounter((c) => c + value);
          },
          []
     );

     //  const increment = () => {
     //     setCounter(counter + 1);
     //  }
     return (
          <>
               <h1>useCallback Hook: {counter} </h1>
               <hr />

               <ShowIncrement increment={incrementFather} />
          </>
     );
};

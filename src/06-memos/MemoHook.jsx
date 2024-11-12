import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
     for (let i = 0; i < iterationNumber; i++) {
          console.log('Ahi vamos...');
     }

     return `${iterationNumber} iteraciones realizadas.`;
};

export const MemoHook = () => {
     const { counter, increment } = useCounter(10);
     const [show, setShow] = useState(true);

     // As long as the dependency counter changes, the method is not used. 
     const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

     return (
          <>
               <h1>
                    Counter: <small>{memorizedValue}</small>
               </h1>

               <hr />

               <button
                    className="btn btn-primary"
                    onClick={() => increment()}
               >
                    +1
               </button>

               <button
                    className="btn btn-outline-primary"
                    onClick={() => setShow(!show)}
               >
                    Show/Hide {JSON.stringify(show)}
               </button>
          </>
     );
};

import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: 123,
        name: 'Bruno Blanco',
        email: 'bruno@google.com'
    });

     return (
          <UserContext.Provider value={{ user, setUser }}>
               {children}
          </UserContext.Provider>
     );
};

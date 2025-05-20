// Import Modules
import {createContext, useEffect, useState} from "react";
import axios from "axios";

// User Context
export const UserContext = createContext({});

function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    const [ready, setReady] = useState(false);

    useEffect(() => {

        if (!user) {
            axios.get('/profile-data')
                .then(({data}) => {
                    setUser(data);
                    setReady(true);
                })
        }

    }, []);


    return (

        <div>
            <UserContext value={{ user, setUser, ready }}>
                {children}
            </UserContext>
        </div>

    )
}

export default UserContextProvider;


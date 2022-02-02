import react, {useState} from 'react';

export const AuthContext = react.createContext({
    isAuth: false, 
    login: () => {}
});

const AuthContextProvider = props => {
    //check if user is authenticated by using state and set default state to false
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loginHandler = () => {
        setIsAuthenticated(true);
    };

    //allows for anything to be passed into AuthContext
    return (
        <AuthContext.Provider value={{ login: loginHandler, isAuth: isAuthenticated }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider
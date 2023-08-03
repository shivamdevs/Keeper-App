import React from "react";
import UserContextType from "../types/UserContext";

const UserContext = React.createContext<UserContextType>({
    user: null,
    loading: true,
});

export default UserContext;

export const useUserContext = () => React.useContext(UserContext);
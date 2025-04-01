import { createContext } from "react";

export const userContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: ''
})
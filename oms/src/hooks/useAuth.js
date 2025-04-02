import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export default function useAuth() {
    const { accessToken } = useContext(userContext);

    const options = {
        headers: { 'X-Authorization': accessToken },
    };

    return { accessToken, options };
}

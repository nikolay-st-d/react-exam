import { useEffect, useState } from 'react';
import request from '../utils/request';
import useAuth from '../hooks/useAuth';

const baseURL = 'http://localhost:3030/data/notes';

export const useCreateNote = () => {
    const { options } = useAuth();

    const create = (note) => {
        return request.post(baseURL, note, options);
    };

    return { create };
};

export const useAllNotes = () => {

    const { options } = useAuth();

    const [notes, setNotes] = useState([]);

    console.log(notes);
    

    useEffect(() => {
        request.get(baseURL, null, options).then(setNotes);
    }, []);

    const refresh = () => {
        request.get(baseURL, null, options).then(setNotes);
    }

    return { notes, refresh };
};
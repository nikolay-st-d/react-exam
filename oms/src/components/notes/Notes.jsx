import { useParams } from 'react-router'; 
import { useAllNotes, useCreateNote } from '../../apiHooks/notesHooks';
import Note from './Note';
import { useState } from 'react';

export default function Notes() {
    const { orderId } = useParams();

    const { create } = useCreateNote();
    const { notes, refresh } = useAllNotes();

    const [noteValue, setNoteValue] = useState('');

    const filteredNotes =
        notes.length > 0
            ? notes.filter((nt) => nt.orderId == orderId).reverse()
            : null;

    const noteSumbitHandler = async (e) => {
        e.preventDefault();
        
        if (typeof noteValue !== 'string' || noteValue.trim().length < 10) {
            alert('Note must be a string and longer than 10 characters.');
            return;
        }

        const noteData = { note: noteValue, orderId };

        await create(noteData);
        refresh();

        // Clear the input field after submission
        setNoteValue('');
    };

    const handleChange = (e) => {
        setNoteValue(e.target.value); // Update the input field value on change
    };

    return (
        <section className='notes-container'>
            <form onSubmit={noteSumbitHandler}>
                <input 
                    required
                    type='text' 
                    id='note' 
                    name='note' 
                    value={noteValue} // Bind input value to state
                    onChange={handleChange} 
                />
                <button>Add Note</button>
            </form>
            <section className='notes-list'>
                {notes.length > 0
                    ? filteredNotes.map((nt) => <Note key={nt._id} {...nt} />)
                    : 'No Notes'}
            </section>
        </section>
    );
}

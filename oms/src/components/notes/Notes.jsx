import { useParams } from 'react-router';
import { useAllNotes, useCreateNote } from '../../apiHooks/notesHooks';
import Note from './Note';

export default function Notes() {
    const { orderId } = useParams();

    const { create } = useCreateNote();

    const { notes, refresh } = useAllNotes();

    const filteredNotes = notes.filter((nt) => nt.orderId == orderId).reverse();

    const noteSumbitHandler = async (formData) => {
        let noteData = Object.fromEntries(formData);
        noteData = { ...noteData, orderId };
        await create(noteData);
        refresh();
    };

    return (
        <section className='notes-container'>
            <form action={noteSumbitHandler}>
                <input required type='text' id='note' name='note' />
                <button>Add Note</button>
            </form>
            <section className='notes-list'>
                {filteredNotes.map((nt) => (
                    <Note key={nt._id} {...nt}/>
                ))}
            </section>
        </section>
    );
}

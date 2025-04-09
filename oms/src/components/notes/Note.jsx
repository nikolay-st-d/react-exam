export default function Note({ note, _createdOn }) {
    
    const formattedDate = new Date(_createdOn).toLocaleString();

    return (
        <div className='note'>
            <p>{note}</p>
            <div class="note-datetime">Created: {formattedDate}</div>
        </div>
    );
}

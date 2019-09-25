import React from 'react'
import ChallengeItem from "./ChallengeItem"

const ChallengesList = (props) => {
    return (
        <ul> 
            {props.challengesArray.map(challenge => 
                <ChallengeItem key={challenge.id} challenge={challenge} />)}
        </ul>
    )
 } 


export default ChallengesList


// const NoteList = (props) => {
//   return (
//     <ul>
//       {props.notesArray.map(note =>
//         <NoteItem key={note.id} note={note} selectNote={props.selectNote} filterNotes={props.filterNotes} />)}
//     </ul>
//   );
// }

// export default NoteList;

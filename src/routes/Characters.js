import React, { useState } from 'react'

// export class Characters extends Component {
//     render() {
//         return (
//             <>
//               <h1>All your favourite Characters</h1>  
//             </>`
//         )
//     }
// }
const Characters = () => {
    const [email, setEmail] = useState("")
    console.log(email);
    

    return (
        <>
            <input type="text" onChange={e => setEmail(e.target.value)} value={email} />     
        </>
    )
}


export default Characters

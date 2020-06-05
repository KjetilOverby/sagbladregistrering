import React, { useEffect, useState } from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

}))
const Playground = () => {
const classes = useStyles()
const [textInput, setTextInput] = useState('')
const [finalText, setFinalText] = useState(['we', 'wer'])

const inputHandler = (e) => {
   setTextInput(e.target.value);
   
   
}
const submitHandler = (e) => {
  e.preventDefault()
   setFinalText([...finalText, finalText])
}

return (
<div>
   <h1>Playground</h1>

   <TextField placeholder='Write here...' onChange={inputHandler} />
   <Button onClick={submitHandler} variant='contained'>Submit</Button>
  { finalText.map((text) => {
       return (
           <div>
               <h1>{text}</h1>
           </div>
       )
   })}
</div>
)
}

export default Playground
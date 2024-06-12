import  { useEffect } from 'react'
import Quill from 'quill';
import Box from '@mui/material/Box';
import 'quill/dist/quill.snow.css';


const EditorScreen = () => {
useEffect(() => {
    const quillserver = new Quill('#container', {
        theme: 'snow'
      });

 
}, [])


  return (
    <Box id="container">
  
</Box>
  )
}

export default EditorScreen
import { Container } from "@mui/material"
import { Nav } from "./components/Nav"
import {ImagesList} from "./components/imagesList/ImagesList"
import Upload from "./components/upload/Upload"
import AuthContext from "./context/AuthContext"
import Modal from "./components/Modal"

function App() {

  return (
    <Container maxWidth='lg' sx={{textAlign: 'center', mt: '3rem'}}>
      <AuthContext>
        <Modal/>
        <Nav/>
        <Upload/>
        <ImagesList/>
      </AuthContext>
    </Container>
  )
}

export default App

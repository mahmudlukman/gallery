import { Container } from "@mui/material"
import { Nav } from "./components/Nav"
import ImagesList from "./components/imagesList/ImagesList"
import Upload from "./components/upload/Upload"

function App() {

  return (
    <Container maxWidth='lg' sx={{textAlign: 'center', mt: '3rem'}}>
      <Nav/>
      <Upload/>
      <ImagesList/>
    </Container>
  )
}

export default App

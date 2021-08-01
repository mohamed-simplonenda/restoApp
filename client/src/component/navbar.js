
import{Navbar,Nav,Container,Form,FormControl,Button} from 'react-bootstrap'

function Menu(){
    return (
        <div >
 <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
        <img
          alt=""
          src="/img/footer-logo.png"
          width="100"
          height="50"
          className="d-inline-block align-top"
        />{' '}
     
      </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">dhashboard</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
export default Menu 
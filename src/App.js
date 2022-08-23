import './App.css';
import Header from './Components/Header';
import BuisnessAccount from './Components/BuisnessAccount/BuisnessAccount'; 
import ContactPerson from './Components/Contact Person/ContactPerson';
import Variable from './Components/Variable/Variable';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/navbar/Navbars';

function App() {
  return (
    <div className="App">
    
    <Header />
    <Navbars/>  
   <Container>
   <Row>
   <BuisnessAccount/>
   <Col><Variable/></Col>
    <Col><ContactPerson/></Col> 
    </Row>
   </Container>
    </div>
  );
}

export default App;

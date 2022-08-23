import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Variable.css';


function Variable() {
  return (
    <Container className='variable'>
      <Row>
      <Col md={4}><h3>Variable</h3></Col>
        <Col md={{ span: 4, offset: 4 }}><button>Add Variable</button></Col>
      </Row>
      <Row>
      <Col className='var-box' md={4}>Variable</Col>
        <Col className='var-box' md={{ span: 4, offset: 4 }}>value 1</Col>
      </Row>
      <Row>
      <Col className='var-box' md={4}>Variable</Col>
        <Col className='var-box' md={{ span: 4, offset: 4 }}>value 2</Col>
      </Row>
      <Row>
      <Col className='var-box' md={4}>Variable</Col>
        <Col className='var-box' md={{ span: 4, offset: 4 }}>value 3</Col>
      </Row>
      <Row>
      <Col className='var-box' md={4}>Variable</Col>
        <Col className='var-box' md={{ span: 4, offset: 4 }}>value 4</Col>
      </Row>
    </Container>
  );
}

export default Variable;
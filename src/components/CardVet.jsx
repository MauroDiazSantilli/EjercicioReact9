import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function CardVet({ cita, eliminarCita }) {
  return (
    <Card className="mb-4">
      <Card.Body className="bg-white">
        <Row>
          <Col>
            <div className="icono-doctor">
            <FontAwesomeIcon icon={faUserDoctor} bounce size='lg'/>
            </div>
            <Card.Title>{cita.nombre}</Card.Title>
            <Card.Text>Dueño: {cita.duenio}</Card.Text>
          </Col>
        </Row>
        <hr />
        <div className="cita-detalles">
          <Card.Text>Fecha: {cita.fecha}</Card.Text>
          <Card.Text>Hora: {cita.hora}</Card.Text>
          <Card.Text>Síntomas: {cita.sintomas}</Card.Text>
        </div>
        <Button variant="danger" onClick={() => eliminarCita(cita.id)}>
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardVet;
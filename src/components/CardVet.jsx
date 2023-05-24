import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function CardVet({ cita, eliminarCita }) {
  return (
    <Card className="cita-card" style={{ width: '300px'}}>
      <div className="circulo"></div>
      <Card.Body>
        <Card.Title>{cita.nombre}</Card.Title>
        <Card.Text>Dueño: {cita.duenio}</Card.Text>
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
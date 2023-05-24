import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormularioVet({ agregarCita }) {
  const [nombre, setNombre] = useState('');
  const [duenio, setDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombre.trim() === '' ||
      duenio.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      nombre,
      duenio,
      fecha,
      hora,
      sintomas,
    };

    agregarCita(nuevaCita);

    setNombre('');
    setDuenio('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre de mascota:</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre de dueño:</Form.Label>
        <Form.Control
          type="text"
          value={duenio}
          onChange={(e) => setDuenio(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha:</Form.Label>
        <Form.Control
          type="text"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hora:</Form.Label>
        <Form.Control
          type="text"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Síntomas:</Form.Label>
        <Form.Control
          type="text"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
          required
        />
      </Form.Group>
      <Button className= "mt-3" type="submit">Agregar nueva cita</Button>
    </Form>
  );
}

export default FormularioVet;
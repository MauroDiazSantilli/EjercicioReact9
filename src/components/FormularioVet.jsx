import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormularioVet({ agregarCita }) {
  const [nombre, setNombre] = useState('');
  const [duenio, setDuenio] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [nombreValid, setNombreValid] = useState(null);
  const [duenioValid, setDuenioValid] = useState(null);
  const [fechaValid, setFechaValid] = useState(null);
  const [horaValid, setHoraValid] = useState(null);
  const [sintomasValid, setSintomasValid] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombreValid ||
      !duenioValid ||
      !fechaValid ||
      !horaValid ||
      !sintomasValid
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

    setNombreValid(null);
    setDuenioValid(null);
    setFechaValid(null);
    setHoraValid(null);
    setSintomasValid(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nombre de mascota:</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setNombreValid(e.target.value.trim() !== '' ? true : null);
          }}
          required
          isValid={nombreValid}
          isInvalid={nombreValid === false}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nombre de dueño:</Form.Label>
        <Form.Control
          type="text"
          value={duenio}
          onChange={(e) => {
            setDuenio(e.target.value);
            setDuenioValid(e.target.value.trim() !== '' ? true : null);
          }}
          required
          isValid={duenioValid}
          isInvalid={duenioValid === false}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha:</Form.Label>
        <Form.Control
          type="text"
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
            setFechaValid(e.target.value.trim() !== '' ? true : null);
          }}
          required
          isValid={fechaValid}
          isInvalid={fechaValid === false}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Hora:</Form.Label>
        <Form.Control
          type="text"
          value={hora}
          onChange={(e) => {
            setHora(e.target.value);
            setHoraValid(e.target.value.trim() !== '' ? true : null);
          }}
          required
          isValid={horaValid}
          isInvalid={horaValid === false}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Síntomas:</Form.Label>
        <Form.Control
          type="text"
          value={sintomas}
          onChange={(e) => {
            setSintomas(e.target.value);
            setSintomasValid(e.target.value.trim() !== '' ? true : null);
          }}
          required
          isValid={sintomasValid}
          isInvalid={sintomasValid === false}
        />
      </Form.Group>
      <Button className="mt-3" type="submit">
        Agregar nueva cita
      </Button>
    </Form>
  );
}

export default FormularioVet;
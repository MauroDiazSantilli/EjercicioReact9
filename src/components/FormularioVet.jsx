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
  const letrasInput = /^[a-zA-Z\s]+$/
  const numerosInput = /^[0-9/:]+$/

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
      <Form.Group className='mb-3'>
        <Form.Label>Nombre de mascota:</Form.Label>
        <Form.Control
          type="text"
          placeholder='Ingrese el nombre de la mascota'
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setNombreValid(letrasInput.test(e.target.value.trim()))
          }}
          required
          isValid={nombreValid}
          isInvalid={nombreValid === false}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Nombre de dueño:</Form.Label>
        <Form.Control
          type="text"
          placeholder='Ingrese el nombre del dueño o dueña'
          value={duenio}
          onChange={(e) => {
            setDuenio(e.target.value);
            setDuenioValid(letrasInput.test(e.target.value.trim()))
          }}
          required
          isValid={duenioValid}
          isInvalid={duenioValid === false}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Fecha:</Form.Label>
        <Form.Control
          type="text"
          placeholder='dd/mm/aaaa'
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
            setFechaValid(numerosInput.test(e.target.value.trim()));
          }}
          required
          isValid={fechaValid}
          isInvalid={fechaValid === false}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Hora:</Form.Label>
        <Form.Control
          type="text"
          placeholder='hh:mm'
          value={hora}
          onChange={(e) => {
            setHora(e.target.value);
            setHoraValid(numerosInput.test(e.target.value.trim()));
          }}
          required
          isValid={horaValid}
          isInvalid={horaValid === false}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Síntomas:</Form.Label>
        <Form.Control
          type="text"
          placeholder='Describa los sintomas'
          value={sintomas}
          onChange={(e) => {
            setSintomas(e.target.value);
            setSintomasValid(letrasInput.test(e.target.value.trim()));
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
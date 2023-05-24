import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import FormularioVet from './FormularioVet';
import CardVet from './CardVet';

function AdministradorVet() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasStorage = JSON.parse(localStorage.getItem('citas'));
    if (citasStorage) {
      setCitas(citasStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    const citasActualizar = citas.filter((cita) => cita.id !== id);
    setCitas(citasActualizar);
  };

  return (
    <Container>
      <h3 className='text-center mt-3 mb-4'>Administrador pacientes de veterinaria</h3>
      <FormularioVet agregarCita={agregarCita} />
      <h2 className='text-center mt-3'>Citas registradas</h2>
      {citas.length === 0 ? (
        <p className='text-center mt-5'>No hay citas</p>
      ) : (
        citas.map((cita) => (
          <CardVet key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </Container>
  );
}

export default AdministradorVet;
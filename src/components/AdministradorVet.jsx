import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import FormularioVet from "./FormularioVet";
import CardVet from "./CardVet";

function AdministradorVet() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasStorage = JSON.parse(localStorage.getItem("citas"));
    if (citasStorage) {
      setCitas(citasStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
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
      <Container className="border border-success rounded-3 mt-3 p-4 bg-gradiente">
        <Row>
          <Col>
            <h3 className="text-center mt-3 mb-5">
              Administrador pacientes de veterinaria
            </h3>
            <FormularioVet agregarCita={agregarCita} />
          </Col>
        </Row>
      </Container>
      <Container className="border border-dark rounded-3 mt-3 mb-4 p-4 bg-gradiente">
        <Row>
          <Col>
            <h2 className="text-center mt-3 mb-5">Citas registradas</h2>
            <Row>
              {citas.length === 0 ? (
                <p className="text-center mt-5">No hay citas</p>
              ) : (
                citas.map((cita) => (
                  <Col sm={6} md={4} lg={3} key={cita.id}>
                    <CardVet cita={cita} eliminarCita={eliminarCita} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AdministradorVet;

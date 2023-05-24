import React, {useState, useEffect} from "react"
import FormularioVet from "./FormularioVet"
import CardVet from "./CardVet"

function AdministrarVet(){
    const [citas, setCitas] = useState([])

    useEffect(() => {
        const citasStorage = JSON.parse(localStorage.getItem("citas"))
        if(citasStorage) {
            setCitas(citasStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(citas))
    }, [citas])

    const agregarCita = (nuevaCita) => {
        setCitas([...citas, nuevaCita])
    }

    const eliminarCita = (id) => {
        const citasActualizar = citas.filter((cita) => cita.id != id)
        setCitas(citasActualizar)
    }

    return (
        <section>
            <h1>Administrador pacientes de veterinaria</h1>
            <FormularioVet agregarCita={agregarCita}/>
            <h2>Citas registradas</h2>
            {citas.length === 0 ? (<p>No hay citas</p>) : (citas.map((cita) => (
                <CitaCard key = {cita.id} cita={cita} eliminarCita={eliminarCita}/>
            )))}
        </section>
    )
}


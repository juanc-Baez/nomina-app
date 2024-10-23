import React, {useState} from "react";

const EmpleadoForm = () => {
    const [empleado, setEmpleado] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        fechaContratacion: '',
        salarioBase: '',
        horasExtra: '',
        deducciones: '',
        impuestos: '',
        bonificaciones: '',
        estado: 'ACTIVO',
        tipoContrato: 'PERMANENTE'
    
    
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEmpleado({ ...empleado, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/empleados/crear', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(empleado)
            })
            const data = await response.json();
            console.log('Empleado creado:', data);
        } catch (error) {
            console.error('Error al crear empleado: ', error)
        }
    }

    return (        
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" value={empleado.nombre} onChange={handleChange} required />
            <input type="text" name="apellido" placeholder="Apellido" value={empleado.apellido} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={empleado.email} onChange={handleChange} required />
            <input type="text" name="telefono" placeholder="Teléfono" value={empleado.telefono} onChange={handleChange} required />
            <input type="date" name="fechaContratacion" placeholder="Fecha de Contratación" value={empleado.fechaContratacion} onChange={handleChange} required />
            <input type="number" name="salarioBase" placeholder="Salario Base" value={empleado.salarioBase} onChange={handleChange} required />
            <input type="number" name="horasExtra" placeholder="Horas Extra" value={empleado.horasExtra} onChange={handleChange} />
            <input type="number" name="deducciones" placeholder="Deducciones" value={empleado.deducciones} onChange={handleChange} />
            <input type="number" name="impuestos" placeholder="Impuestos" value={empleado.impuestos} onChange={handleChange} />
            <input type="number" name="bonificaciones" placeholder="Bonificaciones" value={empleado.bonificaciones} onChange={handleChange} />
            <select name="estado" value={empleado.estado} onChange={handleChange}>
                <option value="ACTIVO">Activo</option>
                <option value="INACTIVO">Inactivo</option>
                <option value="SUSPENDIDO">Suspendido</option>
            </select>
            <select name="tipoContrato" value={empleado.tipoContrato} onChange={handleChange}>
                <option value="PERMANENTE">Permanente</option>
                <option value="TEMPORAL">Temporal</option>
                <option value="POR_HORAS">Por Horas</option>
            </select>
            <button type="submit">Crear Empleado</button>
        </form>
    );

};

export default EmpleadoForm;
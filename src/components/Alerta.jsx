import React from 'react';
import { Alert } from 'react-bootstrap';


const Alerta = ({ tipo }) => {
  let variant;

  switch (tipo) {
    case 'danger':
      variant = 'danger';
      break;
    case 'success':
      variant = 'success';
      break;
    case 'warning':
      variant = 'warning';
      break;
  }

  return (
    <Alert variant={variant}>
      {tipo === 'danger' && 'Las contraseñas no coinciden.'}
      {tipo === 'success' && '¡Las contraseñas coinciden! Registro exitoso.'}
      {tipo === 'warning' && 'Debes ingresar todos los datos.'}
    </Alert>
  );
};

export default Alerta;

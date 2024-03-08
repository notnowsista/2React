import React from 'react';
import SocialButton from './SocialButton';




const Registro = () => {
  return (
    <div className="registro">
      <h1>Crea una cuenta</h1>
      <SocialButton icon="twitter" />
      <SocialButton icon="facebook" />
      <SocialButton icon="instagram" />
      <p>O usa tu email para registrarte</p>
    </div>
  );
};

export default Registro;

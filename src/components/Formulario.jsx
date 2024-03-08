import {useState} from 'react'
import Alert from './Alerta';


const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [contrasenaDos, setContrasenaDos] = useState('');
    const [tipoAlerta, setTipoAlerta] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const validarDatos = (e) =>{
        e.preventDefault()
        if (!nombre || !email || !contrasena || !contrasenaDos) {
            setTipoAlerta('warning');
            setMostrarAlerta(true);
            return;
          };
        if (contrasena !== contrasenaDos) {
            setTipoAlerta('danger');
            setMostrarAlerta(true);
            return;
          };
    
          setTipoAlerta('success');
          setMostrarAlerta(true);
          setNombre('');
          setEmail('');
          setContrasena('');
          setContrasenaDos('');
    };

    return(
        <>
            <form className="forms" onSubmit={validarDatos} >
                <div className="form-group" >
                    <input className="form-control" type="text" name="nombre" placeholder="Nombre" 
                    onChange={(e) => setNombre(e.target.value)} 
                    value={nombre} />
                    <br />
                    <input className="form-control" type="email" name="email" placeholder="tuemail@ejemplo.cl" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    <br />
                    <input className="form-control" type="text" name="contrasena" placeholder="Contraseña" 
                    onChange={(e) => setContrasena(e.target.value)}
                    value={contrasena}/>
                    <br />
                    <input className="form-control" type="text" name="contrasena" placeholder="Confirma tu contraseña" 
                    onChange={(e) => setContrasenaDos(e.target.value)}
                    value={contrasenaDos}/>
                    <button className="btn btn-success  mt-3" type="submit">Registrarse</button>
                </div>
                <br />
                {mostrarAlerta && <Alert tipo={tipoAlerta} />}
            </form>
        </>
    )
};

export default Formulario;
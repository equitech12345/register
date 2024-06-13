import React, { memo } from 'react';

const RegisterForm = memo(() => {
    return (
        <div style={{border: '1px', borderColor: 'white'}}>
            <form action="" >
                <label >Nombre</label>
                <input type="text" name="name" id="name" />
                <label >Apellido</label>
                <input type="text" name="lastname" id="lastname" />
                <label >Email</label>
                <input type="email" name="email" id="email" />
                <label >Contraseña</label>
                <input type="password" name="password" id="password" />
                <label >Confirmar contraseña</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <br />
                <button type="submit" style={{ borderColor: 'white', background: 'blue', color: 'whitesmoke'}}>Registrar</button>
            </form>
        </div>
    );
});

export default RegisterForm;
import React, { memo } from 'react';

const RegisterForm = memo(() => {
    return (
        <container >
            <form action="" >
                <label >Nombre</label>
                <input type="text" name="name" id="name" />
                <label >Apellido</label>
                <input type="text" name="lastname" id="lastname" />
                <label >Email</label>
                <input type="email" name="email" id="email" />
                <label >Teléfono</label>
                <input type="tel" name="phone" id="phone" />
                <label >Contraseña</label>
                <input type="password" name="password" id="password" />
                <label >Confirmar contraseña</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <br />
                <button type="submit" style={{ borderColor: 'white', background: 'blue', color: 'whitesmoke'}}>Registrar</button>
            </form>
        </container>
    );
});

export default RegisterForm;
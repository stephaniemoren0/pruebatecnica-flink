import React, { useState } from 'react'
import Label from './componentsLabel/componentsLabel';
import Title from './componentsTitle/componentsTitle';
import {  Link } from "react-router-dom";
import Input from './componentsInput/componentsInput';
import axios from "axios";
import Alls from './componentsAll/componentsAll';





const Components = () =>{
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [logeado, setLogeado] = useState(false);
    const [user, setUser] = useState([]);



    const consumeLogin = async () => {
        const respuesta = await axios.post(url, {email: email , password: contraseña }).then(respuesta => {
            console.log (respuesta.data.user) // validacion de usuario
            setUser(respuesta.data.user)
            setLogeado(true)
            
        }).catch(error => {
            console.log(error)
            setLogeado(false)
        })
    }
    const url = "https://flink-web-test.herokuapp.com/api/v1/login"
    function handleChange(name, value){
        if (name === "email"){
            setEmail(value)
        }
        if (name === "contraseña"){
            setContraseña(value)
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        let account={ email, contraseña}
        if(account){
            consumeLogin()

            console.log("account:", account)
        }
    }
    console.log ("usuario:", email)
    console.log ("contraseña:", contraseña)
    return(
        <>
        { logeado ? <Alls user={user} /> :
        <div className="base">  
            <div className="container">  
                <div className="textoLogin justify-content-md-center">
                    <br />
                    <form>
                        <Title text="Inicia Sesion" />
                        <div className="form-group">
                            <Label text="Email" />
                            <Input 
                            attribute={{
                                id: "email",
                                name: "email",
                                type: "text",
                                placeholder:"Ingresa tu Email"
                            }}
                            handleChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                        <Label text="Contraseña" />
                        <Input 
                            attribute={{
                                id: "contraseña",
                                name: "contraseña",
                                type: "password",
                                placeholder:"Ingresa tu contraseña"
                            }}
                            handleChange={handleChange}
                            />
                        </div>
                        <div className="form-group form-check">
                        </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Entrar</button>
                            <Link to="/registro">Registro</Link>
                    </form>
                    <br />
                </div>
            </div>
        </div> }
        </>
    )
};



export default Components;
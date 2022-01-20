import React, { useState} from 'react'
import Title from '../componentsTitle/componentsTitle';
import LabelCustom from '../componentsLabel/componentsLabel';
import InputCustom from '../componentsInput/componentsInput';
import {  Link, useNavigate } from "react-router-dom";
import './singUp.css';
import axios from "axios";
import {FormGroup, Label, Input} from "reactstrap";



const Singup = () =>{
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [preferencia, setPreferencia] = useState("H");
    const [genero, setGenero] = useState("H");

    const navegar = useNavigate()
    const consumeRegistre = async () => {
        let data = {name: nombre, lastName: apellido ,email: correo , password: contraseña, age: edad, gender: genero, preferredGender: preferencia}
        console.log(data)
        
        const respuesta = await axios.post(url, data).then(respuesta => {
            navegar("/", {replace:true})
            console.log ("respuesta:",respuesta) // validacion de usuario
            
        }).catch(error => {
        })
    }
    const url = "https://flink-web-test.herokuapp.com/api/v1/register"


    function handleChange(name, value){
        if (name === "usuario"){
            setNombre(value)
        }
        if (name === "apellido"){
            setApellido(value)
        }
        if (name === "correo"){
            setCorreo(value)
        }
        if (name === "contraseña"){
            setContraseña(value)
        }
        if (name === "edad"){
            setEdad(value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        let newAccount={ nombre, apellido ,correo, contraseña, edad}
        if(newAccount){
            consumeRegistre()

        }
        
    }

    const cambioPreferencia = e => {
        setPreferencia(e.target.value)
    }

    const cambioGenero = e =>{
        setGenero(e.target.value)
    }

    console.log ("usuario:", nombre)
    console.log ("contraseña:", contraseña)

    return(
        
        <div className="color">
        <div className="base animate__animated animate__fadeInDown container-fluid">
            <div className="col container-fluid container">
                <Title text="Registrate" />
                <LabelCustom text="Nombre" />
                <InputCustom 
                    attribute={{
                    id: "usuario",
                    name: "usuario",
                    type: "text",
                    placeholder:"Ingresa tu Nombre"
                    }}
                    className='regular-style'
                    handleChange={handleChange}
                />
                <LabelCustom text="Apellido" />
                <InputCustom
                    attribute={{
                    id: "Apellido",
                    name: "apellido",
                    type: "text",
                    placeholder:"Ingresa tu Apellido"
                    }}
                    handleChange={handleChange}
                />
                <LabelCustom text="Correo" />
                <InputCustom 
                    attribute={{
                    id: "Correo",
                    name: "correo",
                    type: "email",
                    placeholder:"Ingresa tu correo"
                    }}
                    handleChange={handleChange}
                />
                <LabelCustom text="Contraseña" />
                <InputCustom 
                    attribute={{
                    id: "contraseña",
                    name: "contraseña",
                    type: "password",
                    placeholder:"Ingresa tu Contraseña"
                    }}
                    handleChange={handleChange}
                />
                <LabelCustom text="Edad" />
                <InputCustom 
                    attribute={{
                    id: "edad",
                    name: "edad",
                    type: "password",
                    placeholder:"Ingresa tu edad"
                    }}
                    handleChange={handleChange}
                />
                <br />
                <div>
                <FormGroup>
                <LabelCustom text="Preferencia de Genero"/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio1" value="H" 
                    checked={preferencia == "H" ? true : false}
                    onChange={cambioPreferencia}
                    />
                    <Label class="form-check-label" for="inlineRadio2">Hombre</Label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio2" value="M" 
                    checked={preferencia == "M" ? true : false}
                    onChange={cambioPreferencia}
                    />
                    <Label class="form-check-label" for="inlineRadio2">Mujer</Label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radio3" value="H/M" 
                    checked={preferencia == "H/M" ? true : false}
                    onChange={cambioPreferencia}
                    />
                    <Label class="form-check-label" for="inlineRadio2">Otro</Label>
                    
                </div>
                </FormGroup>
                </div>
                <div>
                
                <FormGroup>
                <LabelCustom text="Genero"/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="radiogenero1" value="H" 
                    checked={genero == "H" ? true : false}
                    onChange={cambioGenero}
                    />
                    <Label class="form-check-label" for="inlineRadio2">Hombre</Label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="radiogenero2" value="M" 
                    checked={genero == "M" ? true : false}
                    onChange={cambioGenero}
                    />
                    <Label class="form-check-label" for="inlineRadio2">Mujer</Label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="radiogenero3" value="NB" 
                    checked={genero == "NB" ? true : false}
                    onChange={cambioGenero}
                    />
                    <Label class="form-check-label" for="inlineRadio2">No binario</Label>
                    
                </div>
                </FormGroup>
                </div>
                
                <button onClick={handleSubmit} type="submit" className="btn btn-primary entrar">Registrar</button>
                <Link className="btn entrar btn-primary" to="/">Inicio de Sesion</Link>
                <br />
            </div>
            
            <br />
        </div>
        </div>
    )
};

export default Singup;
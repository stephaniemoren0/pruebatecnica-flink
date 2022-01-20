import React, {useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import './componentsAll.css';
import axios from "axios";
import Tarjetas from "react-tinder-card"
import { Navbar, NavbarBrand, NavItem, NavLink, } from 'reactstrap';
import matchesC from "../../vectors/icono3.png"
import salir from "../../vectors/icono2.png"
import logoT from "../../vectors/icono1.png"

const Alls = (  ) => {
    const navegar = useNavigate()
    const [user, setUser] = useState([]);
    const [lista, setLista] = useState([]);
    var swiped = false;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))        
        setUser(user)
        obtenerMatch()
        console.log("user:",user)
    }, [])
    const obtenerMatch = async () => {
        let url = genero(user.preferredGender)
        const data = await axios.get(url).then(respuesta => {
            console.log (respuesta.data) // validacion de usuario
            let personas = dataGenero(user.preferredGender, respuesta.data)
            console.log("listas:", personas)
            setLista( personas )
            
        }).catch(error => {
            console.log(error)
        })
    }
    function dataGenero(preferredGender, data){
        if(preferredGender === "H"){
            return data.husbandos
        }
        else if(preferredGender === "M"){
            return data.waifus
        }
        else{
            return data.allWaifusAndHusbandos
        }
    }
    function onSwipe (direction) {
        
        let direccion = '' + direction
        console.log(direccion== "left")
        swiped = direccion == "right"
    }

    
    function consumeMatch (name, image, age) {
        let data = {email : user.email, matchName: name, matchImage: image, matchAge: age }
        let url = "https://flink-web-test.herokuapp.com/api/v1/match"
        axios.post(url, data).then(respuesta => {
            console.log (respuesta) // validacion de usuario
            
        }).catch(error => {
            console.log(error)
        })
    }
    const logout=()=>{
        localStorage.clear()
        navegar("/", {replace:true})
    }
    const onCardLeftScreen = (name, image, age) => {
        
        console.log("direccion", swiped)
        if(swiped){
            consumeMatch(name, image, age)
        }
        console.log(name + ' left the screen')
    }
    function genero(preferredGender){
        
        if(preferredGender === "H"){
            return "https://flink-web-test.herokuapp.com/api/v1/getHusbandos"
        }
        else if(preferredGender === "M"){
            return "https://flink-web-test.herokuapp.com/api/v1/getWaifus"
        }
        else{
            return "https://flink-web-test.herokuapp.com/api/v1/getAllWaifusAndHusbandos"
        }
    }
    return(
        <div>
        <Navbar className="colorNav" >
        <NavbarBrand><img className="logo" src={logoT}/></NavbarBrand>
        <NavLink  href={`/match/${user.email}` }><img className="logo" src={matchesC}/></NavLink>
        <NavLink  onClick={logout}  ><img className="logo" src={salir}/></NavLink>
        </Navbar>
        <div className="contenedorPokemon container-fluid">
            <div className="contenedorTarjeta">
            {lista.map(pokemon => (
                <Tarjetas 
                className='swipe'
                key={pokemon.name}
                preventSwipe={["up", "down"]}
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen(pokemon.name, pokemon.image, pokemon.age)}
                >
                    <div
                    className='tarjeta'
                    style={{backgroundImage:`url(${pokemon.image})`}}
                    >
                        <h2>{pokemon.name}, {pokemon.age}, {pokemon.gender}</h2>
                        

                    </div>
                </Tarjetas>
            )) }
            </div>
        </div>
        </div>
    )
};

export default Alls;
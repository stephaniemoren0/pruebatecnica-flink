import React, {useEffect, useState} from 'react'
import './componentsAll.css';
import axios from "axios";
import Genero from './componentsGenero/componentsGenero';
import Tarjetas from "react-tinder-card"


const Alls = ( {user} ) => {
    const [loginUser, setLoginuser] = useState([]);
    const [lista, setLista] = useState([]);
    const [swiped, setSwiped] = useState([]);
    const [nombreSeleccionado, setNombreSeleccionado] = useState("");
    const [imagenSeleccionado, setImagenSeleccionado] = useState("");
    const [ageSeleccionado, setAgeSeleccionado] = useState("");
    useEffect(() => {
        setLoginuser(user)
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
    const onSwipe = (direction) => {
        setSwiped (direction + "")
        console.log('You swiped: ' + direction)
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
    
    const onCardLeftScreen = (name, image, age) => {
        setNombreSeleccionado(name)
        setImagenSeleccionado(image)
        setAgeSeleccionado(age)
        consumeMatch(name, image, age)
        console.log("direccion", swiped)
        if(swiped === "right"){
            
            consumeMatch()
        }
        console.log(name + ' left the screen')
    }
    function genero(preferredGender){
        console.log(loginUser)
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
        <div className="contenedorPokemon">
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
    )
};

export default Alls;
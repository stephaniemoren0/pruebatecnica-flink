import React, { useState, useEffect} from 'react'
import './componentsMatch.css';
import Tarjetas from "react-tinder-card"
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { Navbar, NavbarBrand, NavItem, NavLink, } from 'reactstrap';
import salir from "../../vectors/icono2.png"
import logoT from "../../vectors/icono1.png"



const ContenedorMatch = () => {
    const navegar = useNavigate()
    const [lista, setLista] = useState([]);
    const {email} = useParams();
    
    useEffect(() => {
        obtenerMatch()
        
    }, [])

    const logout=()=>{
        localStorage.clear()
        navegar("/", {replace:true})
    }

    const obtenerMatch = async () => {
        let url = "https://flink-web-test.herokuapp.com/api/v1/getMatchesByEmail"
        const data = await axios.post(url, {email:email}).then(respuesta => {
            let personas =   respuesta.data.matches
            console.log("listas:", personas)
            setLista( personas )
            
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div>
            <Navbar className="colorNav container-fluid" >
        
        <Link  to="/all"><img className="logo" src={logoT}/></Link>
        <NavLink  onClick={logout}  ><img className="logo" src={salir}/></NavLink>
        </Navbar>
            <div>
            <div className="container-fluid  row row-cols-1 col-auto row-cols-sm-1 row-cols-lg-2 row-cols-xl-3 g-2" >
            {lista.map(pokemon => (
                <Tarjetas 
                className="col col-auto contenedorMatch img-fluid"
                key={pokemon.matchesName}
                >
                    <div
                    className='tarjetaMatch'
                    style={{backgroundImage:`url(${pokemon.matchImage})`}}
                    >
                        <h2>{pokemon.matchName}</h2>
                        

                    </div>
                </Tarjetas>
            )) }
            </div>
        </div>
        </div>
    )
};

export default ContenedorMatch;
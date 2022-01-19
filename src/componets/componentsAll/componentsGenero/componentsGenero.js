import React, {useEffect} from 'react'
import Label from '../../componentsLabel/componentsLabel'
import Title from '../../componentsTitle/componentsTitle'



const Genero = ({pokemon}) => {
    useEffect(() => {
        console.log("pokemon:", pokemon)
    }, [])
    return(
        <section className="mb-5 container">
            <br />
    <div className="row">
        <div className="col-md-6 mb-4 mb-md-0"><img src={pokemon.image} alt="cosmetico" className="container trans imagenContenedor estiloImagen"/>
        </div>
            <div className="col-md-6">
            <Title text={pokemon.name} />
            
                <div className="table-responsive">
                    <table className="table table-sm table-borderless mb-0">
                    <tbody>
                        <tr>
                        <th className="pl-0 w-25" scope="row"><Label text="Edad" /></th>
                        <Label text={pokemon.age} />
                        </tr>
                        <tr>
                        <th className="pl-0 w-25" scope="row"><Label text="Genero" /></th>
                        <Label className="col pl-0 w-25" text={pokemon.gender} />
                        </tr>
                        <tr>
                        <th className="pl-0 w-25" scope="row">
                            <button className="buttonLike">like</button>
                            <button className="buttonDislike">like</button>
                        </th>
                        </tr>
                    </tbody>
                    </table>
                </div>
                
            </div>
            
    </div>
    <br />
</section>
)
}

export default Genero

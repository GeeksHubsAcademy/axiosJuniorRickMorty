
import React from "react";

//importo CSS 

import './Home.css';

//importo axios

import axios from 'axios';

class Home extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            personajesRyM : []
        }
        
    };

    async componentDidMount(){
        //cargamos los personajes de la API
        try {
            const resultados = await axios.get('https://rickandmortyapi.com/api/character');
            console.log(resultados.data.results);
            this.setState({personajesRyM: resultados.data.results})
        }catch (err){
            console.log(err);
        }
        
        
    }

    muestraResultados(){

        if(this.state.personajesRyM[0]){

            //aqui procederemos realizar el mapeo y muestro de los datos
            return(
                this.state.personajesRyM.map(personaje => {
                    return(
                        <div className="personaje" key={personaje.id}>
                            {personaje.name}
                            <img onClick={()=>this.clickElementoSeleccionado(personaje)} alt={personaje.name} src={personaje.image}></img>
                            {personaje.species}
                        </div>
                    )
                })
            )

        }else{
            return(
                <div>CARGANDO LOS DATOS.</div>
                )
        }
        
    }

    clickElementoSeleccionado(personaje){
        console.log(personaje);
    }

    // async clickEliminarCita(cita){
    //     //llamada a axios para borrar

    //     let variableDelBody = {
    //          id : cita.id
    //      }
    //     try {

    //         const respuesta = await axios.delete('urldelendpointdeborradodelback/', variableDelBody);
    //     }catch{

    //     }

    //     //comprobamos si la respuesta del backend es afirmativa, y podemos 
    //     //mostrar un mensaje de borrado exitoso y recargar la página, o 
    //     //recargar la página directamente.
    // }
    
    render() {
        return(
            <div>
                {this.muestraResultados()}
            </div>
        );
    };
    
    
};


export default Home;
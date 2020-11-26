
import React from "react";
// import { NavLink, withRouter } from "react-router-dom";

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
        
        this.props.history.push('/Characterdetail');
        localStorage.setItem('datosPersonaje', JSON.stringify(personaje));
    }

    
    
    render() {
        return(
            <div>
                {this.muestraResultados()}
            </div>
        );
    };
    
    
};


export default Home;
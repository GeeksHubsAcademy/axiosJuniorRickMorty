
import React from "react";


class Characterdetail extends React.Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            personajeEscogido : {}
        }
    };

    componentDidMount(){
        let resultado = JSON.parse(localStorage.getItem('datosPersonaje'));

        this.setState({personajeEscogido : resultado});

    }

    goBack(){
        this.props.history.push('/');
    }

    muestraDatos(){
        if(this.state.personajeEscogido?.id){
            return(
                <div>
                    <div>Nombre: {this.state.personajeEscogido.name}</div>
                    <div>Species: {this.state.personajeEscogido.species}</div>
                    <div>Status: {this.state.personajeEscogido.status}</div>
                    <div>Gender: {this.state.personajeEscogido.gender}</div>
                    <div><img src={this.state.personajeEscogido.image}></img></div>
                </div>
            )
        }else{
            return(
                <div>CARGANDO LOS DATOS DEL PERSONAJE</div>
            )
        }
        // console.log(this.state.personajeEscogido.id);
    }
    
    render() {
        return(
            <div>
                {this.muestraDatos()}
                <button onClick={()=>this.goBack()}>VOLVER A VISTA DE PERSONAJES</button>
            </div>
        );
    };
    
    
};


export default Characterdetail;
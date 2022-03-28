import { render } from '@testing-library/react';
import React, {Component} from 'react';
import '../styles/Admin.css'


class Admin extends Component{

    constructor( props ) {

        super( props )

        this.data = {
            title: '',
            date: '', 
            text: ''
        }

    }

    cptTitle = (event) => {

            this.data['title'] = event.target.value
        
    }

    cptDate = (event) => {

            this.date['date'] = event.target.value

    }

    cptText = (event) => {

        this.data['text'] = event.target.value
    
}

    saveData = event => {
        
       alert(this.data['title'] + this.data['date'] + this.data['text']);

    }
    
    render() {

        return (
        
            <div className='MainPart'>

                <div className='CenterBox'>

                    <h1> Ajouter une nouvelle actualité : </h1>

                    <form onSubmit={ this.saveData }>

                        <div className='boite'> 
                            <label for="name">Titre</label> 

                            <input type="text" 
                                   onChange={this.cptTitle} 
                                   className='textInput' 
                            />
                            
                        </div>

                        <div className='boite'>
                            <label for="name">Date</label>
                            <input className='textInput' 
                                   type="datetime-local" 
                                   onChange={this.cptDate} />
                        </div>

                        <div className='boite'>

                            <label for="name">Message</label>

                            <textarea cols="50" 
                                      rows="20" 
                                      onChange={this.cptText} >
                            </textarea>

                        </div>

                        <div className='boite'>
                            <button type = 'submit' > Submit </button>
                        </div>

                    </form>

                </div>

            </div>

        )
    }

}


export default Admin
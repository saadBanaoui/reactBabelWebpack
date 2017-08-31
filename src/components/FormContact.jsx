import React from 'react';

export default class ContactForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            value: 'email',
            name : 'Saad EL banaoui'
        }
    }
   
    render() {
        return (
            <form action="">
                <label htmlFor="">Name:</label>
                <input type="text" value={this.state.value}/>

            </form>
        )
    }

} 
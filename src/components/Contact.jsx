import React from 'react';
import FormContact from './FormContact.jsx';

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: true,
            question: true,
            submitted: null
        }
    }
    render() {
        return(
            <div>
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quibusdam repellendus expedita, minus fuga obcaecati reiciendis fugit eius cumque, veritatis voluptates reprehenderit perspiciatis consectetur tempore aspernatur a similique alias iure?
                </p>
                <FormContact />
            </div>
        )
    }
}
import React from 'react';
import { Link } from "react-router-dom";


import '../App.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';


export default class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            memberNumber: ""
        }
    }

    postRequest = (e) => {
        e.preventDefault();

        let newUser = {
            name: e.target[0].value,
            memberNumber: e.target[1].value
        }

        if (newUser.name === "" || newUser.memberNumber === "") {
            this.setState({ error: "Please ensure you have filled out all fields" })
        } else {
            this.setState({ error: "" })
        }

        this.props.addAccount(newUser);

        document.getElementById("linkToMembers").click();

    };

    render() {
        return (
            <div>
                <p>Welcome to Poke</p><br />
                <p>Enter your name and member number to become a member</p>

                <Form inline onSubmit={this.postRequest} >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="name" className="mr-sm-2">Name: </Label>
                        <Input type="text" name="name" id="accountName" placeholder="Enter Name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="memberNumber" className="mr-sm-2">Member Number: </Label>
                        <Input type="text" name="memberNumber" id="accountmemberNumber" placeholder="Enter Member number" />
                    </FormGroup>
                    <Button>Join</Button>
                    <Link to="/members" id="linkToMembers"></Link>
                </ Form>
                <p style={{ color: 'red' }}>{this.state.error}</p>
            </div>
        )
    };
}
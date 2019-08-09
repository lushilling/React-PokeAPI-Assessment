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


export default class Members extends React.Component {

    constructor() {
        super();
        this.state = {
            memberNumber: "",
            pokeName: "",
            pokeNumber:""

        }
    }

    postRequest = (e) => {
        e.preventDefault();

        // let newUser = {
        //     name: e.target[0].value,
        //     memberNumber: e.target[1].value
        // }

        // if (newUser.name === "" || newUser.memberNumber === "") {
        //     this.setState({ error: "Please ensure you have filled out all fields" })
        // } else {
        //     this.setState({ error: "" })
        // }

        // this.props.addAccount(newUser);

        // document.getElementById("linkToMembers").click();

    };

    render() {
        return (
            <div>
                <p>Welcome to the Poke Members area</p><br />
                <p>To search enter your member number and a pokeName/pokeNumber</p>

                <Form inline onSubmit={this.postRequest} >
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="memberNumber" className="mr-sm-2">Member Number: </Label>
                        <Input type="text" name="memberNumber" id="accountMemberNumber" placeholder="Enter Member Number" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="pokeName" className="mr-sm-2">Poke Name: </Label>
                        <Input type="text" name="pokeName" id="pokeName" placeholder="Enter Poke Name" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="pokeNumber" className="mr-sm-2">Poke Number: </Label>
                        <Input type="text" name="pokeNumber" id="pokeNumber" placeholder="Enter Poke number" />
                    </FormGroup>
                    <Button>Join</Button>
                    <Link to="/members" id="linkToMembers"></Link>
                </ Form>
                <p style={{ color: 'red' }}>{this.state.error}</p>
            </div>
        )
    };
}
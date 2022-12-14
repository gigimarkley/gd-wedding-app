import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {pageTitle,rsvpPageSubtitles, pageContainerNoHeight} from '../styling'

function RSVP() {

    return (
        <div style={pageContainerNoHeight}>
            <h1 style={pageTitle}>RSVP</h1>
            <Form style={{paddingLeft:'10vw',paddingRight:'10vw', paddingBottom:'10vw'}}>
                <FormGroup>
                    <Label style={rsvpPageSubtitles} for="exampleSelect">Will you be able to make it?</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Yes</option>
                        <option>No</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label style={rsvpPageSubtitles} for="exampleText">Names</Label>
                    <Input type="text" name="text" id="exampleText" />
                </FormGroup>

{/* Only show the questions below if they are attending */}
                <FormGroup>
                    <Label style={rsvpPageSubtitles} for="exampleSelect">How many of you will be attending?</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label  style={rsvpPageSubtitles} for="exampleSelectMulti">Allergies/Dietary Restrictions</Label>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                        <option>Soy</option>
                        <option>Peanuts</option>
                        <option>Milk</option>
                        <option>Wheat</option>
                        <option>Eggs</option>
                        <option>Fish</option>
                        <option>Shellfish</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label style={rsvpPageSubtitles} for="exampleText">Other</Label>
                    <Input type="text" name="text" id="exampleText" />
                </FormGroup>

            <Button>Submit</Button>
        </Form>
      </div>
    );
}

export default RSVP;
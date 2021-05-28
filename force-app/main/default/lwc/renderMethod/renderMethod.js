import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './renderMethod.html';

export default class RenderMethod extends LightningElement {
    templateValue
    //This is an example
    render() {
        return this.templateValue === "Signin" ? signinTemplate :
                this.templateValue === "Signup" ? signupTemplate :
                    renderTemplate
    }

    handleClick(event) {
        this.templateValue = event.target.label
    }

}
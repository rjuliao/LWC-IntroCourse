import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    //local properties
    name            //undefined
    age = 22
    fullname = "Salesforce Colombia"
    iitle = 'aura'

    //methods
    changeHandler(event) {
        //logic 
        this.title = event.target.value
    }

    @track address = {
        city : 'Bogotá',
        postCode : 111015,
        country : 'Colombia' 
    }

    trackHandler(event){
        this.address.city = event.target.value
        //another way to update without using track
        //this.address = {...this.address, "city": event.target.value}
    }
     
}
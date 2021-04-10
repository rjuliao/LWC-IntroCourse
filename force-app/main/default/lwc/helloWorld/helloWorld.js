import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    /****Data binding***/
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


    /***Understanding @track method***/
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
     

    /***Getter methods***/
    users =  ['Paula', 'Raúl', 'Carlos']
    num1 = 10
    num2 = 12

    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get multiply(){
        return this.num1 * this.num2
    }
}
import { LightningElement, wire } from 'lwc';
import SAMPLELMS from "@salesforce/messageChannel/SampleMessageChannel__c"
import {MessageContext, publish} from 'lightning/messageService'

export default class LmsCmptA extends LightningElement {
    inputValue

    @wire(MessageContext)
    context 

    inputHandler(event){
        this.inputValue = event.target.value;
    }

    publishMessage(){
        //create an object in which we're gonna save the values to publish
        const message = {
            lmsData : {
                value :this.inputValue
            }
        }
        console.log('MESSAGE IN CMPT A:',message);
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLELMS, message)
    }

}
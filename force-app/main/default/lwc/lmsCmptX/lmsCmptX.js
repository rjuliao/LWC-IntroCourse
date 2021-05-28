import { LightningElement, wire } from 'lwc';
import SAMPLELMS from "@salesforce/messageChannel/SampleMessageChannel__c"
import {APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe} from 'lightning/messageService'

export default class LmsCmptX extends LightningElement {
    recieveMessage
    subsInfo

    @wire(MessageContext)
    context 

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subsInfo = subscribe(this.context, SAMPLELMS, (message)=>{
            this.handleMessage(message)
        }, {scope:APPLICATION_SCOPE})
        
    }

    handleMessage(message){
        console.log('MESSAGE IN CMPT X:', message.lmsData.value);
        this.recieveMessage = message.lmsData.value != undefined ? message.lmsData.value :'NO MESSAGE PUBISHED';
    }

    unSubscribeHandle(){
        unsubscribe(this.subsInfo)
        this.subsInfo = null
    }

}
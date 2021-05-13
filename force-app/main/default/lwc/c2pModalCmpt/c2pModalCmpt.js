import { LightningElement } from 'lwc';

export default class C2pModalCmpt extends LightningElement {

    //Simple event
    closeHandler(){
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(myEvent)
    }
}
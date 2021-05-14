import { LightningElement } from 'lwc';

export default class C2pModalCmpt extends LightningElement {

    //Simple event
    closeHandler(){
        const myEvent = new CustomEvent('close',{
            detail : {
                msg : "This is the new message pvteria",
                n : 2021
            }
        })
        this.dispatchEvent(myEvent)
    }
}
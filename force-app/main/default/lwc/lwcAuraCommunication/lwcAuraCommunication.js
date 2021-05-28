import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    @api title

    callAura(){
        const event = new CustomEvent("sendsmg",{
            detail:{
                "msg":"hello from you lwc friend"
            }
        })
        this.dispatchEvent(event)
    }
}
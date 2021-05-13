import { LightningElement } from 'lwc';

export default class C2pParentCmpt extends LightningElement {
    showModal = false;
    msg
    n
    
    clickHandler(){
        this.showModal = true;
    }

    closeHanlder(event){
        this.msg = event.detail.msg;
        this.n = event.detail.n;
        this.showModal = false
    }
}
import { LightningElement } from 'lwc';

export default class C2pParentCmpt extends LightningElement {
    showModal = false;

    clickHandler(){
        this.showModal = true;
    }

    closeHanlder(){
        this.showModal = false
    }
}
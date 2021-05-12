import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log('Child constructor called');
    }

    connectedCallback(){
        console.log("Child connnectedCallbacl called");
    }

    renderedCallback(){
        console.log("Child renderedCallback called");
    }
    disconnectedCallback(){
        alert('HELP MEEEE!!!!')
    }
}
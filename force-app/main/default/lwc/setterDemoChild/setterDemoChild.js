import {api,  LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail

    @api
    get detailObj(){
        return this.userDetail
    } 
    set detailObj(data){
        let newAge = data.age*2
        this.userDetail = {...data, age:newAge, "location":"Baq"}
    }
}
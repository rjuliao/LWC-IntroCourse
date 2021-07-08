import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class CreateRecordDemo extends LightningElement {
    formFields = {}

    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name] = value
    }

    createContact(){
        const recordInput = {apiName : CONTACT_OBJECT.objectApiName, fields : this.formFields}
        createRecord(recordInput)
        .then(res =>{
            console.log(res);
            this.showToast("Record successfully created", `Contact created with id ${res.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields = {}
        })
        .catch(err=>{
            console.error(err);
            this.showToast("Error creating Record", error.body.message, 'error')
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant : variant || 'success'
        }))
    }
}
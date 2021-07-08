import { getRecordUi } from 'lightning/uiRecordApi';
import { api, LightningElement, wire } from 'lwc';

export default class GetRecordUiDemo extends LightningElement {
    formFields = [
        {"fieldName" : "AccountNumber", "label" : "AccountNumber"},
        {"fieldName" : "AnnualRenevue", "label" : "AnnualRenevue"},
        {"fieldName" : "Phone", "label" : "Phone"},
        {"fieldName" : "Name", "label" : "Name"},
    ]

    @api recordId
    @wire(getRecordUi, {recordIds : '$recordId', layoutTypes : 'Full', modes : 'View'})
    accountRecordUiHandler({data, error}){
        if (data) {
            console.log('log',data);
            this.formFields = this.formFields.map(item =>{
                return {...item, value : data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if (error) {
            console.error(error);
        }
    }
}
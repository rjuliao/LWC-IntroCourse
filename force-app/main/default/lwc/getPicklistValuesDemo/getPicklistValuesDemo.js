import { LightningElement, wire } from 'lwc';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT from '@salesforce/schema/Account'
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = ''
    industryOptions = []

    @wire(getObjectInfo, {objectApiName : ACCOUNT})
    objectInfo

    @wire(getPicklistValues, {recordTypeId : '$objectInfo.data.defaultRecordTypeId' , fieldApiName : INDUSTRY_FIELD})
    industryPicklistHandler({data, error}){
        if(data){
            console.log(data);
            this.industryOptions = [...this.generatePicklist(data)]
        }
        if(error){
            console.error(error);
        }
    }

    generatePicklist(data){
        return data.values.map(item =>({label : item.label, value : item.value}))
    }

    handleChange(event){
        this.selectedIndustry = event.detail.value
    }
}
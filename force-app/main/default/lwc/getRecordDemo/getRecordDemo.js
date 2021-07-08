import { api, LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import { getRecord } from 'lightning/uiRecordApi';

const fields = [NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD]
export default class GetRecordDemo extends LightningElement {
    @api recordId
    name 
    owner 
    annualRevenue 

    @wire(getRecord, {recordId : '$recordId', fields : fields})
    getRecordHandler({data, error}){
        if (data) {
            console.log(data);
            this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
            this.annualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value
            this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue : data.fields.Owner.value
        }
    }
}
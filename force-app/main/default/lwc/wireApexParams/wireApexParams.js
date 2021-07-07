import { LightningElement, wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType'


export default class WireApexParams extends LightningElement {
    selectedType = ''

    @wire(filterAccountType,{type : '$selectedType'})
    filteredAccounts

    typeHandler(event){
        this.selectedType = event.target.value
    }

    get typeOptions(){
        return [
            {label : 'Customer - Channel' , value : 'Customer - Channel'},
            {label : 'Customer - Direct' , value : 'Customer - Direct'}
        ]
    }
}
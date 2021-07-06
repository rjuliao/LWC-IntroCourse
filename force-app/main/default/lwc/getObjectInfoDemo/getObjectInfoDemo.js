import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';

export default class GetObjectInfoDemo extends LightningElement {
    objectInfo
    objectInfos


    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfoHandler({data, error}){
        if(data){
            console.log(data);
            this.objectInfo = data
        }
        if(error){
            console.error(error);
        }
    }

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
    @wire(getObjectInfos, {objectApiNames : '$objectApiNames'})
    objectInfosHandler({data, error}){
        if (data) {
            console.log('Infors', data);
            this.objectInfos = data
        }
        if (error) {
            console.error(error);
        }
    }
}
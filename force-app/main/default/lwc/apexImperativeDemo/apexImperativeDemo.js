import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class ApexImperativeDemo extends LightningElement {
    accounts

    handleClick(){  
        getAccountList()
        .then(res =>{
            console.log(res);
            this.accounts = res
        })
        .catch(err=>{
            console.error(err);
        })
    }
}
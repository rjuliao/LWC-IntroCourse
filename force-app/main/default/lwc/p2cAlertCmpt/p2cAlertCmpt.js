import { api, LightningElement } from 'lwc';

export default class P2cAlertCmpt extends LightningElement {
    @api message                //Now this atributte is public and you can call it from the cmp
    @api cardHeading
    @api number
    @api isValid
}
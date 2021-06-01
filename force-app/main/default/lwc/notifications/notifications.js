import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {

    handleClickOne(){
        this.showToast('SUCCESS!!','Viva la pvteria','success')
    }

    handleClickTwo(){
        this.showToast('ERROR!!','Muerte a la pvteria','error')
    }

    handleClickThree(){
        this.showToast('WARNING!!','Ojo con la pvteria','warning')
    }

    handleClickFour(){
        this.showToast('INFORMATION!!','Recuerda la pvteria','info')
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}
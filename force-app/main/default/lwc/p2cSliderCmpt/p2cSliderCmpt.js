import { api, LightningElement } from 'lwc';

export default class P2cSliderCmpt extends LightningElement {
    val = 20

    changeHandler(event){
        this.val = event.target.value
    }

    @api resetSlider(){
        this.val = 50
    }
}
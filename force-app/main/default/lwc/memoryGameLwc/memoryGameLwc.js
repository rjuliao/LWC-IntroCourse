import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import FONT_AWESOME from '@salesforce/resourceUrl/font_awesome';

export default class MemoryGameLwc extends LightningElement {
    isLibLoaded = false

    cards = [
        {id:1, listClass:"card", type:'apple', icon:'fa fa-apple'},
        {id:2, listClass:"card", type:'apple', icon:'fa fa-apple'},
        {id:3, listClass:"card", type:'archway', icon:'fa fa-archway'},
        {id:4, listClass:"card", type:'archway', icon:'fa fa-archway'},
        {id:5, listClass:"card", type:'alipay', icon:'fa fa-alipay'},
        {id:6, listClass:"card", type:'alipay', icon:'fa fa-alipay'},
        {id:7, listClass:"card", type:'award', icon:'fa fa-award'},
        {id:8, listClass:"card", type:'award', icon:'fa fa-award'},
        {id:9, listClass:"card", type:'cat', icon:'fas fa-cat'},
        {id:10, listClass:"card", type:'cat', icon:'fas fa-cat'},
        {id:11, listClass:"card", type:'cloud', icon:'fa fa-cloud'},
        {id:12, listClass:"card", type:'cloud', icon:'fa fa-cloud'},
        {id:13, listClass:"card", type:'chess-queen', icon:'fas fa-chess-queen'},
        {id:14, listClass:"card", type:'chess-queen', icon:'fas fa-chess-queen'},
        {id:15, listClass:"card", type:'centos', icon:'fa fa-centos'},
        {id:16, listClass:"card", type:'centos', icon:'fa fa-centos'},
    ]

    displayCard(event){
        let currCard = event.target
        currCard.classList.add("open", "show","disabled")
    }

    renderedCallback(){
        if (this.isLibLoaded) {
            return
        }else{
            loadStyle(this, FONT_AWESOME+'/fontawesome/css/font-awesome.min.css')
            .then(()=>{
                console.log('Loaded successfully');
                this.isLibLoaded = true
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

}
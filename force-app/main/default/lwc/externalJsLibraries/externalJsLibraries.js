import { LightningElement } from 'lwc';
import  MOMENT  from '@salesforce/resourceUrl/moment_library';
import {loadScript} from 'lightning/platformResourceLoader'
export default class ExternalJsLibraries extends LightningElement {
    currentDate
    isLoadedLib = false
    renderedCallback(){
        if(this.isLoadedLib){
            return
        }else{
            loadScript(this, MOMENT+'/moment/moment.min.js')
            .then(()=>{
                //Success code :D
                //call the function
                this.setActualDate()
                this.isLoadedLib = true
            }).catch(error =>{
                console.log(error);
            }) 
        }   
    }

    setActualDate(){
        this.currentDate = moment().format('LLLL');
    }

    handleBtn(){
        this.setActualDate()
    }

}
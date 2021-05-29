import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment_library';
import ANIMATE from "@salesforce/resourceUrl/animate_css_lib";
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class ExternalJsLibraries extends LightningElement {
    currentDate
    isLoadedLib = false
    renderedCallback(){
        if(this.isLoadedLib){
            return
        }else{
            //This is a promise to make multiple uploads of an entire libraries
            //In this example we can find a css lib and a js lib
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ])
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

/*
    This is an example of a single upload of a library
    loadScript(this, MOMENT+'/moment/moment.min.js')
    .then(()=>{
        //Success code :D
        //call the function
        this.setActualDate()
        this.isLoadedLib = true
    }).catch(error =>{
        console.log(error);
    }) 
*/
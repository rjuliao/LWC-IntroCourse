import { LightningElement } from 'lwc';
import INFORMATION from '@salesforce/label/c.Information';
import NAME from '@salesforce/label/c.Language';
import MUSIC from '@salesforce/label/c.Music_Category'
import LANG from '@salesforce/i18n/lang';
import DIR from '@salesforce/i18n/dir';

export default class InterExample extends LightningElement {
    lang = LANG;
    dir = DIR;
    text = 'this could be another example'

    connectedCallback(){
        console.log('The actual language', this.lang)
        console.log('the actual direction', this.dir);
    }


    label = {
        INFORMATION,
        NAME,
        MUSIC
    }
}



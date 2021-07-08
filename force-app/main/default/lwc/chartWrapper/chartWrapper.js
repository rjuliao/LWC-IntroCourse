import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OppController.getOpportunities'

export default class ChartWrapper extends LightningElement {
    pieChartLabels = []
    pieChartData = []

    @wire(getOpportunities)
    oppHandler({data, error}){
        if (data) {
            console.log(data);
            const result = data.reduce((json, val)=>({...json, [val.StageName]:(json[val.StageName]|0)+1}),{})
            if (Object.keys(result).length) {
                this.pieChartData = Object.values(result)
                this.pieChartLabels = Object.keys(result)
            }
        }
        if (error) {
            console.error(error);
        }
    }
}
import { LightningElement } from 'lwc';

export default class LwcQuiz extends LightningElement {

    selected = {}           //for storing 
    correctAnswers = 0      //to show the result
    isSubmited = false
    myQuestions = [
        {
            id : "Question1",
            question : "Which one of the following is not a template loop",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswers:"c"
        },
        {
            id : "Question2",
            question : "Which file is invalid in LWC Component folder",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswers:"b"
        },
        {
            id : "Question3",
            question : "Which one of the following is not a directive",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswers:"c"
        },
    ]

    //used for sisabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    //for applying dynamic styling to our  result message
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            `slds-text-color_success`:`slds-text-color_error`}`
    }
    
    //change handler get's called on every click on the option
    changeHandler(event){
        console.log("name", event.target.name)
        console.log("value", event.target.value)
        const {name, value} = event.target

        this.selected = {...this.selected, [name]:value}
    }

    //form sumbit handler
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswers)
        this.correctAnswers = correct.length
        this.isSubmited = true
        //console.log("correct Answers", this.correctAnswers)
    }

    //form reset handler
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmited = false
    }

}
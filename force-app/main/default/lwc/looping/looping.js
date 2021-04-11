import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ['Audi', 'Ford', 'Mercedez Benz', 'Hyunday', 'Rolls Royce', 'Bentley']

    ceoList = [
        {
            id : 1,
            company : 'Monument Valley',
            name : 'Alexandra Rizzioli'
        },
        {
            id : 2,
            company : 'Madgalena SCP',
            name : 'Paula Maldonado'
        },
        {
            id : 3,
            company : 'Facebook',
            name : 'Mark Zuckerberger'
        }
    ]
}
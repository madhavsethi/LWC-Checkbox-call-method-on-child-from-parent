import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];

    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Black Marker', value: 'black' },
    ];

    @api selectCheckbox(checkboxValue){  //Get Value from Parent Component
        const selectedCheckbox = this.options.find(checkbox=>{
            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "successfully checked!"
        }
        return "no checkbox found!"
    }
}
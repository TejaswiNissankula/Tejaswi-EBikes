import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


import NAME_FIELD from '@salesforce/schema/Contact.Name';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';


export default class ContactRecordForm extends LightningElement {
nameField = NAME_FIELD;
lastNameField = LASTNAME_FIELD;
firstNameField = FIRSTNAME_FIELD;
@api
recordId;
@api
objectApiName;


handleSubmit(event){
    event.preventDefault();
    let dataSet = event.detail.fields;
    let regx=/^[a-z0-9A-Z]{4,}$/;
    for(let key in dataSet){
        if(key==="LastName" && !regx.test(dataSet[key])){
            this.dispatchEvent(new ShowToastEvent({
                variant:'error',
                title:'Invalid Last Name',
                message:'Last Name should be 10 alphanumeric characters'
            }));
            return;
        }  
    }
    this.template.querySelector('lightning-record-edit-form').submit();
}

}
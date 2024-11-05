import { LightningElement ,api} from 'lwc';

export default class ErrorPanel extends LightningElement {

    _completeError;
    @api 
    get errors(){
        return this._completeError;
    }
    set errors(value){
        this._completeError = value;
    }
    handleError(error){
        if(Array.isArray(error.body)){
            
        }
    }
}

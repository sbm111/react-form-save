const regex = {
    email: new RegExp('^(.+)@(.+)$'),
    nummber: new RegExp('[0-9]')
};

export class Validators {

    static email(value, message ){
        if(value){
            const result = regex.email.test(value);
            if(!result) {
                return { error: true, message: message }
            }
        }
    }

    static number(value, message ){
        if(value){
            const result = regex.nummber.test(value);
            console.log('Result : ',result)
            if(!result) {
                return { error: true, message: message }
            }
        }
    }

    static required(value, message) {
        /* console.log(`inside required value : ${value} and message : ${message}`); */
        if (!value || !value.toString().trim().length) {
            return { error: true, message: message }
        }
        return false;
    }
}

export const validateInput = (arryaValidators,value) => {
    /* console.log(`Input Value : ${value} arryaValidators : ${arryaValidators.length}`); */
    if(arryaValidators && arryaValidators.length){
        for (let i = 0; i < arryaValidators.length; i++) {
            const error = arryaValidators[i].check(value,arryaValidators[i].message)
            if(error){
                return error;
            }
        }
    }
    return false;
}
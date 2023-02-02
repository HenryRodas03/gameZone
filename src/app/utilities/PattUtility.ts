import { Validators } from "@angular/forms";


export class PattUtility {
    
    passPat() {
        return Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,26}/);
    }

    emailPat(){
        return Validators.pattern(/[a-zA-Z]+\w+@\w+\.[a-zA-Z]+/);
    }

}
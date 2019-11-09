export class Globals {

    public blur = false;

    public propertyDetails: any = []

    public contractInfo: any = {
        "stepTwo": {
            "fixtures": "",
            "chatels": "",
            "rentals": ""
        },
        "stepThree": {
            "purchase_price": 50000,
            "downpayment_value": 60000,
            "deposit_value": 700000,
            "amount_to_be_financed": 0        
        },
        "stepFour": {
            "desired_possession_date": "",
            "seller_assumed_closing_costs": ""
        }
    }

    constructor() {
        this.blur = false;
    }

    isBlur() {
        return this.blur;
    }

    toggleBlur() {
        this.blur = !this.blur;
    }
}


export class VendorTokenCheck {
    transID: number;
    emailAddress: string;
    token: string;
    isValid: boolean;
    message: string;
}

export class Msme{
    transID:number;
    name :string;
    vendorCode :string;
    token :string;
    email :string;
    status :string;
    panNumber:string;
    msmeType:string;
    attachment:string;
    submittedOn?:Date;
}
export interface IRole{
    roleId: number,
    role: string;
}

export interface IDesignation{
    designationId: number,
    designation: string;
}

export interface APIResponseModel{
    message: string,
    result:  boolean,
    data: any
}

export interface Welcome4 {
    clientId:          number;
    contactPersonName: string;
    companyName:       string;
    address:           string;
    city:              string;
    pincode:           string;
    state:             string;
    EmployeeStrength:  number;
    gstNo:             string;
    contactNo:         string;
    regNo:             string;
}

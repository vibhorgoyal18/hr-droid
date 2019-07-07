export interface UserInfoModel {
    email: string;
    first_name: string;
    last_name: string;
    employee_id: number;
    role: string;
    designation: string;
    reporting_manager: ReportingManagerModel;
}

export interface ReportingManagerModel {
    first_name: string;
    last_name: string;
    employee_id: string;
}

export interface BasicDetailsModel {
    contact: string;
    emergency_contact: string;
    date_of_birth: string;
    aadhaar_number: string;
    pan_number: string;
    personal_mail_id: string;
}

export interface AccountDetailsModel {
    account_name: string;
    account_number: string;
    ifsc: string;
    bank_name: string;
    branch_name: string;
}

export interface AddressDetailModel {
    address_type: string;
    house_number: string;
    street_name: string;
    locality: string;
    city: string;
    pincode: string;
    state: string;
    nearby: string;
    country: string;
}

export interface UserDetailModel {
    basic_details: BasicDetailsModel;
    address_details: AddressDetailModel[];
}



import{IsString, Matches, IsEmail, IsNotEmpty} from "class-validator";

export class GuardianDTO{
    @IsString()
    //regex for only alphabets
    @Matches(/^[a-zA-Z\s]+$/, {
        message: 'Name should only contain alphabets'
    })
    Name: string;
    
    @Matches(/.*@.*\.xyz/, {
        message: 'Email should contain @ and .xyz'
    })
    @IsNotEmpty({ message: 'Email address is required' })
    Email: string;

    @IsString()
    @Matches(/^(?=.*[0-9]).*$/, {
        message: 'Password must contain at least one numeric character'
    })
    @IsNotEmpty({ message: 'Password is required' })
    Password: string;

    @IsString()
    @Matches(/^\d+$/,{message: 'NID must only contain numbers.'})
    @Matches(/^\d{13}$/, { message: 'NID number must be 13 characters long.' })
    //code for valid NID image size not more than 2MB
    nidNumber: string;

    @IsString()
    @Matches(/^018-\d{7}$/, { message: 'Invalid phone number format. Phone number must match the pattern: 01X-XXXXXXX' })
    phoneNumber: string;
}


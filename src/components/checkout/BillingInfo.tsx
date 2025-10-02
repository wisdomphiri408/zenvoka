import {NextPage} from "next";
import InputField from "@/components/Inputfield";
import React, {useState} from "react";


const BillingInfo: NextPage = () => {

    //billing information variables
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [zipCode,setZipCode] = useState<string>('');
    const [state, setState] = useState<string>('');



    const billingFields = [
        { label: 'Email', placeholder: 'you@example.com', value: email, setValue: setEmail },
        { label: 'Phone Number', placeholder: '+265...', value: phoneNumber, setValue: setPhoneNumber },
        { label: 'Street Address', placeholder: '123 Main St', value: streetAddress, setValue: setStreetAddress },
    ];

    //state
    const states = [
        { code: 'NY', name: 'NY' },
        { code: 'CA', name: 'CA' },
        { code: 'TX', name: 'TX' },
        { code: 'FL', name: 'FL' },
        { code: 'IL', name: 'IL' },
    ];

    //countries
    const countries = [
        { code: 'USA', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'UK', name: 'United Kingdom' },
        { code: 'CHN', name: 'China' },
        { code: 'MW', name: 'Malawi' },
    ];

    return (
        <div className={'card flex flex-col gap-2 p-4'}>
            <div className={'flex items-center gap-2'}>
                <div className={'h-6 w-6 rounded-full text-xs flex flex-col flex-center bg-white text-text-primary'}>1</div>
                <h5 className={'text-h5'}>Billing Information</h5>
            </div>

            {/*First Name & Last Name*/}
            <div className={'flex flex-col sm:flex-row sm:items-center gap-2'}>

                <div className={'flex flex-col gap-1 flex-1'}>
                    <label className={'text-sm'}>First Name</label>
                    <InputField
                        type={'text'}
                        placeholder={'Wisdom'}
                        className={'px-2'}
                        required
                        value = {firstName}
                        onChange = {(e:React.ChangeEvent<HTMLInputElement>) => {setFirstName(e.target.value)}}
                    />
                </div>
                <div
                className={'flex flex-col gap-1 flex-1'}>
                    <label className={'text-sm'}>Last Name</label>
                    <InputField
                        type={'text'}
                        placeholder={'Phiri'}
                        className={'px-2'}
                        required
                        value = {lastName}
                        onChange = {(e:React.ChangeEvent<HTMLInputElement>) => {setLastName(e.target.value)}}
                    />
                </div>
            </div>

            {/*email, phone number & street address*/}
            <div className="flex flex-col gap-2 flex-1">
                {billingFields.map((field, index) => (
                    <div key={index} className={'flex flex-col gap-1'}>
                        <label className="text-sm">{field.label}</label>
                        <InputField
                            type="text"
                            placeholder={field.placeholder}
                            className="px-2"
                            required
                            value={field.value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.setValue(e.target.value)}
                        />
                    </div>
                ))}
            </div>

            {/*city, state, zipCode country*/}
            <div className={'grid grid-cols-2 gap-2 sm:grid-cols-4'}>
                <div className={'flex flex-col gap-1'}>
                    <label className={'text-sm'}>City</label>
                    <InputField
                        type={'text'}
                        placeholder={'New York'}
                        className={'px-2'}
                        required
                        value = {city}
                        onChange = {(e:React.ChangeEvent<HTMLInputElement>) => {setCity(e.target.value)}}
                    />
                </div>

                <div className={'flex flex-col gap-1'}>
                    <label className={'text-sm'}>State</label>
                    <select
                        className="card text-sm"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        {states.map(({ code, name }) => (
                            <option key={code} value={code}>{name}</option>
                        ))}
                    </select>
                </div>

                <div className={'flex flex-col gap-1'}>
                    <label className={'text-sm'}>Zip Code</label>
                    <InputField
                        type={'text'}
                        placeholder={'10001'}
                        className={'px-2'}
                        required
                        value = {zipCode}
                        onChange = {(e:React.ChangeEvent<HTMLInputElement>) => {setZipCode(e.target.value)}}
                    />
                </div>

                <div className={'flex flex-col gap-1'}>
                    <label className={'text-sm'}>Country</label>
                    <select
                        className="card text-sm"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        {countries.map(({ code, name }) => (
                            <option key={code} value={code}>{name}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default BillingInfo;
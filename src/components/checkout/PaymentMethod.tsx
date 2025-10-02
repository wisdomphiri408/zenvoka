import {NextPage} from "next";
import React, {useState} from "react";
import InputField from "@/components/Inputfield";

const PaymentMethod : NextPage = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');

    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [expiryDate, setExpiryDate] = useState<string>('');
    const [cvv, setCvv] = useState<string>('');
    const [cardholderName, setCardholderName] = useState<string>('');
    const [cardNumber, setCardNumber] = useState<string>('');


    //payment methods
    const paymentMethods = [
        { id: 'credit/debit', name: 'card'},
        { id: 'Mobile Money', name: 'mobile' },
    ];

    return (
        <div className={'card flex flex-col gap-4 p-4'}>

            <div className={'flex items-center gap-2'}>
                <div className={'h-6 w-6 rounded-full text-xs flex-center bg-white text-text-primary'}>3</div>
                <h5 className={'text-h5'}>Payment Method</h5>
            </div>

            {/*Choose Payment Method*/}
            <div>
                {paymentMethods.map((method) => (
                <div key={method.id} className={'card flex items-center justify-between mb-2'}>
                        <div className={'flex items-center'}>
                            <input
                                type="radio"
                                id={method.name}
                                name="paymentMethod"
                                value={method.name}
                                checked={selectedPaymentMethod === method.name}
                                onChange={() => setSelectedPaymentMethod(method.name)}
                                className="mr-2"
                            />
                            <label htmlFor={method.name} className={'text-sm font-semibold'}>
                                {method.id}
                            </label>
                        </div>
                </div>
                ))}
            </div>

            {/*fill payment fields*/}
            <div className={'flex flex-col gap-2'}>
                {selectedPaymentMethod === 'card' && (
                    <>
                        <div className={'flex flex-col gap-1'}>
                            <label className={'text-sm'}>Card Number</label>
                            <InputField
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value)}
                                required = {false}
                                className={''}
                            />
                        </div>
                        <div className={'flex flex-col sm:flex-row gap-2 sm:gap-4'}>
                            <div className={'flex flex-col gap-1 flex-1'}>
                                <label className={'text-sm'}>Expiry Date</label>
                                <InputField
                                    type="text"
                                    placeholder="MM/YY"
                                    value = {expiryDate}
                                    required = {false}
                                    onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setExpiryDate(e.target.value)}
                                    className={''}
                                />
                            </div>
                            <div className={'flex flex-col gap-1 flex-1'}>
                                <label className={'text-sm'}>CVV</label>
                                <InputField
                                    type="text"
                                    placeholder="123"
                                    value = {cvv}
                                    required = {false}
                                    onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setCvv(e.target.value)}
                                    className={''}
                                />
                            </div>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <label className={'text-sm'}>Cardholder Name</label>
                            <InputField
                                type="text"
                                placeholder="John Doe"
                                value = {cardholderName}
                                required = {false}
                                onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setCardholderName(e.target.value)}
                                className={''}
                            />
                        </div>
                    </>
                )}
                {selectedPaymentMethod === 'mobile' && (
                    <div className={'flex flex-col gap-1'}>
                        <label className={'text-sm'}>Mobile Money Number</label>
                        <InputField
                            type="text"
                            placeholder="+265 99 123 4567"
                            value = {mobileNumber}
                            required = {false}
                            onChange = {(e:React.ChangeEvent<HTMLInputElement>) => setMobileNumber(e.target.value)}
                            className={''}
                        />
                    </div>
                )}
                <div>
                    <input
                    type={'checkbox'}
                    id={'saveInfo'}
                    className={'mr-2'}
                    />
                    <label htmlFor={'saveInfo'} className={'text-xs font-semibold'}>
                        Save payment information for future orders
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;
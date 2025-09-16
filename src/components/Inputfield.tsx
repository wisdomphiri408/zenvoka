import { NextPage } from "next";

type InputProps = {
    type: string;
    className: string;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required:boolean;
}

const InputField: NextPage<InputProps> = ({
    type='text',
    className= '',
    value, 
    onChange,
    placeholder = '',
    required = false,
}) => {
    return(
    <input 
    type={type}
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required = {required}
    />
    )

}

export default InputField;
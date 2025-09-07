import { NextPage } from "next";

type InputProps = {
    type: string;
    className: string;
    value: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputField: NextPage<InputProps> = ({
    type='text',
    className= '',
    value, 
    onChange,
    placeholder = '',
}) => {
    return(
    <input 
    type={type}
    className={`input ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    )

}

export default InputField;
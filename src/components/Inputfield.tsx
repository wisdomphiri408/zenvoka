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
    className={`py-1 px-2 border-1 border-gray-600 rounded-md bg-gray-100 dark:bg-field-backgroung outline-gray-400 ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    )

}

export default InputField;
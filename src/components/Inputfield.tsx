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
    className={`py-1 px-2 border-1 border-gray-500 bg-red-900 dark:bg-amber-400 ${className}`}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    )

}

export default InputField;
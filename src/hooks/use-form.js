import { useState, useCallback } from 'react';
// form object :

// renderInput: (handleChange, value, isValid, error, key) => {
//     return (
//         <Input
//             key={key}
//             name={name}
//             type={type}
//             label={label}
//             isValid={isValid}
//             value={value}
//             handleChange={handleChange}
//             errorMessage={error}
//         />
//     );
// },
// label,
// value: defaultValue,
// valid: false,
// errorMessage: '',
// touched: false,
function useForm(formObj) {
    const [form, setForm] = useState(formObj);

    const onInputChange = useCallback((event) => {
        // to be implemented
    }, []);

    function renderFormInputs() {
        return (
            // iterating over 4 input fields name, email, password and confirmpassword
            Object.values(form).map((inputObj) => {
                const { value, label, errorMessage, valid, renderInput } = inputObj;
                return renderInput(onInputChange, value, valid, errorMessage, label)
            })
        )
    }
    return { renderFormInputs };
}

export default useForm;
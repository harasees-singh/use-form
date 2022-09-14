import Input from "../components/UI/Input";
function createFormFieldConfig(label, name, type, defaultValue = '') {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    errorMessage={error}
                />
            );
        },
        label,
        value: defaultValue,
        valid: false,
        errorMessage: '',
        touched: false,
    };
}
function createValidationRule(ruleName, errorMessage, validateFunc) {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc,
    };
}
export function requiredRule(inputName) {
    return createValidationRule(
        'required',
        `${inputName} required`,
        (inputValue, formObj) => inputValue.length !== 0
    );
}

export function minLengthRule(inputName, minCharacters) {
    return createValidationRule(
        'minLength',
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue, formObj) => inputValue.length >= minCharacters
    );
}

export function maxLengthRule(inputName, maxCharacters) {
    return createValidationRule(
        'minLength',
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue, formObj) => inputValue.length <= maxCharacters
    );
}
export function passwordMatchRule() {
    return createValidationRule(
        'passwordMatch',
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
}
export const signupForm = {
    name: {
        ...createFormFieldConfig('Full Name', 'name', 'text'),
        validationRules:[
            requiredRule('name'),
            minLengthRule('name', 3),
            maxLengthRule('name', 25),
        ],
    },
    email: {
        ...createFormFieldConfig('Email', 'email', 'email'),
        validationRules:[
            requiredRule('email'),
            minLengthRule('email', 10),
            maxLengthRule('email', 25),
        ],
    },
    password: {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules:[
            requiredRule('password'),
            minLengthRule('password', 8),
            maxLengthRule('password', 28),
        ],
    },
    confirmPassword: {
        ...createFormFieldConfig('Confirm Password', 'confirmPassword', 'password'),
        validationRules:[passwordMatchRule()]
    },
};
export default createFormFieldConfig;
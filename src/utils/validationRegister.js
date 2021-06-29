
const validationRegister = ({ required = false, minLength = false, maxLength = false, email = false}) => {


    let register = {};

    if (required) {
        register = {
            ...register,
            required: "Este campo no puede estar vacío"
        }
    }


    if (minLength) {
        register = {
            ...register,
            minLength: {
                value: minLength,
                message: `Este campo no puede tener menos de ${minLength} carácteres`
            }
        }
    }


    if (maxLength) {
        register = {
            ...register,
            maxLength: {
                value: maxLength,
                message: `Este campo no puede tener más de ${maxLength} carácteres`
            }
        }
    }


    if (email) {
        register = {
            ...register,
            pattern : {
                value : /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                message : `Debe colocar un email válido`
            }
        }
    }


    return register;

}




export default validationRegister;
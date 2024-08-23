'use client'

import { useCallback, useState } from "react";
import { FieldValues,
         SubmitHandler,
         useForm 
        
        } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () =>{
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isloading, setIsLoading] = useState(false);

    const taggleVariant = useCallback(() => {
        if (variant == 'LOGIN'){
            setVariant('REGISTER');
        }else {
            setVariant('LOGIN');
        }
    }, [variant]); 

const {
    register,
    handleSubmit,
    formState: {
        errors
    }

} = useForm<FieldValues>({
    defaultValues:{
        name:'',
        email:'',
        password:''
    }
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant == 'REGISTER'){
        //AXIOS register

    }

    if (variant == 'LOGIN'){
        
    }

}

    return (
        <div>Auth Form</div>
    );
}

export default AuthForm;
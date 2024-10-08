import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { message } from "antd";

const useSignup = () => {
    const {login} = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const registerUser = async (values , is_google_sighining = false) => 
        {
        console.log(values);
        if(is_google_sighining)
        {
            values['GOOGLE'] = true;
        }
        if(values.password !== values.passwordConfirm) 
        {
            return setError('Passwords doesnot match');
        }

        try {
            console.log(values);
            setError(null);
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(values),
            });

            const data = await res.json();
            console.log('after login ',res.status);

            if(res.status === 201) {
                message.success(data.message);
                login(data.token, data.user);
            }
            else if(res.status === 200) {
                message.success(data.message);
                login(data.token, data.user);
            }
            else if(res.status === 400) 
            {
                setError(data.message);
            }
            else 
            {
                message.error('Registration failed.');
            }
        } catch (error) {
            message.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, registerUser };

  return {};
};

export default useSignup;
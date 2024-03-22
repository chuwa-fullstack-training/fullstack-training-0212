import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const[formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const navigate = useNavigate();

    const onUsernameChange = (e) => {
        setFormData(prev => ({...prev, username: e.target.value}));
    }

    const onPasswordChange = (e) => {
        setFormData(prev => ({...prev, password: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        navigate(-1);
    }
    
    return(
        <>
                <form className="form-container" onSubmit={handleSubmit}>
                    <label>
                        Username: 
                        <input
                            type="text"
                            placeholder='Enter Username'
                            value={formData.username}
                            onChange={onUsernameChange}    
                        />
                    </label>
                    <label>
                        Password: 
                        <input
                            type="text"
                            placeholder='Enter Password'
                            value={formData.password}
                            onChange={onPasswordChange}    
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
        </>
    );
}
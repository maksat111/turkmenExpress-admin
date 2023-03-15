import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { AiOutlineLoading, AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineLock } from 'react-icons/ai';
import './Login.css'
// import { loginPost } from '../../config/axios';
// import { message } from 'antd';
import Logo from '../../images/logo.png';

const Login = () => {
    // const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("password");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // const res = await loginPost(username, password);
        // console.log(res)
        // if (res.success == 1) {
        //     localStorage.setItem('nyzam_profile_info', JSON.stringify(res.data));
        //     message.success('Successfully!');
        //     window.location.href = "/gatnasyk"
        //     setLoading(false);
        // } else {
        //     message.error(res.msg);
        //     setLoading(false);
        // }

    }
    return (
        <div className='login_page'>
            <form className="login-container" onSubmit={handleSubmit}>
                <img src={Logo} alt='logo' />
                <h2>Hoş geldiňiz!</h2>
                <p>Programmany ulanmak üçin açar sözüňizi giriziň!</p>

                <div className='input-container'>
                    <AiOutlineUser className='icon' />
                    <input style={{ width: "395px" }} placeholder="Ulanyjynyň ady" onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className='input-container'>
                    <AiOutlineLock className='icon' />
                    <input type={type} placeholder="Açar sözi" onChange={(e) => setPassword(e.target.value)} required />
                    {type == 'password' ? <AiOutlineEye className='icon' style={!password ? { color: 'white' } : { color: "rgb(73, 73, 231)" }} onClick={() => setType("text")} />
                        : <AiOutlineEyeInvisible className='icon' onClick={() => setType("password")} />
                    }
                </div>

                <button className='login_button' type="submit">{loading ? <AiOutlineLoading /> : "Log In"}</button>
            </form>
        </div>
    )
}

export default Login;
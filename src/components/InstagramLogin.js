import '../style/instagramLogin.css'
import instagramNameLogo from '../images/instagramNameLogo.png'
import metaLogo from '../images/metaLogo.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function InstagramLogin(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    console.log(login)
    return(
        <div className="content-login">
            <header className='header-login'>
                <img className='header-img' src={instagramNameLogo}/>
            </header>
            <hr/>
            <div className='main-content-login'>
                <div className='input-login'>
                    <input type='text' value={login} placeholder='Тел. имя пользователя или эл. адрес' onChange={(e) => {
                       setLogin(e.target.value)
                    }}/>
                    <input type='password' value={password} placeholder='Пароль' onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                </div>
                <div className={login.length !== 0 && password.length > 5 ? 'button-login2' : 'button-login'}>
                    {login.length !== 0 && password.length > 5 ?<button> <Link to='/main'><h1 className='button-h1'>Войти</h1></Link></button> : <button><h1>Войти</h1></button>   }
                </div>
            </div>
            <footer>
                <img className='meta-logo' src={metaLogo}/>
            </footer>
        </div>
    )
}
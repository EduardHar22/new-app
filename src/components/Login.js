import '../style/login.css'
import instagramNameLogo from '../images/instagramNameLogo.png'
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <div className="content">
            <div className='main_content'>
                <h1>Login with</h1>
                <div className='insta-image-div'>
                    <Link to='/login'>
                        <img className='insta-image' src={instagramNameLogo} alt='img' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
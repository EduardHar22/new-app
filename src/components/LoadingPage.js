import '../style/loadingPage.css'

export default function LoadingPage(){
    return (
        <div className="loading-div">
            <h1 className='something-went-wrong'> ! Something went wrong ! </h1>
            <hr/>
            <h1 className='error'>ERROR-404!!!</h1>
            <hr/>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
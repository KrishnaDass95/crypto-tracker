import Button from "../../common/button"
import "./style.css"


export const MainComponent = () => {
    return(

        <div className="hero-component">
            <div className="hero-left">
                <h1 className="track-crypto-heading">
                    Track Crypto
                </h1>
                <h1 className="real-time-heading">
                    Real Time.
                </h1>
            </div>
            <p className="info-text">
                Track cryptos through a public API in real time.
                Vist the dashboard now!
            </p>
            <div className="flex-buttons">
                <Button text={"Dashboard"}/>
                <Button text={"Share"} outlined={true}/>

            </div>
            <div className="hero-right">

            </div>
        </div>

    )
}
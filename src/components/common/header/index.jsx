import Button from "../button"
import AnchorTemporaryDrawer from "./drawer"
import "./style.css"

const Header = () => {

    return (
        <div className="navbar">
            <h1 className="logo">
                CryptoTracker
                <span style={{color: 'var(--blue)'}}>.</span>
            </h1>

        <div className="links">
            <a href="/"><p className="link">Home</p></a>
            <a href="/"><p className="link">Compare</p></a>
            <a href="/"><p className="link">Watchlist</p></a>
            <Button outlined={true} text={"Dashboard"} onClick={() => console.log("clicked dashboard btn")}/>
        </div>
        <div className="header-drawer">
        <AnchorTemporaryDrawer />
        </div>    
        </div>
    )
}   

export default Header
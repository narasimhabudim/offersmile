function Directlink({url}){
    return (
        <>
            <span className="hash-link" style={{color:'blue',cursor:'pointer'}} title="Click to copy direct link to clipboard" onClick={()=>{navigator.clipboard.writeText(window.location+url)}}>#</span>
        </>
    )
}

export default Directlink;
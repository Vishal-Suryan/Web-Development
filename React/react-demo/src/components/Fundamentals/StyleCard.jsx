function StyleCard(){
    const styles = {
        backgroundColor : "lightblue",
        padding : "20px",
        borderRadius : "10px",
        color: "darkblue"
    }

    return (
        <div>
            <h1 style={styles}>Rockstar</h1>
            <p style={styles}>He is a Gamer.</p>
        </div>
    )
}

export default StyleCard;
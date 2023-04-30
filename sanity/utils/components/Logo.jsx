function Logo(props) {

    const logoStyles = {
        color: "white",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: '5px',
        padding: "6px 10px",
        fontSize: "1.2rem",
        fontFamily: "Arial",
        fontWeight: "600",
    };

    const styles = `
        [data-testid="field-group-tabs"] > div:first-of-type {
            display: none;
        }
    `

    return (
        <>
            <style>
                {styles}
            </style>

            <span style={logoStyles}>{props.title}</span>
        </>
    )
}

export default Logo
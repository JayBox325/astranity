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
        '--brand-primary': red;
        
        [data-testid="field-group-tabs"] > div:first-of-type {
            display: none;
        }

        [data-testid="field-groups"] {
            position: fixed;
            top: 0;
            z-index: 20;
            padding: 20px 0;

            &:before {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        [data-ui="Container"] {
            padding-bottom: 60px;
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
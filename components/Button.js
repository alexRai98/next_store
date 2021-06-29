export default function Button({ onClick, children }) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>
                {`
                    button {
                        background-color: #DB3C2A;
                        color: white;
                        border-radius: 100px;
                        font-size: 16px;
                        padding: 8px 24px;
                        border:none;
                    }
                `}
            </style>
        </>
    );
}

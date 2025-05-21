import React from "react";

interface ErrorMessageProps{};


const ErrorMessage: React.FC<ErrorMessageProps> =() =>{
    return (
        <>
        <h2>Sorry, something went wrong! Please try later!</h2>
        </>
    )

}

export default ErrorMessage
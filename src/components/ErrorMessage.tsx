import styled from "styled-components"

const Message = styled.h1`
    
display: flex;
align-items: center;
justify-content: center;
padding: 24px;
color: #ff0000;
border: 2px solid #ff0000;

`


export default function ErrorMessage({ text, className, ...props }: { text: string, className: string }) {
    return (
        <Message className={className} {...props}> 
            {text}
        </Message>
    )
}
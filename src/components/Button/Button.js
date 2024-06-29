import { ButtonStyle, TextStyle } from "./style";

const Button = ({children}) => {
    return (
        <ButtonStyle>
            <TextStyle>{children}</TextStyle>
        </ButtonStyle>
    )
}

export default Button;

//import Logo from "../../assets/logo.svg"

import { HomeStyle, Title } from "./style";

import Background from "../../components/Background/Background";
import Button from "../../components/Button/Button";

const Home = () => {
    return (
        <Background>
            <HomeStyle>
                {/* <Logo /> */}
                <Title>ANESTESIA</Title>
                <Button>Iniciar</Button>
                <Button>Jogadores</Button>
            </HomeStyle>
        </Background>
    )
}

export default Home;

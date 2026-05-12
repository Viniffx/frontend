import { BotaoPadrao } from '../../components/BotaoPadrao';
import {Container} from '../../components/Container'
import { InputPadrao } from '../../components/InputPadrao';

export function Home() {
    return (
        <>
        <Container>
            <h1>Olá da Home dentro do Container</h1>
        </Container> 
        
            <BotaoPadrao>
                Clique aqui
            </BotaoPadrao>
            <InputPadrao />

        </>
    );
}

import { BotaoPadrao } from '../../components/BotaoPadrao';
import {Container} from '../../components/Container'
export function Home() {
    return (
        <>
        <Container>
            <h1>Olá da Home dentro do Container</h1>
        </Container> 
        
            <BotaoPadrao>
                Clique aqui
            </BotaoPadrao>
       

        </>
    );
}

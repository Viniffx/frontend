
import { Container } from "../../components/Container";

import {  MainForm } from "../../components/MainForm";

export function Home() {
  return (
    <>
      <Container>

      <MainForm
        aoAdicionar = {adicionarCurso}
        aoAtualizar= {atualizarCurso}
        cursoEmEdicao= {cursoEmEdicao}
        />
        
      </Container>
    </>
  );
}

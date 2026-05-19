/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./styles.module.css";
import { Container } from "../Container";
import { InputPadrao } from "../InputPadrao";
import { BotaoPadrao } from "../BotaoPadrao";
import { useEffect, useState } from "react";
/* fazendo contrato dos recursos*/

interface DadosCurso {
  nomeCurso: string;
  periodo: string;
}

interface MainFormProps {
  aoAdicionar: (curso: any) => void;
  aoAtualizar: (curso: any) => void;
  cursoEmEdicao: (any | null);
}

export function MainForm({ aoAdicionar, aoAtualizar, cursoEmEdicao }: MainFormProps) {
  const [DadosCurso, setDadosCurso] = useState<DadosCurso>({
    nomeCurso: '',
    periodo: ''
  });
  useEffect(() => {
    if (cursoEmEdicao) {
      setDadosCurso({ 
        nomeCurso: cursoEmEdicao.nome,
        periodo: cursoEmEdicao.periodo
      });
    } else {
      setDadosCurso({
        nomeCurso: '',
        periodo: ''
      });
    }
  }, [cursoEmEdicao] );

  const lidarComMudanca = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setDadosCurso({
      ...DadosCurso,
      [e.target.name]: e.target.value
    });
  }

  const cadastrarCurso = (e: any) => {
    e.preventDefault();
    if (cursoEmEdicao) {
      const cursoAtualizado = {
        id: cursoEmEdicao.id,
        nome: DadosCurso.nomeCurso,
        periodo: DadosCurso.periodo
      };
      console.log("Altereçaõ em formato JSON:\n", JSON.stringify(cursoAtualizado,null,2));
      aoAtualizar(cursoAtualizado);
    } else {
      const cursoNovo = {
        id: "",
        nome: DadosCurso.nomeCurso,
        periodo: DadosCurso.periodo,
      };
      console.log("Novo curso em formato JSON:\n", JSON.stringify(cursoNovo,null,2));
      aoAdicionar(cursoNovo);
    }
    setDadosCurso({
      nomeCurso: '',
      periodo: ''
    });
  }


  return (
    <>
      <Container>
        <section className= {styles.formularioContainer}>
          <h2 className= {styles.titulo}>
            Cadastrar Curso
            
            {cursoEmEdicao ? 'Editar Curso' : 'Cadastrar Curso'}
             </h2>

             <form onSubmit={cadastrarCurso}>
             <div className={styles.pularLinha}>
              <label htmlFor="nomeCurso" className={styles.label}>
                Nome do Curso:
              </label>
              <InputPadrao 
                type="text"
                id="nomeCurso"
                name = "nomeCurso"
                placeholder="Digite o nome do curso" >
             
                </InputPadrao>
             </div>
             <div className={styles.pularLinha}>
              <label htmlFor="periodo" className={styles.label}>Periodo</label>
              <select 
              id="periodo" 
              name="periodo"
              value= {DadosCurso.periodo} 
              onChange={ lidarComMudanca}
              required
              className={styles.estiloSelect}
              >
                <option value="">Selecione o período</option>
                <option value="MATUTINO">MATUTINO</option>
                <option value="VESPERTINO">VESPERTINO</option>
                <option value="NOTURNO">NOTURNO</option>  
                <option value="INTEGRAL">INTEGRAL</option>  

              </select>

              </div>
              <div className={styles.alinharBotao}>
                <BotaoPadrao type="submit">
                  Cadastrar
                  {/* {cursoEmEdicao ? 'Salvar Alterações' : 'Cadastrar'} */}
                </BotaoPadrao>
              </div>
             </form>
        </section>
      </Container>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { InputPadrao } from "../components/InputPadrao";
import { BotaoPadrao } from "../components/BotaoPadrao";
/* fazendo contrato dos recursos*/

interface DadosCurso {
  nomeCurso: string;
  periodo: string;
}

interface MainFormProps {
  aoAdicionar: (curso: any) => void;
  aoAtualizar: (curso: any) => void;
  cursoEmEdicao: any | null;
}

export function MainForm({
  aoAdicionar,
  aoAtualizar,
  cursoEmEdicao,
}: MainFormProps) {
  const [dadosCurso, setDadosCurso] = useState<DadosCurso>({
    nomeCurso: "",
    periodo: "",
  });
  useEffect(() => {
    if (cursoEmEdicao) {
      setDadosCurso({
        nomeCurso: cursoEmEdicao.nome,
        periodo: cursoEmEdicao.periodo,
      });
    } else {
      setDadosCurso({
        nomeCurso: "",
        periodo: "",
      });
    }
  }, [cursoEmEdicao]);
  const lidarcomaMudanca = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setDadosCurso({
      ...dadosCurso,
      [e.target.name]: e.target.value,
    });
  };

  const cadastrarCurso = (
    e: any) => {
    e.preventDefault();
    if (cursoEmEdicao) {
      const cursoAtualizado = {
        id: cursoEmEdicao.id,
        nome: dadosCurso.nomeCurso,
        periodo: dadosCurso.periodo,
      };
      console.log(
        "Alteração em formato JSON :\n",
        JSON.stringify(cursoAtualizado, null, 2),
      );
      aoAtualizar(cursoAtualizado);
    } else {
      const novoCurso = {
        id: "", // O ID será gerado pelo backend
        nome: dadosCurso.nomeCurso,
        periodo: dadosCurso.periodo,
      };
      console.log(
        "Novo curso em formato JSON :\n",
        JSON.stringify(novoCurso, null, 2),
      );
      aoAdicionar(novoCurso);
    }
    setDadosCurso({
      nomeCurso: "",
      periodo: "",
    }); // fim cadastrarCurso
  };

  return (
    <>
      <Container>
        <section className={styles.formularioContainer}>
          <h2 className={styles.titulo}>
            {cursoEmEdicao ? "Editar Curso" : "Cadastrar Novo Curso"}
          </h2>
          <form onSubmit={cadastrarCurso}>
            <div className={styles.pularLinha}>
              <label htmlFor="nomeCurso" className={styles.label}>
                Nome do Curso </label>
              <InputPadrao
                type="text"
                id="nomeCurso"
                name="nomeCurso"
                placeholder="Digite o nome do curso"
                value={dadosCurso.nomeCurso}
                onChange={lidarcomaMudanca}
                required
              />
            </div>
            <div className={styles.pularLinha}>
              <label htmlFor="periodo" className={styles.label}>
                Período </label>
                <select className={styles.estiloSelect}
                id= "periodo" 
                name="periodo"
                value={dadosCurso.periodo}
                onChange={lidarcomaMudanca}
                required
                >
                    <option value="">Selecione o período</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                    <option value="Integral">Integral</option>
                </select>
            </div>
            <div className={styles.alinharBotao}>
                <BotaoPadrao type="submit">
                    {cursoEmEdicao ? "Salvar Alterações" : "Adicionar Curso"}
                </BotaoPadrao>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
}

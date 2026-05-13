/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./style.module.css";
import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { InputPadrao } from "../components/InputPadrao";
import { Pencil, X } from "lucide-react";
/* fazendo contrato dos recursos*/

interface Curso {
  id: string; // O ID será gerado pelo backend
  nome: string;
  periodo: string;
}

interface ListaCursosProps {
  cursos: Curso[]; // Array de cursos
  aoEditar: (curso: Curso) => void; // Função para editar um curso
  aoExcluir: (id: string) => void; // Função para excluir um curso
}
// desestruturar as props na assinatura do componente
export function ListaCursos({ cursos, aoEditar, aoExcluir }: ListaCursosProps) {
  return (
    <>
      <Container>
        <section className={styles.listaContainer}>
          <h2 className={styles.titulo}>Lista de Cursos</h2>
          <div className={styles.buscaContainer}>
            <InputPadrao type="text" placeholder="Buscar curso..." />
          </div>
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th>Curso</th>
                <th>Período</th>
                <th>Ações</th>
              </tr>
              <tbody>
                {cursos.map((curso) => (
                  <tr key={curso.nome}>
                    <td>{curso.periodo}</td>
                    <td>
                      <button
                        className={styles.actionButton}
                        title="Editar"
                        onClick={() => aoEditar(curso)} //aciona alteração
                      >
                        <span>
                          <Pencil size={18} />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </thead>
          </table>
        </section>
      </Container>
    </>
  );
} /** fim lista cursos*/

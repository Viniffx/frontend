import styles from './style.module.css';
import type { InputHTMLAttributes } from 'react';
//** Programação lógica do type script */
//Estender atributos padrões do HTML para o input
interface InputPadraoProps extends
InputHTMLAttributes<HTMLInputElement> {}
    // custuomizar caso seja necessário no futuro
    // ** 0 InputHtmlAttributes traz id, type, placeholder, value
    //onChange, etc quando imporotado. Não precisa fica tipando */

export function InputPadrao({className, ...rest}: InputPadraoProps) {
    return (
        
       <input 
        // Juta a classe base do módulo CSS com qualquer classe
        //extra via props
         className={`${styles.input} ${className || ''}`}
         {...rest}
        //Espalha todas as outras propriedades (placeholder, id,
        //etc) no elemento.
       />   
    );
}

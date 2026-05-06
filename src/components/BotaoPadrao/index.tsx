import styles from './styles.module.css';
import type { ButtonHTMLAttributes } from 'react';

type BotaoPadraoProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function BotaoPadrao({ className, children, ...rest }: BotaoPadraoProps) {
    return (
        <>
            <button
                className= {`${styles.botao} ${className || ''}`} 
            >
                {children}
            </button>
        </>
    );

}
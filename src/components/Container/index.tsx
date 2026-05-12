import styles from './style.module.css'
import type{ReactNode}from'react';
interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    // type script
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    );
}

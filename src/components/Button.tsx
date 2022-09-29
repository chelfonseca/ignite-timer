import styles from './Button.module.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({variant = 'primary'}: ButtonProps){
    return <button className={`${styles.button} ${styles[variant]}`}>Enviar</button>
}
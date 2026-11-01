import './Button.css';

// variant: 'primary' — основная синяя кнопка, 'outline' — синяя с рамкой, 'danger' — красная с рамкой
export default function Button({ variant = 'primary', type = 'button', className = '', ...props }) {
  return <button type={type} className={`btn btn--${variant} ${className}`.trim()} {...props} />;
}

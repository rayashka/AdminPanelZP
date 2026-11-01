import './Panel.css';

// Карточка для форм. as="form" делает её <form>.
export default function Panel({ as: Tag = 'div', className = '', ...props }) {
  return <Tag className={`panel ${className}`.trim()} {...props} />;
}

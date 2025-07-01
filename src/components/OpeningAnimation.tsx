import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * A simple full-screen intro overlay that fades in on page load and shows
 * a prominent button which navigates the user to the listings page.
 *
 * The styling/animation for the CSS classes used here (`opening-overlay`,
 * `opening-content`, `opening-btn`) is defined in `index.css`.
 */
const OpeningAnimation: React.FC = () => {
  const navigate = useNavigate();

  // Opacity controls darkness; starts fully visible (1)
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight; // fade out over first viewport height
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const newOpacity = 1 - progress;
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Once fully transparent, stop rendering overlay entirely
  if (opacity <= 0) {
    return null;
  }

  // Modern/classy button style inspired by reactbits.dev
  const ModernButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: '1rem 2.6rem',
      fontSize: '1.2rem',
      fontWeight: 700,
      borderRadius: 999,
      background: 'linear-gradient(90deg, #a67c52 0%, #d2b48c 100%)',
      color: '#181818',
      border: 'none',
      boxShadow: '0 4px 24px #a67c5233',
      cursor: 'pointer',
      transition: 'transform 0.18s, box-shadow 0.18s, background 0.18s',
      marginTop: '0.5rem',
    }}
    onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)')}
    onMouseOut={e => (e.currentTarget.style.transform = 'none')}
  >
    {children}
  </button>
);

  return (
    <div
      className="opening-overlay"
      style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}
    >
      <div className="opening-content">
        <h1>Welcome to Jaco</h1>
        <ModernButton onClick={() => navigate('/condos')}>View Condo</ModernButton>
      </div>
    </div>
  );
};

export default OpeningAnimation; 
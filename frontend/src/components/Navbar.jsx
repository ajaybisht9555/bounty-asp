import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, 
      backgroundColor: 'rgba(6, 8, 15, 0.8)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)', zIndex: 50 
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
          <img src="/logo.png" alt="BountyFix Logo" style={{ height: '36px', borderRadius: '4px' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.1em' }}>BOUNTYFIX</span>
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ 
            color: location.pathname === '/' ? 'var(--okx-brand)' : 'var(--text-secondary)', 
            textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', transition: 'color 0.2s'
          }}>
            Home
          </Link>
          <Link to="/how-to-use" style={{ 
            color: location.pathname === '/how-to-use' ? 'var(--okx-brand)' : 'var(--text-secondary)', 
            textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', transition: 'color 0.2s'
          }}>
            How To Use
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

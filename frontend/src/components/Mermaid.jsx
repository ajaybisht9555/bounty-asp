import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: '"Inter", sans-serif',
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.contentLoaded();
      // Using a try-catch because mermaid can sometimes throw if syntax is bad, 
      // but we know ours is good.
      try {
        mermaid.render('mermaid-svg', chart).then((result) => {
          containerRef.current.innerHTML = result.svg;
        });
      } catch (error) {
        console.error('Mermaid rendering failed', error);
      }
    }
  }, [chart]);

  return <div ref={containerRef} className="mermaid-container" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }} />;
}

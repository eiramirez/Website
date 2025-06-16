import React from 'react';

function Portfolio()
{
    return (
        // Make a container that fills the viewport below the navbar
        <div style={{
          position: 'fixed',
          top: '56px',      // adjust if your navbar is taller or shorter
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden'
        }}>
          <iframe
            src="\Portfolio.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      );
}

export default Portfolio;

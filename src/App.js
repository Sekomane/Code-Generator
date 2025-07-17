import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const App = () => {
  const [input, setInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');


  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Code Generator App</h2>
      <textarea
        rows={4}
        placeholder="Write that you want to generate here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', fontSize: 16, padding: 8, marginBottom: '1rem' }}
      />

      {generatedCode && (
        <pre
          style={{
            marginTop: '2rem',
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            borderRadius: 4,
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
          }}
        >
          {generatedCode}
        </pre>
      )}

      {/* Display QR Code of input text */}
      {input.trim() && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3>QR Code for your input:</h3>
          <QRCodeCanvas value={input} size={200} />
        </div>
      )}
    </div>
  );
};

export default App;

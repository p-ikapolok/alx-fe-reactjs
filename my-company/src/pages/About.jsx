function About() {
  return (
    <div style={{ 
      padding: '40px',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        About Us
      </h1>
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Our History</h3>
          <p>Founded in 2010, we've grown from a small startup to a market leader in tech solutions.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Our Mission</h3>
          <p>To empower businesses through innovative technology and exceptional service.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
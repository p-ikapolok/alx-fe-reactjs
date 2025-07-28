function Home() {
  return (
    <div style={{ 
      padding: '40px',
      textAlign: 'center',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#2c3e50' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
        We deliver innovative solutions to help your business grow in the digital age.
        Our team of experts is dedicated to excellence in every project we undertake.
      </p>
    </div>
  );
}

export default Home;
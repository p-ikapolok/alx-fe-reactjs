function Services() {
  const services = [
    { name: 'Web Development', description: 'Custom websites and web applications' },
    { name: 'Mobile Apps', description: 'iOS and Android application development' },
    { name: 'Cloud Solutions', description: 'Scalable cloud infrastructure and services' },
    { name: 'Data Analytics', description: 'Business intelligence and data visualization' }
  ];

  return (
    <div style={{ 
      padding: '40px',
      minHeight: 'calc(100vh - 160px)'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Our Services</h1>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#3498db' }}>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
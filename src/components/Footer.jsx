function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px'
    }}>
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <span style={{ margin: '0 10px' }}>Privacy Policy</span>
        <span style={{ margin: '0 10px' }}>Terms of Service</span>
      </div>
    </footer>
  );
}

export default Footer;
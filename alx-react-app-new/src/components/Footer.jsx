function Footer() {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '30px',
      fontSize: '0.9rem',
      position: 'fixed',
      bottom: '0',
      width: '100%'
    }}>
      <p style={{ margin: '0' }}>
        © {new Date().getFullYear()} My Travel App. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

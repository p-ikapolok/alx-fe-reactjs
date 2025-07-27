function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: 'blue', marginTop: 0 }}>{props.name}</h2>
      <p style={{ margin: '8px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ margin: '8px 0' }}>Bio: {props.bio}</p>
    </div>
  );
}

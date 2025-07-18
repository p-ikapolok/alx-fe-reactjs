const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '2px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px',
            maxWidth: '400px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ 
                color: 'darkblue',
                borderBottom: '1px solid #eee',
                paddingBottom: '10px'
            }}>{props.name}</h2>
            <p style={{ fontSize: '16px' }}>
                Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
            </p>
            <p style={{ 
                fontStyle: 'italic',
                color: '#555'
            }}>Bio: {props.bio}</p>
        </div>
    );
};

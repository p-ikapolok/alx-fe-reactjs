function MainContent() {
    return (
        <main style={{
            padding: '20px',
            margin: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            border: '1px solid #ddd',
            fontSize: '1.1rem',
            lineHeight: '1.6'
        }}>
            <p style={{
                color: '#333',
                margin: '0',
                fontWeight: '500'
            }}>
                I love to visit <span style={{color: '#e74c3c', fontWeight: 'bold'}}>New York</span>, 
                <span style={{color: '#3498db', fontWeight: 'bold'}}> Paris</span>, and 
                <span style={{color: '#2ecc71', fontWeight: 'bold'}}> Tokyo</span>.
            </p>
        </main>
    );
}

export default MainContent;
}

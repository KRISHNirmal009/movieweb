import React from 'react';
// import './footer.css';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">About my cars</h3>
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="constact">Contact</a></li>
            <li><a href="signup">signup</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Features</h3>
          <ul className="footer-nav">
            <li><a href="/" >Home</a></li>
            <li><a href="constact">Contact</a></li>
            <li><a href="signup">signup</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Resources</h3>
          <ul className="footer-nav">
            <li><a href="" >Home</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="signup">signup</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
// const styles = {
//     footer: {
//       backgroundColor: '#666',
//       color: '#FFF',
//       textAlign: 'center',
//       padding: '20px',
      
//       left: '0',
//       bottom: '0',
//       width: '100%'
//     },
  
  
//   };
export default Footer;
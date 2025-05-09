import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    <div>
                        <span className="navbar-logo">Iqronix</span>
                    </div>
                    <div className="navbar-menu">
                        <a href="/" className="navbar-link">Home</a>
                        <a href="/about" className="navbar-link">About</a>
                        <a href="/contact" className="navbar-link">Contact</a>
                        <button className="navbar-cta">Get Started</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
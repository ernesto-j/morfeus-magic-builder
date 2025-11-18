import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Morfeus Domains */}
          <div>
            <h3 className="text-lg font-bold mb-4">Morfeus Domains</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/data" className="text-gray-400 hover:text-white transition-colors">
                  Morfeus Data
                </Link>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Morfeus Cyber (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Morfeus Engineer (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Morfeus Architecture (Coming Soon)
                </span>
              </li>
              <li>
                <Link to="/blueprints" className="text-gray-400 hover:text-white transition-colors">
                  Morfeus Blueprints
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/data#audits" className="text-gray-400 hover:text-white transition-colors">
                  Agentic Audits
                </Link>
              </li>
              <li>
                <Link to="/data#modernization" className="text-gray-400 hover:text-white transition-colors">
                  Agentic Modernization
                </Link>
              </li>
              <li>
                <Link to="/data#migration" className="text-gray-400 hover:text-white transition-colors">
                  Agentic Migration
                </Link>
              </li>
              <li>
                <Link to="/agentic-consulting" className="text-gray-400 hover:text-white transition-colors">
                  Agentic Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/data#case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="https://docs.morfeus.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <Link to="/blueprints" className="text-gray-400 hover:text-white transition-colors">
                  Free Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a 
                  href="https://app.scoreapp.com/st/ZnJhbWV3b3JrfHx8fHx8aHR0cHM6Ly9tb3JmZXVzLXNpdGUubG92YWJsZS5hcHA="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 Morfeus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

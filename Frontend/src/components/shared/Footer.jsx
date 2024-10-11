import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h2 className="text-lg font-semibold mb-4">About Us</h2>
                <p className="text-sm text-gray-400">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsam dignissimos unde dolor molestias possimus id minima ea maxime fugiat voluptatibus eligendi dolore culpa eius ducimus harum rerum explicabo aliquam.
                </p>
              </div>
    
              {/* Column 2 */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#about" className="hover:text-blue-400">About</a></li>
                  <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                  <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
    
              {/* Column 3 */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </div>
              </div>
            </div>
    
            {/* Divider */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Job Hunt. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      );
}

export default Footer

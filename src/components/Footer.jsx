import React from 'react';
import Logo from './logo_stat.svg'; // Correct path to the logo

const Footer = () => {
  return (
    <footer className="bg-[#0D2436] dark:bg-gray-900 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-12 gap-y-8 md:gap-y-12">
        
        {/* Small Devices: Logo and Links stacked */}
        <div className="col-span-12 flex flex-col items-center space-y-4 md:hidden">
          {/* Company Logo */}
          <img src={Logo} alt="Company Logo" className="w-40 h-auto mb-2" />
          <p className="text-gray-300 text-center">Echoing Success from Startups to Giants</p>
          
          {/* Footer Links */}
          <div className="flex flex-col items-center space-y-2 text-xs mt-6">
            <a href="/company" className="text-gray-300 hover:text-white transition-colors">Company</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a>
          </div>
        </div>

        {/* Medium and Large Devices: Logo and Links side-by-side */}
        <div className="hidden md:flex md:col-span-12 justify-between items-start">
          {/* Left Section: Company Logo and Slogan */}
          <div className="flex flex-col items-start space-y-2">
            <img src={Logo} alt="Company Logo" className="w-40 h-auto mb-2" />
            <p className="text-gray-300">Echoing Success from Startups to Giants</p>
          </div>

          {/* Right Section: Footer Links */}
          <div className="flex flex-col items-start space-y-2 text-sm">
            <a href="/company" className="text-gray-300 hover:text-white transition-colors">Company</a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a>
          </div>
        </div>

        {/* Social Media Icons: Responsive for all devices */}
        <div className="col-span-12 flex justify-center mt-6 space-x-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/startupechoes/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/startup_echoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://whatsapp.com/channel/0029VapxJYZDjiOgCZgaRn3O "
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition transform hover:scale-110"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6">
        <p className="text-center text-gray-500 p-4">
          Copyright &copy; {new Date().getFullYear()} StartupEchoes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

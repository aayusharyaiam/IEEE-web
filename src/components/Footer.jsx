import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c1324] border-t border-[#2e3447]/15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-[#b0c8eb] mb-6 block">IEEE BITP</span>
          <p className="text-[#b0c8eb]/50 text-sm leading-relaxed">
            Student branch at Birla Institute of Technology, Patna campus. Empowering students through technical excellence.
          </p>
        </div>
        <div>
          <h6 className="text-[#b0c8eb] font-bold text-xs uppercase tracking-widest mb-6">Quick Links</h6>
          <ul className="space-y-4">
            <li><a className="text-[#b0c8eb]/50 text-sm hover:text-[#3cd7ff] hover:translate-x-1 transition-all block" href="#">About IEEE</a></li>
            <li><a className="text-[#b0c8eb]/50 text-sm hover:text-[#3cd7ff] hover:translate-x-1 transition-all block" href="#">IEEE Xplore</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-[#b0c8eb] font-bold text-xs uppercase tracking-widest mb-6">Connect</h6>
          <ul className="space-y-4">
            <li><a className="text-[#b0c8eb]/50 text-sm hover:text-[#3cd7ff] hover:translate-x-1 transition-all block" href="#">LinkedIn</a></li>
            <li><a className="text-[#b0c8eb]/50 text-sm hover:text-[#3cd7ff] hover:translate-x-1 transition-all block" href="#">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-[#b0c8eb] font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h6>
          <p className="text-[#b0c8eb]/50 text-sm leading-relaxed">
            BIT Patna Campus, <br/>
            Bihar 800014, India <br/>
            ieeebitp@gmail.com
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-[#2e3447]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-[#b0c8eb]/30 text-xs">© 2024 IEEE Student Branch BIT Patna. Engineering the Future.</p>
        <p className="text-[#b0c8eb]/50 text-sm">
          made with ❤️ by <a href="https://www.linkedin.com/in/aayusharyaiam/" target="_blank" rel="noopener noreferrer" className="text-[#3cd7ff] hover:underline font-medium">Aayush Arya</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

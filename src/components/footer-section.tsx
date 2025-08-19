import { HardHat, Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

export const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoIcon} alt="FairFundzz" className="h-12 w-12" />
              <div>
                <h2 className="text-2xl font-bold">FairFundzz</h2>
                <p className="text-white/80">Fair Wages Platform</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              Empowering construction workers with transparent wage management, secure time tracking, and fair compensation for every hour worked.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary-hover transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary-hover transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary-hover transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-white/80">support@fairfundzz.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-white/80">Construction District, City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 FairFundzz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
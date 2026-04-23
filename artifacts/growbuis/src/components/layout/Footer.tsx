import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-10 sm:mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-6 inline-flex">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <rect width="36" height="36" rx="8" fill="currentColor" className="text-primary" />
                <rect x="7" y="22" width="5" height="8" rx="1.5" fill="white" fillOpacity="0.5" />
                <rect x="15.5" y="16" width="5" height="14" rx="1.5" fill="white" fillOpacity="0.75" />
                <rect x="24" y="10" width="5" height="20" rx="1.5" fill="white" />
                <polyline points="9.5,21 18,15 26.5,9" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="26.5" cy="9" r="2" fill="#C9A84C" />
              </svg>
              <span className="font-bold text-xl tracking-tight leading-none">
                <span className="text-foreground">Grow</span><span className="text-primary">Buis</span><span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground max-w-sm mb-4 sm:mb-6">
              A serious, results-driven digital marketing agency built for businesses that mean business. We deliver structured precision and forward momentum.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">Navigation</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/results" className="text-sm text-muted-foreground hover:text-primary transition-colors">Results & Cases</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 sm:mb-6 text-sm sm:text-base">Contact</h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-sm text-muted-foreground">
              <li>hello@growbuis.com</li>
              <li>+1 (555) 123-4567</li>
              <li>100 Strategy Blvd, Suite 400<br/>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} GrowBuis Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

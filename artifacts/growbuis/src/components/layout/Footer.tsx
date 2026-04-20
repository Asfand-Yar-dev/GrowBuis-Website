import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                G
              </div>
              <span className="font-display font-bold text-xl tracking-tight">GrowBuis.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              A serious, results-driven digital marketing agency built for businesses that mean business. We deliver structured precision and forward momentum.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/results" className="text-muted-foreground hover:text-primary transition-colors">Results & Cases</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Contact</h4>
            <ul className="flex flex-col gap-3 text-muted-foreground">
              <li>hello@growbuis.com</li>
              <li>+1 (555) 123-4567</li>
              <li>100 Strategy Blvd, Suite 400<br/>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GrowBuis Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

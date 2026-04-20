import { RootLayout } from "@/components/layout/RootLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <RootLayout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Initiate <br/>the conversation.</h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-md leading-relaxed">
                Whether you need a complete acquisition overhaul or targeted strategic execution, we're ready to discuss your objectives.
              </p>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Direct Inquiry</h4>
                  <p className="text-lg font-medium">hello@growbuis.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Headquarters</h4>
                  <p className="text-lg font-medium">100 Strategy Blvd, Suite 400<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="p-6 bg-card border border-border rounded-xl max-w-sm">
                <h4 className="font-bold mb-2">Prefer instant communication?</h4>
                <p className="text-sm text-muted-foreground mb-4">Connect directly with our strategy team via WhatsApp for a rapid response.</p>
                <a 
                  href="https://wa.me/message/placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium transition-colors w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-card p-8 md:p-10 rounded-2xl border border-border"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Request a Consultation</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Marcus" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Thorne" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" placeholder="m.thorne@company.com" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Corp" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label>Primary Interest</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paid">Paid Advertising</SelectItem>
                      <SelectItem value="seo">SEO & Content</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="leadgen">Lead Generation</SelectItem>
                      <SelectItem value="analytics">Performance Analytics</SelectItem>
                      <SelectItem value="audit">Comprehensive Audit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe your current acquisition challenges or growth goals..." 
                    className="min-h-[120px] bg-background"
                  />
                </div>
                
                <Button size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}

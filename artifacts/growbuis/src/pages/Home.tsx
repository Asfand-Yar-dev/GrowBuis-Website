import { RootLayout } from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Target, TrendingUp, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-secondary blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium">Accepting new clients for Q3</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">predictable growth</span> for serious businesses.
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No vanity metrics. No guesswork. Just structured precision, rigorous analytics, and campaigns that directly impact your bottom line. We are the strategy consultancy for your digital marketing.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/results">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-medium border-border hover:bg-muted">
                  View Our Results
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Key stats row */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: "$120M+", label: "Revenue Generated" },
              { value: "4.8x", label: "Average ROI" },
              { value: "150+", label: "Active Clients" },
              { value: "98%", label: "Retention Rate" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Capabilities designed for dominance.</h2>
              <p className="text-lg text-muted-foreground">We focus exclusively on high-leverage digital strategies that create measurable business impact.</p>
            </div>
            <Link href="/services">
              <Button variant="outline" className="h-12 px-6 border-primary/20 text-primary hover:bg-primary/10">
                Explore All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="h-6 w-6 text-secondary" />,
                title: "Paid Advertising",
                desc: "High-precision Meta & Google Ads campaigns optimized for CAC and LTV, not just clicks."
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-primary" />,
                title: "SEO & Content",
                desc: "Structural search dominance that builds lasting organic moats against your competitors."
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-secondary" />,
                title: "Performance Analytics",
                desc: "Rigorous tracking and attribution modeling so you know exactly what drives revenue."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-6 border border-border">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Methodology Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our methodology is our unfair advantage.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't do "spray and pray." Every campaign we launch is backed by rigorous data modeling, market research, and continuous testing protocols.
              </p>
              
              <div className="space-y-4">
                {[
                  "Deep-dive business audits before any ad spend",
                  "Cross-channel attribution modeling",
                  "Continuous A/B/n testing of creatives and copy",
                  "Weekly strategic transparent reporting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button className="h-12 px-6 font-medium">Read Our Story</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted border border-border flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              {/* Fallback pattern if image fails */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 p-8 glassmorphism bg-background/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl max-w-sm w-full mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-display font-semibold">Q3 Growth Trajectory</div>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Revenue</span>
                      <span className="font-medium text-primary">+42%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">CAC</span>
                      <span className="font-medium text-secondary">-18%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Ready to scale seriously?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss your business objectives and how our methodology can help you achieve them.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Your Strategy Session
            </Button>
          </Link>
        </div>
      </section>
    </RootLayout>
  );
}

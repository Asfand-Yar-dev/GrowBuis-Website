import { RootLayout } from "@/components/layout/RootLayout";
import { motion } from "framer-motion";
import { Users, Award, Shield, Zap } from "lucide-react";
import officeImg from "@/assets/about-office.png";

export default function About() {
  return (
    <RootLayout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Built for businesses that mean business.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GrowBuis isn't your typical digital agency. We were founded out of frustration with the industry standard of vanity metrics and empty promises. We operate like a high-end strategy consultancy that happens to execute flawless digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              className="aspect-square bg-muted rounded-2xl border border-border relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={officeImg}
                alt="GrowBuis Agency Office"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-4xl font-display font-bold text-foreground mb-2">Est. 2018</div>
                <div className="text-primary font-medium">Over a half decade of engineered growth</div>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <Award className="text-secondary h-6 w-6" />
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide absolute clarity, precision, and measurable ROI in a landscape crowded with ambiguity. We partner with founders and CMOs to build scalable acquisition engines that drive enterprise value.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <Shield className="text-primary h-6 w-6" />
                  The Consultancy Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We don't take orders; we provide counsel. If we think a channel won't work for your unit economics, we'll tell you. We audit thoroughly, model rigorously, and execute with precision.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                  <Zap className="text-secondary h-6 w-6" />
                  Execution Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ideas are cheap. Flawless execution is rare. Our teams are composed of senior specialists, not junior account managers. You get direct access to the talent driving your growth.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-border pt-24">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Leadership & Expertise</h2>
              <p className="text-muted-foreground">The minds behind the methodology.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus Thorne", role: "Managing Partner", desc: "Former consulting principal with 12 years in performance marketing." },
                { name: "Elena Rostova", role: "Head of Strategy", desc: "Analytics obsessive. Scaled three B2B SaaS companies to acquisition." },
                { name: "David Chen", role: "Director of Performance", desc: "Manages $50M+ in annual ad spend across complex multi-touch funnels." }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  className="bg-card p-6 rounded-xl border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <div className="text-primary font-medium mb-4 text-sm">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}

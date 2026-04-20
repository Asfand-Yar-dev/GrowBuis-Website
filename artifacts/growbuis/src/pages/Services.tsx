import { RootLayout } from "@/components/layout/RootLayout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Share2, 
  Target, 
  Search, 
  FileText, 
  Users, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import servicesDashboard from "@/assets/services-dashboard.png";

const services = [
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Social Media Marketing",
    desc: "Strategic brand positioning across key social channels. We build authority and engagement that translates to pipeline.",
    benefits: ["Platform-specific strategies", "B2B LinkedIn dominance", "Community management"]
  },
  {
    icon: <Target className="h-8 w-8 text-secondary" />,
    title: "Paid Advertising",
    desc: "Capital-efficient media buying across Meta, Google, and LinkedIn. Rigorously optimized for Customer Acquisition Cost.",
    benefits: ["Cross-channel attribution", "Creative A/B testing", "Continuous ROI modeling"]
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO",
    desc: "Technical and structural search engine optimization. Building organic moats that compound in value over time.",
    benefits: ["Technical site audits", "High-intent keyword mapping", "Authority building"]
  },
  {
    icon: <FileText className="h-8 w-8 text-secondary" />,
    title: "Content Strategy",
    desc: "High-value content assets that educate your market, accelerate deal cycles, and establish thought leadership.",
    benefits: ["Whitepapers & Reports", "SEO-driven blog engines", "Sales enablement assets"]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Lead Generation",
    desc: "End-to-end outbound and inbound systems designed to deliver qualified meetings to your sales team consistently.",
    benefits: ["Account-Based Marketing", "Cold email infrastructure", "Conversion rate optimization"]
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-secondary" />,
    title: "Performance Analytics",
    desc: "Custom data infrastructure and dashboarding. Know exactly which touchpoints are driving revenue.",
    benefits: ["Custom Looker/Tableau builds", "Funnel friction analysis", "Weekly strategic reviews"]
  }
];

export default function Services() {
  return (
    <RootLayout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Engineered solutions.</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't offer off-the-shelf packages. We deploy specific strategic capabilities to solve complex acquisition and growth challenges.
            </p>
          </motion.div>

          {/* Dashboard image banner */}
          <motion.div
            className="mb-20 rounded-2xl overflow-hidden border border-border relative"
            style={{ height: "320px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={servicesDashboard}
              alt="Marketing analytics dashboard"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-sm text-primary font-medium tracking-widest uppercase mb-2">Real-time intelligence</div>
              <div className="text-2xl font-bold">Every campaign, fully tracked.</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-card p-8 rounded-2xl border border-border flex flex-col h-full hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-border mt-auto">
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center text-sm font-medium text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-24 p-12 rounded-2xl bg-muted border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Not sure which capabilities you need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              That's what our audits are for. We'll analyze your current funnel, unit economics, and market position to prescribe exactly what will move the needle.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request an Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </RootLayout>
  );
}

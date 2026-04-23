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
    icon: <Share2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Social Media Marketing",
    desc: "Strategic brand positioning across key social channels. We build authority and engagement that translates to pipeline.",
    benefits: ["Platform-specific strategies", "B2B LinkedIn dominance", "Community management"]
  },
  {
    icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />,
    title: "Paid Advertising",
    desc: "Capital-efficient media buying across Meta, Google, and LinkedIn. Rigorously optimized for Customer Acquisition Cost.",
    benefits: ["Cross-channel attribution", "Creative A/B testing", "Continuous ROI modeling"]
  },
  {
    icon: <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "SEO",
    desc: "Technical and structural search engine optimization. Building organic moats that compound in value over time.",
    benefits: ["Technical site audits", "High-intent keyword mapping", "Authority building"]
  },
  {
    icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />,
    title: "Content Strategy",
    desc: "High-value content assets that educate your market, accelerate deal cycles, and establish thought leadership.",
    benefits: ["Whitepapers & Reports", "SEO-driven blog engines", "Sales enablement assets"]
  },
  {
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
    title: "Lead Generation",
    desc: "End-to-end outbound and inbound systems designed to deliver qualified meetings to your sales team consistently.",
    benefits: ["Account-Based Marketing", "Cold email infrastructure", "Conversion rate optimization"]
  },
  {
    icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />,
    title: "Performance Analytics",
    desc: "Custom data infrastructure and dashboarding. Know exactly which touchpoints are driving revenue.",
    benefits: ["Custom Looker/Tableau builds", "Funnel friction analysis", "Weekly strategic reviews"]
  }
];

export default function Services() {
  return (
    <RootLayout>
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mb-12 sm:mb-20 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Engineered solutions.</h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              We don't offer off-the-shelf packages. We deploy specific strategic capabilities to solve complex acquisition and growth challenges.
            </p>
          </motion.div>

          {/* Dashboard image banner */}
          <motion.div
            className="mb-12 sm:mb-20 rounded-2xl overflow-hidden border border-border relative h-40 sm:h-56 md:h-80"
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
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8">
              <div className="text-xs sm:text-sm text-primary font-medium tracking-widest uppercase mb-1 sm:mb-2">Real-time intelligence</div>
              <div className="text-lg sm:text-2xl font-bold">Every campaign, fully tracked.</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-card p-5 sm:p-8 rounded-2xl border border-border flex flex-col h-full hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-5 sm:mb-8">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="pt-4 sm:pt-6 border-t border-border mt-auto">
                  <ul className="space-y-2 sm:space-y-3">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center text-sm font-medium text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 sm:mt-24 p-6 sm:p-8 md:p-12 rounded-2xl bg-muted border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Not sure which capabilities you need?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              That's what our audits are for. We'll analyze your current funnel, unit economics, and market position to prescribe exactly what will move the needle.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Request an Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </RootLayout>
  );
}

import { RootLayout } from "@/components/layout/RootLayout";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import resultsHero from "@/assets/results-hero.png";

const revData = [
  { name: 'Q1', revenue: 120 },
  { name: 'Q2', revenue: 180 },
  { name: 'Q3', revenue: 290 },
  { name: 'Q4', revenue: 480 },
];

const cacData = [
  { name: 'Month 1', cac: 150 },
  { name: 'Month 2', cac: 135 },
  { name: 'Month 3', cac: 110 },
  { name: 'Month 4', cac: 95 },
  { name: 'Month 5', cac: 85 },
  { name: 'Month 6', cac: 80 },
];

export default function Results() {
  return (
    <RootLayout>
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mb-12 sm:mb-16 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">The proof is in the math.</h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              We measure success by pipeline generated, CAC reduced, and top-line revenue growth. Here is a look at what structured precision achieves.
            </p>
          </motion.div>

          {/* Results hero visual */}
          <motion.div
            className="mb-12 sm:mb-20 rounded-2xl overflow-hidden border border-border relative h-40 sm:h-56 md:h-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={resultsHero}
              alt="Growth metrics visualization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex flex-wrap gap-4 sm:gap-8 md:gap-12">
              {[
                { value: "$120M+", label: "Revenue Generated" },
                { value: "4.8x", label: "Average Client ROI" },
                { value: "98%", label: "Retention Rate" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Case Study 1 */}
          <motion.div
            className="mb-12 sm:mb-24 bg-card rounded-2xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-5 sm:mb-6 w-fit border border-primary/20">
                  Enterprise SaaS
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Scaling outbound without scaling CAC.</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  A leading compliance software provider needed to quadruple their qualified pipeline within 12 months for an upcoming Series B, without blowing out their customer acquisition cost.
                </p>
                <div className="grid grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8 border-t border-border pt-6 sm:pt-8">
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">300%</div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">Pipeline Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">-46%</div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">CAC Reduction</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-6 sm:p-10 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border">
                <div className="w-full h-56 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" vertical={false} />
                      <XAxis dataKey="name" stroke="#ffffff50" tick={{fill: '#ffffff80'}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#ffffff50" tick={{fill: '#ffffff80'}} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val}k`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0c0d0c', borderColor: '#ffffff20', borderRadius: '8px' }}
                        itemStyle={{ color: '#dea73a' }}
                      />
                      <Bar dataKey="revenue" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} maxBarSize={60} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            className="mb-12 sm:mb-24 bg-card rounded-2xl border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-muted p-6 sm:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border order-2 lg:order-1">
                <div className="w-full h-56 sm:h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cacData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" vertical={false} />
                      <XAxis dataKey="name" stroke="#ffffff50" tick={{fill: '#ffffff80'}} axisLine={false} tickLine={false} />
                      <YAxis stroke="#ffffff50" tick={{fill: '#ffffff80'}} axisLine={false} tickLine={false} tickFormatter={(val) => `$${val}`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#0c0d0c', borderColor: '#ffffff20', borderRadius: '8px' }}
                        itemStyle={{ color: '#427552' }}
                      />
                      <Line type="monotone" dataKey="cac" stroke="hsl(var(--primary))" strokeWidth={4} dot={{ r: 6, fill: 'hsl(var(--background))', strokeWidth: 2 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-5 sm:mb-6 w-fit border border-secondary/20">
                  B2B Professional Services
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Re-engineering the paid acquisition funnel.</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  A high-ticket consulting firm was bleeding cash on broad-match Google Ads. We rebuilt their tracking infrastructure, deployed rigorous ABM tactics on LinkedIn, and slashed wasted spend.
                </p>
                <div className="grid grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8 border-t border-border pt-6 sm:pt-8">
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">$2.1M</div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">New ARR</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">5.2x</div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground">Return on Ad Spend</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </RootLayout>
  );
}

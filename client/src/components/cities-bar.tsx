import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CITIES } from "@/lib/site-data";

export function CitiesBar() {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-muted/40" data-testid="section-cities" aria-label="Trusted across India">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-xs font-semibold text-primary tracking-[0.15em] uppercase">
              Trusted Across India
            </p>
          </div>
          <div className="sm:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex items-center gap-x-3" style={{ width: "max-content" }}>
              {CITIES.map((city, index) => (
                <span key={city} className="text-xs text-muted-foreground font-medium whitespace-nowrap" data-testid={`city-${index}`}>
                  {city}
                  {index < CITIES.length - 1 && <span className="ml-3 text-border">|</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-x-3 gap-y-2 max-w-3xl mx-auto">
            {CITIES.map((city, index) => (
              <span key={city} className="text-sm text-muted-foreground font-medium" data-testid={`city-${index}`}>
                {city}
                {index < CITIES.length - 1 && <span className="ml-3 text-border">|</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

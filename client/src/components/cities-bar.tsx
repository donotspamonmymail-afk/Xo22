import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { CITIES } from "@/lib/site-data";

export function CitiesBar() {
  return (
    <section className="py-14 md:py-20 bg-muted/40" data-testid="section-cities" aria-label="Trusted across India">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-primary tracking-wide uppercase" data-testid="text-cities-heading">
              Trusted by Businesses Across India
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {CITIES.map((city, index) => (
              <span
                key={city}
                className="text-sm text-muted-foreground font-medium"
                data-testid={`text-city-${city.toLowerCase()}`}
              >
                {city}
                {index < CITIES.length - 1 && (
                  <span className="ml-3 text-border select-none" aria-hidden="true">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

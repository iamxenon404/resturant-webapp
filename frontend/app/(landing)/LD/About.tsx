export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Reclaiming Culinary Freedom For Local Restaurants
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Third-party delivery aggregates strip up to 30% of revenue from local culinary spaces. We operate differently. Our model cuts out corporate delivery middlemen completely, allowing us to source local gourmet ingredients, maintain peak dish freshness, and deliver right to your location.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/50">
                <h4 className="text-2xl font-bold text-amber-600">100%</h4>
                <p className="text-xs text-slate-500 uppercase font-semibold mt-1">Direct Delivery Channel</p>
              </div>
              <div className="p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/50">
                <h4 className="text-2xl font-bold text-amber-600">&lt; 45m</h4>
                <p className="text-xs text-slate-500 uppercase font-semibold mt-1">Average Dispatch Cycle</p>
              </div>
            </div>
          </div>
          <div className="relative h-[350px] lg:h-[450px] bg-gradient-to-tr from-amber-500 to-orange-600 rounded-2xl shadow-xl flex items-center justify-center p-8 text-white text-center">
            <div>
              <p className="text-2xl font-serif italic mb-4">"Freshness isn't a variable, it is an absolute requirement."</p>
              <div className="w-12 h-1 bg-white/40 mx-auto rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
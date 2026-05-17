export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">Need Direct Assistance?</h2>
          <p className="text-slate-500 dark:text-slate-400">Our administrative kitchen help desk is open daily from 9:00 AM to 11:00 PM.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl text-left space-y-2">
            <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Kitchen Hotline</h4>
            <p className="text-lg font-medium">+234 (0) 800-CHOW-DOWN</p>
          </div>
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl text-left space-y-2">
            <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Kitchen Location</h4>
            <p className="text-lg font-medium">Victoria Island, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
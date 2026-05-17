'use client';
import { useState } from 'react';

const MOCK_CATEGORIES = ['Swallows & Soups', 'Rice & Grills', 'Sides & Extras'];
const MOCK_ITEMS = [
  { id: '1', name: 'Efo Riro & Pounded Yam', category: 'Swallows & Soups', price: 6500, desc: 'Rich vegetable soup cooked in palm oil with assorted meats, served with fluffy pounded yam.' },
  { id: '2', name: 'Smokey Jollof Rice Combo', category: 'Rice & Grills', price: 5500, desc: 'Authentic firewood-style jollof rice served with peppered grilled chicken shank and plantains.' },
  { id: '3', name: 'Asun Fried Rice', category: 'Rice & Grills', price: 6000, desc: 'Spicy wok-tossed rice mixed thoroughly with locally smoked peppered goat meat chunks.' },
  { id: '4', name: 'Gourmet Kelewele', category: 'Sides & Extras', price: 2000, desc: 'Spiced dodo cubes tossed in ginger, chili flakes, and local seasonings.' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(MOCK_CATEGORIES[0]);

  return (
    <section id="menu" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore Our Kitchen Menu</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Select a category below to browse items prepared fresh on order placement.</p>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {MOCK_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat ? 'bg-amber-600 text-white shadow-md' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_ITEMS.filter(item => item.category === activeCategory).map((item) => (
            <div key={item.id} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-all duration-200">
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-amber-600 dark:text-amber-400 font-extrabold whitespace-nowrap">₦{item.price.toLocaleString()}</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{item.desc}</p>
              </div>
              <button className="mt-4 w-full py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 dark:hover:bg-amber-600 text-white rounded-xl text-sm font-medium transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
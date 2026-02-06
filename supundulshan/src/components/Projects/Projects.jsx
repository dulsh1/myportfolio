import { useState } from 'react';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Development' },
  { key: 'graphic', label: 'Graphic Design' },
  { key: 'motion', label: 'Motion Graphics' },
];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              active === c.key
                ? 'bg-pink-600 text-white'
                : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
            }`}
          >
            {c.label}
          </button>
        ))}
        {/* Direct load Graphic Design within Projects */}
        <button
          onClick={() => setActive('graphic')}
          className="rounded-full px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-500"
        >
          Go to Graphic Design
        </button>
        {/* Jump to Work section filtered to Graphic Design */}
        <button
          onClick={() => {
            window.location.hash = 'graphic';
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="rounded-full px-4 py-2 text-sm bg-purple-600 text-white hover:bg-purple-500"
        >
          Open Graphic Design in Work
        </button>
      </div>

      {/* Work Section */}
      <div id="work" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Work items would be mapped here based on the active category */}
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortConfig, SortOption } from '../types/sorting';

interface NoteSorterProps {
  sortConfig: SortConfig;
  onSortChange: (config: SortConfig) => void;
}

export function NoteSorter({ sortConfig, onSortChange }: NoteSorterProps) {
  const options: { value: SortOption; label: string }[] = [
    { value: 'date', label: 'Date' },
    { value: 'title', label: 'Titre' },
    { value: 'color', label: 'Couleur' },
  ];

  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200">
      <select
        value={sortConfig.option}
        onChange={(e) => onSortChange({ 
          ...sortConfig, 
          option: e.target.value as SortOption 
        })}
        className="text-sm border rounded px-2 py-1 flex-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <button
        onClick={() => onSortChange({ 
          ...sortConfig, 
          direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' 
        })}
        className="p-1 hover:bg-gray-100 rounded"
        title={sortConfig.direction === 'asc' ? 'Tri ascendant' : 'Tri descendant'}
      >
        <ArrowUpDown 
          size={16} 
          className={`transform transition-transform ${
            sortConfig.direction === 'desc' ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  );
}
export type SortOption = 'title' | 'date' | 'color';
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  option: SortOption;
  direction: SortDirection;
}
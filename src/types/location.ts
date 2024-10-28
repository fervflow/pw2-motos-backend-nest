export const LOCATIONS = [
  'POTOSI',
  'TARIJA',
  'COCHABAMBA',
  'LA PAZ',
  'SANTA CRUZ',
  'ORURO',
  'CHUQUISACA',
  'BENI',
  'PANDO',
] as const;

export type Location = (typeof LOCATIONS)[number];

export interface Day {
  date: string;
  count: number;
  level: number; // 0-4, or -1 for padding cells
}

export interface Week {
  days: Day[];
}

export interface LCStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissions: { difficulty: string; count: number }[];
  ranking: number;
  activeDays: number;
  streak: number;
}

export interface LCFetchResult {
  weeks: Week[];
  stats: LCStats | null;
  totalSubmissions: number;
}

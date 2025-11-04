import { IconType } from 'react-icons';
import React from 'react';

export interface SectionData {
  id: string;
  title: string;
  summary: string;
  icon: IconType;
}

// Novas interfaces para os detalhes do estudo
export interface StatCardData {
    title: string;
    value: string;
    description: string;
}

export interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

export interface ChartConfig {
  chartType: string;
  data: any;
  title?: string;
}

export interface CalloutData {
  title: string;
  text: string;
  type: 'info' | 'warning' | 'success';
}

export interface QuoteData {
  text: string;
  author?: string;
}

export type ContentBlock =
  | { type: 'title'; content: string }
  | { type: 'subtitle'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'list'; content: string[] }
  | { type: 'table'; content: TableData }
  | { type: 'chart'; content: ChartConfig }
  | { type: 'callout'; content: CalloutData }
  | { type: 'quote'; content: QuoteData }
  | { type: 'reference'; content: string };

export interface StudyDetail extends SectionData {
  stats: StatCardData[];
  chart: React.FC;
  detailedContent: ContentBlock[];
}

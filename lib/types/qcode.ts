// Q-Code Subject (2nd-3rd letters)
export interface QCodeSubject {
  code: string;
  description: string;
  category: string;
  group: string;
}

// Q-Code Condition (4th-5th letters)
export interface QCodeCondition {
  code: string;
  description: string;
  phraseology: string;
}

// NOTAM Categories
export interface QCodeCategory {
  id: string;
  name: string;
  description: string;
}

// Traffic Types
export enum QCodeTraffic {
  IFR = 'I',
  VFR = 'V',
  BOTH = 'IV',
  CHECKLIST = 'K',
  OTHER = 'O',
}

// Purpose Codes
export enum QCodePurpose {
  IMMEDIATE_ATTENTION = 'N',
  OPERATIONAL_SIGNIFICANCE = 'O',
  FLIGHT_OPERATIONS = 'F',
  MISC = 'M',
  CHECKLIST = 'K',
  IMMEDIATE_CHECKLIST = 'B',
}

// Scope Codes
export enum QCodeScope {
  AERODROME = 'A',
  ENROUTE = 'E',
  WARNING = 'W',
  NAVIGATIONAL_WARNING = 'NW',
}

// Complete Q-Code Structure
export interface QCodeComplete {
  subject: QCodeSubject;
  condition: QCodeCondition;
  traffic: QCodeTraffic;
  purpose: QCodePurpose;
  scope: QCodeScope;
  fullCode: string; // e.g., "QMXLC/IV/NBO/A"
}

// Search Result
export interface SearchResult {
  qcode: QCodeComplete;
  relevanceScore: number;
  matchedFields: string[];
}

// Q-Code Builder State
export interface QCodeBuilderState {
  subject?: QCodeSubject;
  condition?: QCodeCondition;
  traffic?: QCodeTraffic;
  purpose?: QCodePurpose;
  scope?: QCodeScope;
}

// History Entry
export interface HistoryEntry {
  id: string;
  qcode: string;
  timestamp: Date;
  type: 'search' | 'builder';
}

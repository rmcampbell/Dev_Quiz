export interface Acronym {
  acronym: string;
  actual: string;
  definition: string;
  additionalAcronyms?: string[];
  notes?: string;
}

export interface Term {
  term: string;
  definition: string;
  notes: string;
  example: string;
}

export interface QuestionTextDTO {
  id: string | null;
  type: string; // "T01ST" | "T02LT" | "T03EM" | "T04PH" | "T05URL"
  title: string;
  description: string;
  helpText?: string;
  order: number;
  required: boolean;
  readonly?: boolean;
  disabled?: boolean;
  answer: string | null;
  maxLength?: number;
}

export interface QuestionNumberDTO {
  id: string | null;
  type: string; // "T01ST" | "T02LT" | "T03EM" | "T04PH" | "T05URL"
  title: string;
  description: string;
  helpText?: string;
  order: number;
  required: boolean;
  readonly?: boolean;
  disabled?: boolean;
  answer: number | null;
}

export interface QuestionSingleChoiceDTO {
  id: string | null;
  type: string;
  title: string;
  description: string;
  helpText?: string;
  order: number;
  required: boolean;
  readonly?: boolean;
  disabled?: boolean;
  answer: string | null;
  options: { value: string | number; title: string | number }[]; // Array of option values
  maxLength?: number;
}

export interface QuestionMultiChoiceDTO {
  id: string | null;
  type: string;
  title: string;
  description: string;
  helpText?: string;
  order: number;
  required: boolean;
  readonly?: boolean;
  disabled?: boolean;
  answer: string[] | null; // Array of selected values
  options: { value: string | number; title: string | number }[]; // Array of option values
  maxLength?: number;
}

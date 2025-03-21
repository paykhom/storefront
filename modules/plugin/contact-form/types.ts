// src/plugins/contactForm/types.ts
export interface FormField {
    name: string;
    type: 'text' | 'email' | 'textarea' | 'submit';
    label: string;
    required?: boolean;
  }
  
  export interface ContactForm {
    id: string;
    title: string;
    fields: FormField[];
  }
  
  export interface Submission {
    formId: string;
    data: Record<string, string>;
    timestamp: string;
  }
  

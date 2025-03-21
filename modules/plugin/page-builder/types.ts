// file: types.ts
export interface PageComponent {
    type: 'header' | 'text' | 'image' | 'button';
    content: string;
    props?: Record<string, any>;
  }
  
  export interface PageLayout {
    id: string;
    name: string;
    components: PageComponent[];
  }
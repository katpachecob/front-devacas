export interface IRequestProps {
    (
      endpoint: string,
      options: RequestInit,
      module: string,
      params?: string
    ): Promise<Response>;
  }
  
  export type THeader = { 'Content-Type'?: string; Authorization?: string };
  
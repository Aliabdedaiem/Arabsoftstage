export interface ApiResponse<T> {
    message?: string;
    data: T;
  }
  
  export interface Ioffer {
    _id?: string;
    name: string;
    salairy: string;
    company: string;
    description: string;
  }
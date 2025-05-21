export interface ImageUrls {
    regular: string; 
    small: string;
    thumb: string;
    full: string;
    raw: string;
  }
  
  export interface ImageResult {
    id: string; 
    urls: ImageUrls;
    alt_description?: string | undefined;
  }
  
  // Інтерфейс для всієї відповіді API
  export interface UnsplashApiResponse {
    results: ImageResult[]; // Це масив об'єктів зображень
    total: number;
    total_pages: number;
    // Якщо вам потрібні інші властивості верхнього рівня, додайте їх
  }
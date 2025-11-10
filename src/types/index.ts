export type Language = 'es' | 'en';

export type Theme = 'light' | 'dark';

export interface Translation {
  nav: {
    home: string;
    portfolio: string;
    bio: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    films: string;
    articles: string;
    criticism: string;
  };
  bio: {
    title: string;
    downloadCV: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
  };
}

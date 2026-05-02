export interface Photo {
    id: string;
    filename: string;
    title?: string;
    description?: string;
    date?: string;
    camera?: string;
    film?: string;
}

export interface Reel {
    id: string;
    name: string;
    description?: string;
    folder: string; // subfolder under public/reels/
    photos: Photo[];
    coverPhoto?: string; // filename of cover photo
}

export type View = 'home' | 'reel' | 'photo' | 'reel-selector';
import { Reel } from '../types';

export const reels: Reel[] = [
    {
        id: 'reel-one',
        name: 'Reel One',
        description: 'Shot with Minolta X-700 on Kodak Gold 200',
        folder: 'reelThree',
        coverPhoto: '000161420001.jpg',
        photos: [
            { id: 'reel1-01', filename: '000161420001.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-02', filename: '000161420002.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-03', filename: '000161420003.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-04', filename: '000161420004.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-05', filename: '000161420005.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-06', filename: '000161420007.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-07', filename: '000161420010.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-08', filename: '000161420017.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-09', filename: '000161420020.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-10', filename: '000161420021.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-11', filename: '000161420022.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-12', filename: '000161420025.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel1-13', filename: '000161420027.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
        ],
    },
    {
        id: 'reel-two',
        name: 'Reel Two',
        description: 'Shot with Minolta X-700 on Kodak Gold 200',
        folder: 'reelTwo',
        coverPhoto: '000156840001.jpg',
        photos: [
            { id: 'reel2-01', filename: '000156840001.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel2-02', filename: '000156840004.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel2-03', filename: '000156840014.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel2-04', filename: '000156840015.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel2-05', filename: '000156840017.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel2-06', filename: '000156840032.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
        ],
    },
    {
        id: 'reel-four',
        name: 'Reel Four',
        description: 'Shot with Minolta X-700 on Kodak Gold 200',
        folder: 'reelFour',
        coverPhoto: '000161700002.jpg',
        photos: [
            { id: 'reel4-01', filename: '000161700002.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-02', filename: '000161700006.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-03', filename: '000161700007.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-04', filename: '000161700009.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-05', filename: '000161700011.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-06', filename: '000161700012.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-07', filename: '000161700013.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-08', filename: '000161700015.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-09', filename: '000161700017.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-10', filename: '000161700018.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-11', filename: '000161700023.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-12', filename: '000161700025.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-13', filename: '000161700026.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-14', filename: '000161700027.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-15', filename: '000161700029.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
            { id: 'reel4-16', filename: '000161700033.jpg', camera: 'Minolta X-700', film: 'Kodak Gold 200' },
        ],
    },
];

export function getReelPhotoUrl(reel: Reel, filename: string): string {
    return `${process.env.PUBLIC_URL}/assets/${reel.folder}/${filename}`;
}
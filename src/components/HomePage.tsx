import React, { useState, useMemo } from 'react';
import { Reel, Photo } from '../types';
import { getReelPhotoUrl } from '../data/reels';
import ReelSelector from './ReelSelector';
import './HomePage.css';

interface Props {
    reels: Reel[];
    onPhotoClick: (photo: Photo, reel: Reel, index: number) => void;
    onOpenReelSelector: () => void;
    onCloseReelSelector: () => void;
    isSelectorOpen: boolean;
    onSelectReel: (reel: Reel) => void;
}

const HomePage: React.FC<Props> = ({
                                       reels, onPhotoClick,
                                       onOpenReelSelector, onCloseReelSelector,
                                       isSelectorOpen, onSelectReel,
                                   }) => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const marqueePhotos = useMemo(() => {
        const all = reels.flatMap(reel =>
            reel.photos.map((photo, index) => ({ photo, reel, index }))
        );
        const shuffled = [...all];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return [...shuffled, ...shuffled];
    }, [reels]);

    return (
        <div className="home">
            <header className="home__header">
                <h1 className="home__title">Sam's Gallery</h1>
                <div className="home__controls">
                    <div className="home__dropdown-wrapper">
                        <button
                            className="home__menu-btn"
                            onClick={isSelectorOpen ? onCloseReelSelector : onOpenReelSelector}
                            aria-haspopup="listbox"
                            aria-expanded={isSelectorOpen}
                        >
                            Reels ▾
                        </button>
                        {isSelectorOpen && (
                            <ReelSelector
                                reels={reels}
                                activeReelId={null}
                                onSelect={(reel) => {
                                    onSelectReel(reel);
                                    onCloseReelSelector();
                                }}
                                onClose={onCloseReelSelector}
                            />
                        )}
                    </div>
                </div>
            </header>

            <main className="home__stage">
                <div className="home__row">
                    {marqueePhotos.map(({ photo, reel, index }, i) => (
                        <button
                            key={`${photo.id}-${i}`}
                            className={`home__photo-btn ${hoveredId === photo.id ? 'home__photo-btn--hovered' : ''}`}
                            onClick={() => onPhotoClick(photo, reel, index)}
                            onMouseEnter={() => setHoveredId(photo.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            aria-label={`View ${photo.title || photo.filename}`}
                        >
                            <img
                                src={getReelPhotoUrl(reel, photo.filename)}
                                alt={photo.title || photo.filename}
                                className="home__photo"
                                loading="lazy"
                            />
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
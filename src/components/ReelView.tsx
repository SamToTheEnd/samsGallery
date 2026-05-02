import React from 'react';
import { Photo, Reel } from '../types';
import { getReelPhotoUrl } from '../data/reels';
import './ReelView.css';

interface Props {
    reel: Reel;
    onBack: () => void;
    onPhotoClick: (photo: Photo, index: number) => void;
}

const ReelView: React.FC<Props> = ({ reel, onBack, onPhotoClick }) => {
    return (
        <div className="reel-view">
            <header className="reel-view__header">
                <button className="reel-view__back" onClick={onBack}>← Gallery</button>
                <div className="reel-view__info">
                    <h2 className="reel-view__name">{reel.name}</h2>
                    {reel.description && <span className="reel-view__desc">{reel.description}</span>}
                </div>
                <span className="reel-view__count">{reel.photos.length} frames</span>
            </header>
            <div className="reel-view__grid">
                {reel.photos.map((photo, index) => (
                    <button
                        key={photo.id}
                        className="reel-grid-item"
                        onClick={() => onPhotoClick(photo, index)}
                        aria-label={`View ${photo.title || photo.filename}`}
                    >
                        <img
                            src={getReelPhotoUrl(reel, photo.filename)}
                            alt={photo.title || photo.filename}
                            className="reel-grid-item__img"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ReelView;
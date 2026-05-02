import React from 'react';
import { Photo, Reel } from '../types';
import { getReelPhotoUrl } from '../data/reels';
import './PhotoView.css';

interface Props {
    photo: Photo;
    reel: Reel;
    photoIndex: number;
    totalPhotos: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const PhotoView: React.FC<Props> = ({
                                        photo, reel, photoIndex, totalPhotos, onClose, onPrev, onNext,
                                    }) => {
    const url = getReelPhotoUrl(reel, photo.filename);

    React.useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose, onPrev, onNext]);

    return (
        <div className="photo-view">
            <header className="photo-view__header">
                <button className="photo-view__back" onClick={onClose}>← Back</button>
                <span className="photo-view__counter">
                    {photoIndex + 1} / {totalPhotos}
                </span>
            </header>
            <div className="photo-view__content">
                <div className="photo-view__image-area">
                    <button className="photo-view__nav photo-view__nav--prev" onClick={onPrev}>‹</button>
                    <img src={url} alt={photo.title || photo.filename} className="photo-view__img" />
                    <button className="photo-view__nav photo-view__nav--next" onClick={onNext}>›</button>
                </div>
                <aside className="photo-view__sidebar">
                    {photo.title && <h2 className="photo-view__title">{photo.title}</h2>}
                    {photo.description && (
                        <p className="photo-view__description">{photo.description}</p>
                    )}
                    <div className="photo-view__meta">
                        {photo.camera && (
                            <div className="photo-view__meta-item">
                                <span className="photo-view__meta-label">Camera</span>
                                <span className="photo-view__meta-value">{photo.camera}</span>
                            </div>
                        )}
                        {photo.film && (
                            <div className="photo-view__meta-item">
                                <span className="photo-view__meta-label">Film</span>
                                <span className="photo-view__meta-value">{photo.film}</span>
                            </div>
                        )}
                        {photo.date && (
                            <div className="photo-view__meta-item">
                                <span className="photo-view__meta-label">Date</span>
                                <span className="photo-view__meta-value">{photo.date}</span>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default PhotoView;
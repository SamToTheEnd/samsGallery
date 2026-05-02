import React, { useState } from 'react';
import { View, Photo, Reel } from './types';
import { reels } from './data/reels';
import HomePage from './components/HomePage';
import ReelView from './components/ReelView';
import PhotoView from './components/PhotoView';

function App() {
    const [view, setView] = useState<View>('home');
    const [activeReel, setActiveReel] = useState<Reel | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [photoIndex, setPhotoIndex] = useState<number>(0);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const goHome = () => {
        setView('home');
        setSelectedPhoto(null);
        setActiveReel(null);          // clear active reel
        setIsSelectorOpen(false);
    };

    const openPhoto = (photo: Photo, reel: Reel, index: number) => {
        setActiveReel(reel);
        setSelectedPhoto(photo);
        setPhotoIndex(index);
        setView('photo');
    };

    const closePhoto = () => {
        if (activeReel) {
            setView('reel');
        } else {
            setView('home');
        }
        setSelectedPhoto(null);
    };

    const goToPrevPhoto = () => {
        if (!activeReel) return;
        const newIndex = (photoIndex - 1 + activeReel.photos.length) % activeReel.photos.length;
        setPhotoIndex(newIndex);
        setSelectedPhoto(activeReel.photos[newIndex]);
    };

    const goToNextPhoto = () => {
        if (!activeReel) return;
        const newIndex = (photoIndex + 1) % activeReel.photos.length;
        setPhotoIndex(newIndex);
        setSelectedPhoto(activeReel.photos[newIndex]);
    };

    return (
        <>
            {view === 'home' && (
                <HomePage
                    reels={reels}
                    onPhotoClick={openPhoto}
                    onOpenReelSelector={() => setIsSelectorOpen(true)}
                    onCloseReelSelector={() => setIsSelectorOpen(false)}
                    isSelectorOpen={isSelectorOpen}
                    onSelectReel={(reel) => {
                        setActiveReel(reel);
                        setView('reel');
                        setIsSelectorOpen(false);
                    }}
                />
            )}

            {view === 'reel' && activeReel && (
                <ReelView
                    reel={activeReel}
                    onBack={goHome}
                    onPhotoClick={(photo, index) => openPhoto(photo, activeReel, index)}
                />
            )}

            {view === 'photo' && selectedPhoto && activeReel && (
                <PhotoView
                    photo={selectedPhoto}
                    reel={activeReel}
                    photoIndex={photoIndex}
                    totalPhotos={activeReel.photos.length}
                    onClose={closePhoto}
                    onPrev={goToPrevPhoto}
                    onNext={goToNextPhoto}
                />
            )}
        </>
    );
}

export default App;
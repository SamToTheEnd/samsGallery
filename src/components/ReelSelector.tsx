import React from 'react';
import { Reel } from '../types';
import './ReelSelector.css';

interface Props {
    reels: Reel[];
    activeReelId: string | null;
    onSelect: (reel: Reel) => void;
    onClose: () => void;
}

const ReelSelector: React.FC<Props> = ({ reels, activeReelId, onSelect, onClose }) => {
    return (
        <div className="reel-dropdown">
            <ul className="reel-dropdown__list" role="listbox">
                {reels.map(reel => (
                    <li key={reel.id} className="reel-dropdown__item" role="option" aria-selected={reel.id === activeReelId}>
                        <button
                            className={`reel-dropdown__btn ${reel.id === activeReelId ? 'reel-dropdown__btn--active' : ''}`}
                            onClick={() => onSelect(reel)}
                        >
                            {reel.name}
                            <span className="reel-dropdown__count">{reel.photos.length} photos</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReelSelector;
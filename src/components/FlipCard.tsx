import React from "react";
import './flipcard.css';

type FlipCardProps = {
    front: React.ReactNode;
    back: React.ReactNode;
};

export default function FlipCard({ front, back }: FlipCardProps) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {front}
                </div>
                <div className="flip-card-back">
                    {back}
                </div>
            </div>
        </div>
    );
}

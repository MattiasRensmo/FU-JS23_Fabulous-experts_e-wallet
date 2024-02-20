import React from 'react';
import '../../interfaces/CreditCard';
/* import  Card from './Card'; */

import './../../sass/abstracts/StackCard.scss'


interface StackCardProps {
    text: string;
    StackCard: string;
}

const StackCard: React.FC<StackCardProps> = (props) => {
    const StackCard_Styles = (): React.CSSProperties => {
        return {
            marginBottom: '-12rem',
        };
    };

    return (
        <div className="card-list-Wrap" style={StackCard_Styles()}>
            {[1, 2, 3].map((index) => (
                <div className="card-Stack" key={index}>
                    Card {index}
                </div>
            ))}
        </div>
    );
};

export default StackCard;












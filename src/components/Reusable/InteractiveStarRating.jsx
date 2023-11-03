import React, { useState } from 'react';
import { RatingInput } from 'react-native-stock-star-rating'

const InteractiveStarRating = () => {
    const [starCount, setStarCount] = useState(3.5);

    return (
        <RatingInput
            rating={starCount}
            setRating={setStarCount}
            size={30}
            maxStars={6}
            bordered={false}
        />
    );
};

export default InteractiveStarRating;
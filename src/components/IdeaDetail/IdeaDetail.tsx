import React from 'react';
import './IdeaDetail.scss';
import {MockData} from '../../MockData/MockData';
import {Link} from 'react-router-dom';
import Tag from '../Tag/Tag';
import {ReactComponent as Arrow} from '../../assets/icons/arrow_short-fat.svg';

const IdeaDetail = () => {
    return (
        <div>
            <a href="/"><Arrow />На главную</a>
        </div>
    );
};

export default IdeaDetail;

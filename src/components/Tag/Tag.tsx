import React, {FunctionComponent} from 'react';
import './Tag.scss';
import {MockData} from '../../MockData/MockData';

type arProps = {
    name: string
    href: string
}[]

const Tag = ({tags}:{tags: arProps}) => {
    return (
        <>
            <div className='-mx-1 flex flex-wrap font-semibold px-7 fs-9'>
                {tags.map(arProps => (
                    <div className='p-1' key={arProps.name}>
                        <div
                            className='bg-white flex h-7 items-center justify-center px-2.5 rounded-full whitespace-nowrap'>
                            {arProps.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tag;

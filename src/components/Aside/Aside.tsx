import React from 'react';
import {Link} from 'react-router-dom';
import {MockDataCategory} from '../../MockData/MockDataCategory';

interface IMockDataCategory {
    id: number
    name: string
    link: string
}

const Aside = () => {
    return (
            <aside>
                <div className="h-11"/>
                <section className="px-10 py-9 rounded-idea-30 shadow-idea-dark-grey">
                    <div className="font-bold fs-14 mb-10 text-center">Популярные категории:</div>
                <ul className="mb-16">
                    {MockDataCategory.map((IMockDataCategory) => {
                        return (
                            <li key={IMockDataCategory.id} className="border-b border-idea-light-purple border-opacity-50">
                                <Link to={IMockDataCategory.href} className="fs-14 text-idea-dark-purple py-4 block">
                                    {IMockDataCategory.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                    <button className="block font-bold fs-12 text-idea-dark-purple">
                        Ещё...
                    </button>
                </section>
            </aside>
    );
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default Aside;

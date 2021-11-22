import React, {useState} from 'react';
import './directory.styles.scss';
import { MenuItemWithRouter } from '../menu-item/menu-item.component';

export const Directory = () => {
    const [sections, setSections] = useState(
        [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'sneakers'
            },
            {
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'women'
            },
            {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'men'
            }
        ]
    );

    return(
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItemWithRouter key={id} {...otherSectionProps}/>
                ))
            }
        </div>
    );
};
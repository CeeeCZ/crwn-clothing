import './collection-preview.styles.scss';
import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ id, title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, index) => index < 4).map(({ id, ...otherCollectionItem }) => (
                <CollectionItem key={id} {...otherCollectionItem} />
            ))}
        </div>
    </div>
)

export default CollectionPreview
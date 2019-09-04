import React from 'react';
import './preview-collection.scss';
import CollectionData from '../shop/shop.data';
import CollectionItem from '../../collection-item/collection-items'

const CollectionPreview = ({title,items}) => (
    <div className = 'collection-preview'>
        <h1 className = 'title'> {title.toUpperCase()} </h1>
        <div className = 'preview'>
            
             {
                items
                .filter((item, index) => index<4 )
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key = {id} {...otherItemProps} />
                ))}  

        </div> 
    </div>
)
export default CollectionPreview;

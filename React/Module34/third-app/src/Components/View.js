import React from 'react';

const View = (props) => {
    const {
        key,
        category,
        name,
        img,
        price,
        seller,
        shipping,
        url,
        stock,
    }=props.product;
    const styles={
        display:"flex"
    }
    const box={
        width:"500px",
        marginLeft:"60px"
    }
    return (
        <div style={styles}>
            <img src={img} style={{width:"22%"}}/>
            <div style={box}>
                <h5>{name}</h5>
                <p><b>Item:</b> {category}</p>
                <p><b>Price:</b> {price}$</p>
                <p><b>Seller:</b> {seller}</p>
                <p><b>Shipping Cost:</b> {shipping}$</p>
                <p><b>Stock:</b> {stock}Pieces</p>
                <a href={url}>See More</a>
            </div>
        </div>
    );
};

export default View;
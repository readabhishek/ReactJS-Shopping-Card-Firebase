import React from 'react';

function CartItem (props) {

    const {handleQtyIncrease, handleQtyDecrease, handleDeleteProd, product} = props;
    const {title, price, qty, imageSrc} = props.product;

    return (
        <div className="item-container">
            <img src={imageSrc} alt="" className="item-image"/>
            <div className="image-details">
                <h3>{title}</h3>              {/*Without Object Destructuring we would have to use full "this.product.title"*/}
                <span>Rs {price}</span>
                <span>Qty: {qty}</span>
                {/*<span>{funct()}</span>   Calling the function passed in Props */}
                {/*<span>{jsx1}</span> Can call JSX passed as Props  */  }
                {/*<span>{component1}</span> This is how we can call a Component Passed as Props  */}
                <div className="product-add-remove-container">
                    <img
                        src="https://as2.ftcdn.net/jpg/01/07/62/07/500_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                        className="add-remove-image"  alt="" onClick={() => props.handleQtyIncrease(props.product)}/>
                    <img
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        className="add-remove-image" alt= "" onClick={() => handleQtyDecrease(product)} />

                    <img
                        src="https://as2.ftcdn.net/jpg/03/15/96/35/500_F_315963545_qxvJX01q9E7LfyLFjlLtfdgvJ0nRyKne.jpg" alt=""
                        className="add-remove-image" atl="" onClick={() => handleDeleteProd(product)}/>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
import React, {useState} from 'react';
import Modal from 'react-modal';
import './products.css';

// import icons
import {IoCloseCircleOutline} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';

const Products = ({data}) => {

    const [modal, setModal] = useState({products: null});

    const openModal = (product) => {
        setModal({product});
    }
    const closeModal = () => {
        setModal({product: null});
    }
    const {product} = modal;

  return (
      <>
    <div className='container products'>
        {
            data.length === 0 ? (
                <h1 className='loading' >Loading...</h1>
            ):
            data.map(
                product=>(
                    <a href={'#' + product.id} className="product" key={product.id} onClick={()=>openModal(product)} >
                        <h3 className="product-title">
                            {product.title}
                        </h3>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-link hover transition">
                            Shop now
                        </div>
                    </a>
                )
            )
        }
    </div>
    <div>
        {
            product &&             
                <Modal isOpen={true} onRequestClose={() => closeModal()} ariaHideApp={false}>
                        <div className='modal-container'>
                            <button className="modal-close" onClick={() => closeModal()} ><IoCloseCircleOutline/></button>
                            <div className="modal-detail">
                                <h2 className='modal-header'>{product.title}</h2>
                                <p className="modal-description">{product.description}</p>
                                <div className="modal-price">
                                    $ {product.price} 
                                    <span>                               
                                        <BsFillStarFill/> {product.rating.rate}
                                    </span>
                                </div>
                                <div className="add-to-cart-btn transition" >Add to cart</div> 
                            </div>
                            <div className="modal-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                        </div>
                </Modal>
        }
    </div>
      </>
  )
}

export default Products
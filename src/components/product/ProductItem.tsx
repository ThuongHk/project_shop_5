import React from 'react'
import { NavLink } from 'react-router-dom'
import { RelatedProduct } from '../../redux/productDetailSlice'
import { ProductModel } from '../../redux/productSlice'

type Props = {
  prod?: ProductModel | RelatedProduct
}

function ProductItem({prod}: Props) {
  return (
    <div className='card'>
        <div className='card-haed position-relative'>
        <i className="fa fa-heartbeat position-absolute mx-2 mt-3 end-0 text-danger"></i>
        <img src={ prod?.image ? prod.image : require('../../assets/img/day.png')} alt='123' className='w-100'/>
        </div>
        <div className='card-body'>
            <h4>{prod?.name ? prod.name : 'Lorem ipsum dolor sit amet.'}</h4>
            <b>{prod?.shortDescription ? prod.shortDescription : 'Lorem ipsum dolor sit am'}</b>
        </div>
        <div className='d-flex'>
            <NavLink className={'w-100 text-center bg-danger text-decoration-none'} to={`/${prod?.id}`} >Buy now</NavLink>
            <b className='w-100 text-center bg-success'>{prod?.price}</b>
        </div>
    </div>
  )
}

export default ProductItem
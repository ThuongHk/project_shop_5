import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/product/ProductItem'
import { callApiDetailProduct, RelatedProduct } from '../../redux/productDetailSlice'
import { DispatchType, RootState } from '../../redux/store'
import { useParams } from 'react-router-dom'

type Props = {}

function Detail({}: Props) {
    const { productDetail } = useSelector((state: RootState) => state.productDetailSlice)
    const params = useParams();
    const dispatch: DispatchType = useDispatch()
    const id: string | undefined = params.id
    useEffect(()=>{
        const actionThunk = callApiDetailProduct(id as string)
        dispatch(actionThunk)
    },[id])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <img src={productDetail?.image} alt='123' />
            </div>
            <div className='col-8'>
                <h5>{productDetail?.name}</h5>
                <b>{productDetail?.shortDescription}</b>
            </div>
        </div>
        <div className='row'>
            {productDetail?.relatedProducts.map((prod: RelatedProduct,index: number) =>{
                return  <div key={index} className='col-4'>
                <ProductItem prod={prod}/>
            </div>
            })}
           
        </div>

    </div>
  )
}

export default Detail
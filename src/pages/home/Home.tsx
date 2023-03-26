import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/product/ProductItem'
import { callApiProduct, ProductModel } from '../../redux/productSlice'
import { RootState, DispatchType } from '../../redux/store'

type Props = {}

function Home({ }: Props) {
  const { arrProduct } = useSelector((state: RootState) => state.productSlice)
  const dispatch: DispatchType = useDispatch()
  useEffect(() => {
    const actionThunk = callApiProduct()
    dispatch(actionThunk)
  }, [])
  return (
    <div className='container'>
      <h2>_Shose Shop_</h2>
      <div className="row">
        {arrProduct.map((prod: ProductModel, index: number) => {
          return <div key={index} className="col-4">
            <ProductItem prod={prod} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Home
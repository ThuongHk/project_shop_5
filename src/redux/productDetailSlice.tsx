import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

export type ProductDetailModel = {
    id: number;
    name: string;
    alias: string;
    price: number;
    feature: boolean;
    description: string;
    size: string[];
    shortDescription: string;
    quantity: number;
    image: string;
    categories: Category[];
    relatedProducts: RelatedProduct[];
}

export interface Category {
    id: string;
    category: string;
}

export interface RelatedProduct {
    id: number;
    name: string;
    alias: string;
    feature: boolean;
    price: number;
    description: string;
    shortDescription: string;
    image: string;
}


export type StateDetail = {
    productDetail: ProductDetailModel | null
}

const initialState: StateDetail = {
    productDetail: null
}

const productDetailSlice = createSlice({
    name: 'productDetailSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder 
        .addCase(callApiDetailProduct.fulfilled, (state: StateDetail, action: PayloadAction<ProductDetailModel>)=>{
                    state.productDetail = action.payload
        })
    }
});

export const { } = productDetailSlice.actions

export default productDetailSlice.reducer

export const callApiDetailProduct = createAsyncThunk('productDetailSlice/callApiDetailProduct', async (id: string)=>{
    try{
        const result = await axios({
           url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
           method: 'GET'
        })
        return result.data.content

    }catch(err){
        console.log(err)
    }
})
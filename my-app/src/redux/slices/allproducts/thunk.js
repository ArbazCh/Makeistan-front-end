
import {  createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProductService } from '../../../services/product.service';


export const fetchAllData = createAsyncThunk('fetchData', async () => {
    try {
      const response = await getAllProductService() ;
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  });
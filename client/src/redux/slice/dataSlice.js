import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: undefined,
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async (value) => {
  const response = await axios.get("http://localhost:8080/customers");
  return response.data.filter((elem) =>
    elem.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
});

export const postData = createAsyncThunk("postData", async (values) => {
  await axios.post("http://localhost:8080/customers", values);
});

export const deleteData = createAsyncThunk("deleteData", async (id) => {
  await axios.delete(`http://localhost:8080/customers/${id}`);
});

export const dataSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data not found";
    });
  },
});

export default dataSlice.reducer;

import api from "./apiConfig";

export const createItem = async item => {
  try {
    console.log('I am here', item)
    const resp = await api.post("/items", item);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getItems = async () => {
  try {
    const resp = await api.get("/items");
    return resp.data.items;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    console.log("ITEMMMMM", item)
    const resp = await api.put(`/items/${id}`, item);
    console.log("Item.js Line 25");
    return resp.data.item;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async id => {
  try {
    const resp = await api.delete(`/items/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async id => {
  try {
    const resp = await api.get(`/items/${id}`);
    return resp.data.item;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async id => {
  try {
    const resp = await api.get(`/users/${id}`);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};
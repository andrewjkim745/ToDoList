import api from "./apiConfig.js";

export const createItem = async item => {
  try {
    console.log('I am here', item)
    const resp = await api.post("/todos", item);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getItems = async () => {
  try {
    const resp = await api.get("/todos");
    return resp.data.items;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    console.log("ITEMMMMM", item)
    const resp = await api.put(`/todos/${id}`, item);
    console.log("Item.js Line 25");
    return resp.data.item;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async id => {
  try {
    const resp = await api.delete(`/todos/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async id => {
  try {
    const resp = await api.get(`/todos/${id}`);
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
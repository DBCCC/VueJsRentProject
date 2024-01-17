
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/'; 

export default class ApiService {
  static async get(endpoint) {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async post(endpoint, data) {
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async put(endpoint, data) {
    try {
      const response = await axios.put(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async patch(endpoint, data) {
    try {
      const response = await axios.patch(`${BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async delete(endpoint) {
    try {
      const response = await axios.delete(`${BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const uploadCsv = async (file, endpoint) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await apiClient.post(endpoint, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data; 
  }
};

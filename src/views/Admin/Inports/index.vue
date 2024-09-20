<template>
    <div>
      <!-- File input -->
      <input type="file" @change="handleFileUpload" />
      <!-- Submit button -->
      <button @click="uploadFile">Upload File</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        file: null,
        BASE_URL: "http://localhost:8000/api", // Ajuste para a URL da sua API
        endpoint: "/upload/funcionarios/",  // Ajuste este endpoint conforme necessário
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];  // Salva o arquivo selecionado
      },
      async uploadFile() {
        if (!this.file) {
          alert("Please select a file first!");
          return;
        }
  
        const formData = new FormData();
        formData.append("file", this.file);  // Adiciona o arquivo ao FormData
  
        try {
          const response = await axios.post(`${this.BASE_URL}${this.endpoint}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
          console.log("File uploaded successfully", response.data);
          // Você pode também lidar com a resposta aqui, como exibir uma mensagem para o usuário.
        } catch (error) {
          console.error("Error uploading file:", error);
          // Trate o erro (por exemplo, exiba uma mensagem de erro para o usuário)
          alert("Error uploading file: " + (error.response?.data?.error || error.message));
        }
      },
    },
  };
  </script>
  
<template>
  <Whiteboard title="Inports" :isSidebarMinimized="isSidebarMinimized">
    <div class="w-full space-y-10">
      <FileInput Label="Importar Arquivo com Nome Atividades.csv" @change="(event) => handleFileUpload(event, 'atividades')" />
      <FileInput Label="Importar Arquivo com Nome Dados Gerais.csv" @change="(event) => handleFileUpload(event, 'dadosGerais')" />
      <FileInput Label="Importar Arquivo com Nome Definição Etapas.csv" @change="(event) => handleFileUpload(event, 'definicaoEtapas')" />
      <FileInput Label="Importar Arquivo com Nome Demissões.csv" @change="(event) => handleFileUpload(event, 'demissoes')" />
      <FileInput Label="Importar Arquivo com Nome Dias Não Contabilizados.csv" @change="(event) => handleFileUpload(event, 'diasNaoContabilizados')" />
      <FileInput Label="Importar Arquivo com Nome Etapas Metas.csv" @change="(event) => handleFileUpload(event, 'etapasMetas')" />
      <FileInput Label="Importar Arquivo com Nome Formações.csv" @change="(event) => handleFileUpload(event, 'formacoes')" />
      <FileInput Label="Importar Arquivo com Nome Frequência.csv" @change="(event) => handleFileUpload(event, 'frequencia')" />
      <FileInput Label="Importar Arquivo com Nome Funções Grupos Etapas.csv" @change="(event) => handleFileUpload(event, 'funcoesGruposEtapas')" />
      <FileInput Label="Importar Arquivo com Nome Motivos Infrequência.csv" @change="(event) => handleFileUpload(event, 'motivosInfrequencia')" />
      <FileInput Label="Importar Arquivo com Nome Tipo Local.csv" @change="(event) => handleFileUpload(event, 'tipoLocal')" />
      <FileInput Label="Importar Arquivo com Nome Ues Perc Gr.csv" @change="(event) => handleFileUpload(event, 'uesPercGr')" />
      <FileInput Label="Importar Arquivo com Nome Valores Grupo.csv" @change="(event) => handleFileUpload(event, 'valoresGrupo')" />

      <div class="flex w-full items-end justify-end mt-8">
        <div>
          <PrimaryButton
            @click="uploadFiles"
            class="bg-blue-500 py-2 px-3 text-sm"
            value="Continuar"
          />
        </div>
      </div>
    </div>
  </Whiteboard>
</template>

<script>
import { inject } from 'vue';
import axios from 'axios';
import FileInput from '@/components/Inputs/FileInput.vue';
import Whiteboard from "@/components/Whiteboard/Whiteboard.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default {
  components: { FileInput, Whiteboard, PrimaryButton },
  data() {
    return {
      files: {
        atividades: null,
        dadosGerais: null,
        definicaoEtapas: null,
        demissoes: null,
        diasNaoContabilizados: null,
        etapasMetas: null,
        formacoes: null,
        frequencia: null,
        funcoesGruposEtapas: null,
        motivosInfrequencia: null,
        tipoLocal: null,
        uesPercGr: null,
        valoresGrupo: null,
      },
      BASE_URL: "http://localhost:8000/api", 
      endpoint: {
        atividades: "/upload/atividades/",
        dadosGerais: "/upload/dados-gerais/",
        definicaoEtapas: "/upload/definicao-etapas/",
        demissoes: "/upload/demissoes/",
        diasNaoContabilizados: "/upload/dias-nao-contabilizados/",
        etapasMetas: "/upload/etapas-metas/",
        formacoes: "/upload/formacoes/",
        frequencia: "/upload/frequencia/",
        funcoesGruposEtapas: "/upload/funcoes-grupos-etapas/",
        motivosInfrequencia: "/upload/motivos-infrequencia/",
        tipoLocal: "/upload/tipo-local/",
        uesPercGr: "/upload/ues-perc-gr/",
        valoresGrupo: "/upload/valores-grupo/",
      },
    };
  },
  methods: {
    handleFileUpload(event, type) {
      const file = event.target.files[0];
      if (file) {
        const allowedTypes = ['text/csv'];
        if (!allowedTypes.includes(file.type)) {
          alert("Por favor, selecione um arquivo CSV válido.");
          return;
        }
        if (file.size > 5 * 1024 * 1024) { // 5 MB
          alert("O arquivo deve ser menor que 5 MB.");
          return;
        }
        this.files[type] = file;
      }
    },
    async uploadFiles() {
      const filesToUpload = Object.entries(this.files).filter(([_, file]) => file !== null);
      if (filesToUpload.length === 0) {
        alert("Por favor, selecione pelo menos um arquivo!");
        return;
      }

      try {
        for (const [key, file] of filesToUpload) {
          const formData = new FormData();
          formData.append("file", file);  // Adiciona o arquivo ao FormData

          const response = await axios.post(`${this.BASE_URL}${this.endpoint[key]}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          console.log(`${key} arquivo carregado com sucesso`, response.data);
        }
        alert("Todos os arquivos foram carregados com sucesso!");
      } catch (error) {
        console.error("Erro ao fazer upload dos arquivos:", error);
        alert("Erro ao fazer upload dos arquivos: " + (error.response?.data?.error || error.message));
      }
    },
  },
  setup() {
    const isSidebarMinimized = inject('isSidebarMinimized');

    return {
      isSidebarMinimized
    };
  }
};
</script>

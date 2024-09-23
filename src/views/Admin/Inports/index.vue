<template>
  <Whiteboard title="Inports" :isSidebarMinimized="isSidebarMinimized">

    <div class="w-full space-y-10">
      <FileInput Label="Importar Arquivo com Nome Funcionario.csv" @change="(event) => handleFileUpload(event, 'funcionarios')" />
      <FileInput Label="Importar Arquivo com Nome Atividades.csv" @change="(event) => handleFileUpload(event, 'atividades')" />
      <FileInput Label="Importar Arquivo com Nome Tipo Local.csv" @change="(event) => handleFileUpload(event, 'tipoLocal')" />
      <FileInput Label="Importar Arquivo com Nome Dados Gerais.csv" @change="(event) => handleFileUpload(event, 'dadosGerais')" />
      <FileInput Label="Importar Arquivo com Nome Funções Grupos Etapas.csv" @change="(event) => handleFileUpload(event, 'funcoesGruposEtapas')" />
      <FileInput Label="Importar Arquivo com Nome Valores Grupo.csv" @change="(event) => handleFileUpload(event, 'valoresGrupo')" />
      <FileInput Label="Importar Arquivo com Nome Etapas Metas.csv" @change="(event) => handleFileUpload(event, 'etapasMetas')" />
      <FileInput Label="Importar Arquivo com Nome Ues Perc Gr.csv" @change="(event) => handleFileUpload(event, 'uesPercGr')" />
      <FileInput Label="Importar Arquivo com Nome Definição Etapas.csv" @change="(event) => handleFileUpload(event, 'definicaoEtapas')" />
      <FileInput Label="Importar Arquivo com Nome Dias Não Contabilizados.csv" @change="(event) => handleFileUpload(event, 'diasNaoContabilizados')" />
      <FileInput Label="Importar Arquivo com Nome Demissões.csv" @change="(event) => handleFileUpload(event, 'demissoes')" />
      <FileInput Label="Importar Arquivo com Nome Formações.csv" @change="(event) => handleFileUpload(event, 'formacoes')" />
      <FileInput Label="Importar Arquivo com Nome Motivos Infrequência.csv" @change="(event) => handleFileUpload(event, 'motivosInfrequencia')" />
      <FileInput Label="Importar Arquivo com Nome Frequência.csv" @change="(event) => handleFileUpload(event, 'frequencia')" />

      <div class="flex w-full items-end justify-end mt-8">

        <div>
          <RouterLink to="">
            <PrimaryButton
              @click="uploadFile"
              class="bg-blue-500 py-2 px-3 text-sm"
              value="Continuar"
            />
          </RouterLink>
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
        funcionarios: null,
        atividades: null,
        tipoLocal: null,
        dadosGerais: null,
        funcoesGruposEtapas: null,
        valoresGrupo: null,
        etapasMetas: null,
        uesPercGr: null,
        definicaoEtapas: null,
        diasNaoContabilizados: null,
        demissoes: null,
        formacoes: null,
        motivosInfrequencia: null,
        frequencia: null,
      },
      BASE_URL: "http://localhost:8000/api",
      endpoint: {
        funcionarios: "/upload/funcionarios/",
        atividades: "/upload/atividades/",
        tipoLocal: "/upload/tipo-local/",
        dadosGerais: "/upload/dados-gerais/",
        funcoesGruposEtapas: "/upload/funcoes-grupos-etapas/",
        valoresGrupo: "/upload/valores-grupo/",
        etapasMetas: "/upload/etapas-metas/",
        uesPercGr: "/upload/ues-perc-gr/",
        definicaoEtapas: "/upload/definicao-etapas/",
        diasNaoContabilizados: "/upload/dias-nao-contabilizados/",
        demissoes: "/upload/demissoes/",
        formacoes: "/upload/formacoes/",
        motivosInfrequencia: "/upload/motivos-infrequencia/",
        frequencia: "/upload/frequencia/",
      },
    };
  },
  methods: {
    handleFileUpload(event, type) {
      this.files[type] = event.target.files[0];
    },
    async uploadFile() {
      const filesToUpload = Object.entries(this.files).filter(([key, value]) => value !== null);
      if (filesToUpload.length === 0) {
        alert("Please select at least one file!");
        return;
      }

      try {
        for (const [key, file] of filesToUpload) {
          const formData = new FormData();
          formData.append("file", file);
          const response = await axios.post(`${this.BASE_URL}${this.endpoint[key]}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          console.log(`${key} file uploaded successfully`, response.data);
        }
        alert("Todos os arquivos foram carregados com sucesso!");
      } catch (error) {
        console.error("Error uploading files:", error);
        alert("Error uploading files: " + (error.response?.data?.error || error.message));
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

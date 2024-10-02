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
      <FileInput Label="Importar Arquivo com Nome Funcionario.csv" @change="(event) => handleFileUpload(event, 'funcionarios')" />
      <FileInput Label="Importar Arquivo com Nome Funções Grupos Etapas.csv" @change="(event) => handleFileUpload(event, 'funcoesGruposEtapas')" />
      <FileInput Label="Importar Arquivo com Nome Motivos Infrequência.csv" @change="(event) => handleFileUpload(event, 'motivosInfrequencia')" />
      <FileInput Label="Importar Arquivo com Nome Tipo Local.csv" @change="(event) => handleFileUpload(event, 'tipoLocal')" />
      <FileInput Label="Importar Arquivo com Nome Ues Perc Gr.csv" @change="(event) => handleFileUpload(event, 'uesPercGr')" />
      <FileInput Label="Importar Arquivo com Nome Valores Grupo.csv" @change="(event) => handleFileUpload(event, 'valoresGrupo')" />

      <div class="flex w-full items-end justify-end mt-8">
        <div>
          <PrimaryButton
            :disabled="isUploading"
            @click="uploadFilesAndProcess"
            class="bg-blue-500 py-2 px-3 text-sm"
            value="Continuar"
          />
          <Loading v-if="isUploading" />
        </div>
      </div>
    </div>
  </Whiteboard>
</template>

<script>
import { inject } from 'vue';
import axios from 'axios';
import FileInput from '@/components/Inputs/FileInput.vue';
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import Loading from '@/components/Loading/Loading.vue';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs.vue';

export default {
  components: { FileInput, Whiteboard, PrimaryButton, Loading },

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
      isUploading: false,
      uploadSuccess: false,
      isSidebarMinimized: null, 
    };
  },
  created() {
    this.isSidebarMinimized = inject('isSidebarMinimized');
  },
  methods: {
    handleFileUpload(event, fileType) {
      const file = event.target.files[0];
      if (file && file.type !== 'text/csv') {
        alert('Por favor, selecione um arquivo CSV válido.');
        return;
      }
      this.files[fileType] = file;
      console.log(`${fileType} selecionado:`, file);
    },
    async uploadFilesAndProcess() {
      const filesToUpload = Object.entries(this.files).filter(
        ([key, value]) => value !== null
      );
      if (filesToUpload.length === 0) {
        alert('Por favor, selecione pelo menos um arquivo!');
        return;
      }

      this.isUploading = true;

      try {
        for (const [key, file] of filesToUpload) {
          const formData = new FormData();
          formData.append('file', file); 

          const response = await axios.post(
            `${this.BASE_URL}${this.endpoint[key]}`,
            formData
          );
          console.log(`${key} arquivo carregado com sucesso`, response.data);
        }

        // Chamar o endpoint final-processing para processar os arquivos
        const processingResponse = await axios.get(
          `${this.BASE_URL}/final-processing/`
        );
        console.log('Final processing response:', processingResponse.data);

        alert('Arquivos processados com sucesso! Verifique o log.');
        this.showProcessingLog(processingResponse.data);

        this.uploadSuccess = true;
      } catch (error) {
        console.error('Erro ao carregar/processar arquivos:', error);
        alert(
          'Erro ao carregar/processar arquivos: ' +
            (error.response?.data?.error || error.message)
        );
      } finally {
        this.isUploading = false;
      }
    },
    showProcessingLog(data) {
      console.log('Log de processamento:', data);
    },
  },
};
</script>

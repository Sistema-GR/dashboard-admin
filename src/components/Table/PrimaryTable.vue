<template>
  <div class="px-4 sm:px-2 lg:px-4 w-full">
    <div class="mt-6 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th v-for="column in filteredColumns" :key="column.key" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  {{ column.label }}
                </th>
                <th
                  v-if="showEdit"
                  scope="col"
                  class="relative py-3.5 pl-3 pr-4 sm:pr-3"
                >
                </th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="person in filteredPeople" :key="person.id" class="even:bg-gray-50">
                <td v-for="column in filteredColumns" :key="column.key" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {{ person[column.key] }}
                </td>
                <td
                  v-if="showEdit"
                  class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
                >
                  <a href="#" @click="openDrawer" class="text-indigo-600 hover:text-indigo-900">
                    Edit<span class="sr-only">, {{ person }}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <Drawer ref="drawerRef" :title="drawerTitle"/>

</template>

<script setup>
import Drawer from '../Drawer/Drawer.vue';
import { ref, computed } from 'vue'

const props = defineProps({
  route: {
    type: String,
    required: true
  }
})

const tableData = {
  'Results': {
    columns: [
      { key: 'unidade', label: 'Unidade Escolar' },
      { key: 'esperadaEt1', label: 'Esperada % Etapa 1'},
      { key: 'atingidaEt1', label: 'Atinginda % Etapa 1'},
      { key: 'esperadaEt2', label: 'Esperada % Etapa 2'},
      { key: 'atingidaEt2', label: 'Atinginda % Etapa 2'},
      { key: 'esperadaEt3', label: 'Esperada % Etapa 3'},
      { key: 'atingidaEt3', label: 'Atinginda % Etapa 3'},
      
    ],
    people: [
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
      { unidade: 'Reinaldo Pedro de França', esperadaEt1: '8,51', atingidaEt1: '8,40', esperadaEt2: '8,51', atingidaEt2: '8,40',esperadaEt3: '8,51', atingidaEt3: '8,40',},
    ],
  },
  'Profissional': {
    columns: [
      { key: 'matricula', label: 'Matrícula' },
      { key: 'nome', label: 'Nome' },
      { key: 'cpf', label: 'CPF' },
      { key: 'admissao', label: 'Admissão' },
      { key: 'local_alocacao', label: 'Local de Alocação' },
      { key: 'cargo', label: 'Cargo' },
      { key: 'vinculo', label: 'Vínculo' },
      { key: 'situacao', label: 'Situação' },
    ],
    people: [
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
      { matricula: 'u04444', nome: 'Alice Brown', cpf: '123.456.789-00', admissao: '01/01/2020', local_alocacao: 'EM João Costa', cargo: 'Auxiliar Educador', vinculo: 'Estat.Temp.(H.A)', situacao: 'Trabalhando' },
    ],
  },
  'Steps': {
    columns: [
      { key: 'nome_escola_sgp', label: 'Nome Escola SGP' },
      { key: 'nome_escola_sgp', label: 'Nome da Escola BI' },
      { key: 'tem_ai_1_2ano', label: 'Tem AI 1? (2º ano)' },
      { key: 'tem_ai_2_5ano', label: 'Tem AI 2? (5º ano)' },
      { key: 'tem_af_9ano', label: 'Tem AF ? (9º ano)' },
      { key: 'tipo', label: 'Tipo' },
    ],
    people: [
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
      { nome_escola_sgp: 'EM Alfredo G. Henrique', nome_escola_sgp: 'Alfredo Germano Henrique Hardt', tem_ai_1_2ano: 'Sim', tem_ai_2_5ano: 'Não', tem_af_9ano: 'Não', tipo: 'Urbanas de 1° ao 9°' },
    ],
  },
  'Frequency': {
    columns: [
      { key: 'nome', label: 'Nome' },
      { key: 'motivo', label: 'Motivo' },
      { key: 'inicio_afast', label: 'Início Afast.' },
      { key: 'fim_afast', label: 'Fim Afast.' },
      { key: 'qtde_dias_afast', label: 'Qtde Dias Afast.' },
      { key: 'dias_uteis_ausentes', label: 'Dias Úteis Ausentes' },
      { key: 'dias_trabalho', label: 'Dias de Trabalho' },
      { key: 'dias_totais_afast_gr', label: 'Dias Totais Afastados para GR' },
      { key: 'frequencia_gr', label: 'Frequência para GR' },
    ],
   people: [
      { nome: 'Diana Ross', motivo: 'Doença', inicio_afast: '2024-08-01', fim_afast: '2024-08-15', qtde_dias_afast: 14, dias_uteis_ausentes: 10, dias_trabalho: 4, dias_totais_afast_gr: 14, frequencia_gr: '85%' },
      { nome: 'Edward Jones', motivo: 'Férias', inicio_afast: '2024-07-10', fim_afast: '2024-07-25', qtde_dias_afast: 15, dias_uteis_ausentes: 10, dias_trabalho: 5, dias_totais_afast_gr: 15, frequencia_gr: '80%' },
      { nome: 'Diana Ross', motivo: 'Doença', inicio_afast: '2024-08-01', fim_afast: '2024-08-15', qtde_dias_afast: 14, dias_uteis_ausentes: 10, dias_trabalho: 4, dias_totais_afast_gr: 14, frequencia_gr: '85%' },
      { nome: 'Edward Jones', motivo: 'Férias', inicio_afast: '2024-07-10', fim_afast: '2024-07-25', qtde_dias_afast: 15, dias_uteis_ausentes: 10, dias_trabalho: 5, dias_totais_afast_gr: 15, frequencia_gr: '80%' },
      { nome: 'Diana Ross', motivo: 'Doença', inicio_afast: '2024-08-01', fim_afast: '2024-08-15', qtde_dias_afast: 14, dias_uteis_ausentes: 10, dias_trabalho: 4, dias_totais_afast_gr: 14, frequencia_gr: '85%' },
      { nome: 'Edward Jones', motivo: 'Férias', inicio_afast: '2024-07-10', fim_afast: '2024-07-25', qtde_dias_afast: 15, dias_uteis_ausentes: 10, dias_trabalho: 5, dias_totais_afast_gr: 15, frequencia_gr: '80%' },
      { nome: 'Diana Ross', motivo: 'Doença', inicio_afast: '2024-08-01', fim_afast: '2024-08-15', qtde_dias_afast: 14, dias_uteis_ausentes: 10, dias_trabalho: 4, dias_totais_afast_gr: 14, frequencia_gr: '85%' },
      { nome: 'Edward Jones', motivo: 'Férias', inicio_afast: '2024-07-10', fim_afast: '2024-07-25', qtde_dias_afast: 15, dias_uteis_ausentes: 10, dias_trabalho: 5, dias_totais_afast_gr: 15, frequencia_gr: '80%' },
    ],
   },
   'Activities': {
    columns: [
    { key: 'matricula', label: 'Matrícula' },
    { key: 'nome', label: 'Nome' },
    { key: 'unidade', label: 'Unidade' },
    { key: 'comprimento', label: 'Comprimento das atividades necessárias?' },

    ],
   people: [
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Não', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Não', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', unidade: 'Verificação das atividades - E. R. Prof Maria Madalena Mazzoli', comprimento: 'Sim', },
      
    ],
   },
   'Service': {
    columns: [
      { key: 'matricula', label: 'Matrícula' },
      { key: 'nome', label: 'Nome' },
      { key: 'admissao', label: 'Admissão' },
      { key: 'demissao', label: 'Demissão' },
      { key: 'atua_ha_mais_de_6_meses', label: 'Atua há mais de 6 meses?' },
      { key: 'data_inicio_alocacao', label: 'Data de Início de Alocação' },
      { key: 'data_fim_alocacao', label: 'Data de Fim de Alocação' },
    ],
   people: [
      { matricula: '001', nome: 'Alice Johnson', admissao: '2021-01-10', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2023-03-01', data_fim_alocacao: '2024-02-29' },
      { matricula: '002', nome: 'Bob Smith', admissao: '2022-05-22', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2023-01-15', data_fim_alocacao: '2024-01-14' },
      { matricula: '003', nome: 'Charlie Davis', admissao: '2023-07-05', demissao: null, atua_ha_mais_de_6_meses: 'Não', data_inicio_alocacao: '2023-07-10', data_fim_alocacao: '2024-07-09' },
      { matricula: '004', nome: 'Diana Ross', admissao: '2021-11-18', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2022-12-01', data_fim_alocacao: '2024-11-30' },
      { matricula: '005', nome: 'Edward Jones', admissao: '2022-04-02', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2022-04-15', data_fim_alocacao: '2024-04-14' },
      { matricula: '006', nome: 'Fiona Green', admissao: '2023-01-25', demissao: null, atua_ha_mais_de_6_meses: 'Não', data_inicio_alocacao: '2023-01-30', data_fim_alocacao: '2024-01-29' },
      { matricula: '007', nome: 'George Black', admissao: '2022-08-30', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2022-09-01', data_fim_alocacao: '2024-08-31' },
      { matricula: '008', nome: 'Hannah White', admissao: '2021-10-14', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2021-11-01', data_fim_alocacao: '2024-10-31' },
      { matricula: '009', nome: 'Ian Brown', admissao: '2023-03-15', demissao: null, atua_ha_mais_de_6_meses: 'Não', data_inicio_alocacao: '2023-03-20', data_fim_alocacao: '2024-03-19' },
      { matricula: '010', nome: 'Jane Cooper', admissao: '2022-06-07', demissao: null, atua_ha_mais_de_6_meses: 'Sim', data_inicio_alocacao: '2022-06-10', data_fim_alocacao: '2024-06-09' },
    ],
   },
  'Training': {
    columns: [
      { key: 'matricula', label: 'Matrícula' },
      { key: 'nome', label: 'Nome' },
      { key: 'recebe', label: 'Recebe Gratificação' },
    ],
   people: [
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
      { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', recebe: 'Sim', },
    ],
   },
   'Report': {
    columns: [
        { key: 'matricula', label: 'Matrícula' },
        { key: 'nome', label: 'Nome' },
        { key: 'cargo', label: 'Cargo' },
        { key: 'situacao', label: 'Situação' },
        { key: 'frequencia', label: 'Frequência' },
        { key: 'pcr_freq', label: 'PCr Freq.' },
        { key: 'tempo_atuacao', label: 'Tempo de Atuação' },
        { key: 'formacoes', label: 'Formações' },
        { key: 'pcr_form', label: 'PCr Form.' },
        { key: 'atividades', label: 'Atividades' },
        { key: 'pcr_ativ', label: 'PCr Ativ.' },
        { key: 'pcr_form_freq', label: 'PCr Form*Freq' },
        { key: 'pcr_total', label: 'PCr Total' },
        { key: 'valor_bruto', label: 'Valor Bruto' },
        { key: 'valor_pagar', label: 'Valor a Pagar' },
        { key: 'motivo_nao_recebimento', label: 'Motivo de Não Recebimento' },
        { key: 'visualizacao_gratificacao', label: 'Visualização da Gratificação' },
    ],
    people: [
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },
        { matricula: 'u04444', nome: 'ALINE VICENTE DA SILVA BRITO', cargo: 'AUXILIAR DE EDUCADOR', situacao: 'Ativo', frequencia: '94,20%', pcr_freq: '0,00%', tempo_atuacao: 'Atua há mais de 6 meses', formacoes: 'Sim', pcr_form: '100,00%', atividades: '100%', pcr_ativ: 'Sim', pcr_form_freq: '0,7', pcr_total: '0,55', valor_bruto: 'R$ 4.642,50', valor_pagar: 'R$ 8.440,92', motivo_nao_recebimento: 'Recebe', visualizacao_gratificacao: 'Sim' },

    ],
}
}

const filteredColumns = computed(() => {
  return tableData[props.route]?.columns || []
})

const filteredPeople = computed(() => {
  return tableData[props.route]?.people || []
})

const showEdit = computed(() => props.route === 'Frequency' || props.route === 'Activities' || props.route === 'Service' || props.route === 'Training')

const drawerRef = ref(null)

function openDrawer() {
  if (drawerRef.value) {
    drawerRef.value.openDrawer()
  }
}

function closeDrawer() {
  if (drawerRef.value) {
    drawerRef.value.closeDrawer()
  }
}

const drawerTitle = computed(() => {
  switch (props.route) {
    case 'Frequency':
      return 'Frequência'
    case 'Activities':
      return 'Atividades'
    case 'Service':
      return 'Tempo de Atuação'
    case 'Training':
      return 'Formação'
  }
})

</script>
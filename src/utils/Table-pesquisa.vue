<template>
  <div>
    <div class="container-de-busca">
      <input v-model="consultaBusca" type="text" id="entrada-busca" placeholder="Pesquisar..." @input="buscarNaTabela">
      <button id="btn-voz-busca" @click="iniciarReconhecimentoVoz">🎙️</button>
      <button id="btn-limpar" @click="limparBusca">Limpar</button>
    </div>

    <table id="tabela-dados">
      <thead>
        <tr>
          <th v-for="(header, index) in columnHeaders" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(linha, indice) in linhasFiltradas" :key="indice">
          <td v-for="(key, index) in columnKeys" :key="index">
            <template v-if="key === 'Url'">
              <a :href="linha[key]">{{ linha[key] }}</a>
            </template>
            <template v-else>
              {{ linha[key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, watch, defineProps } from 'vue';

export default {
  props: {
    columnHeaders: {
      type: Array,
      default: () => ['Nome da página', 'Url', 'Carregamento da página']
    },
    columnKeys: {
      type: Array,
      default: () => ['Nome', 'Url', 'CarregamentoDaPagina']
    },
    data: {
      type: Array,
      default: () => []
    },
  },

  setup(props) {
    const consultaBusca = ref('');
    const resultadosBusca = ref([]);
    const linhas = ref(props.data);

    const linhasFiltradas = ref(linhas.value);

    watch(consultaBusca, () => {
      buscarNaTabela();
    });

    const iniciarReconhecimentoVoz = () => {
      const reconhecimento = new (webkitSpeechRecognition || SpeechRecognition)();
      reconhecimento.lang = 'pt-BR';
      reconhecimento.interimResults = false;
      reconhecimento.maxAlternatives = 1;

      reconhecimento.start();

      reconhecimento.onresult = (evento) => {
        const resultadoFala = evento.results[0][0].transcript;
        consultaBusca.value = resultadoFala;
      };

      reconhecimento.onend = () => {
        reconhecimento.stop();
      };

      reconhecimento.onerror = (evento) => {
        console.error('Erro no reconhecimento de fala:', evento.error);
      };
    };

    const buscarNaTabela = () => {
      resultadosBusca.value = [];
      linhasFiltradas.value = linhas.value.filter((linha, indice) => {
        let encontrado = false;

        for (const valor of Object.values(linha)) {
          if (valor.toLowerCase().includes(consultaBusca.value.toLowerCase())) {
            encontrado = true;
            break;
          }
        }

        if (encontrado) {
          const itemResultado = `Encontrado na linha ${indice + 1}`;
          resultadosBusca.value.push(itemResultado);
        }

        return encontrado;
      });
    };

    const limparBusca = () => {
      consultaBusca.value = '';
      resultadosBusca.value = [];
      linhasFiltradas.value = linhas.value;
    };

    return {
      consultaBusca,
      resultadosBusca,
      linhasFiltradas,
      iniciarReconhecimentoVoz,
      buscarNaTabela,
      limparBusca,
    };
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.container-de-busca {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

#entrada-busca {
  padding: 10px;
  width: 200px;
}

#btn-voz-busca,
#btn-limpar {
  margin-left: 10px;
  cursor: pointer;
  font-size: 20px;
}

#resultados {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  word-break: break-all;
}
</style>

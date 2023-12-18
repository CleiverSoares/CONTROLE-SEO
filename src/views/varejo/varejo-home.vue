<template>
    <div>
        <TablePesquisa :columnHeaders="columnHeaders" :columnKeys="columnKeys" :data="teste" />
    </div>
</template>
  
<script>
import TablePesquisa from '../../utils/Table-pesquisa.vue';
import services from '../../services';
import { ref, onMounted, watchEffect } from 'vue';
import  {obterTempoCarregamento}  from '../../utils/Carregamento-pagina';
export default {
    name: "varejo-home",
    components: { TablePesquisa },
    setup() {
        const columnHeaders = ['Id', 'Nome da página', 'Url', 'Carregamento da página'];
        const columnKeys = ['Id', 'Nome', 'Url', 'CarregamentoDaPagina'];

        const segmentosVarejo = ref(null);


        const teste = ref([]);

        watchEffect(async () => {
            try {
                const { data } = await services.varejo.getTodos();
                segmentosVarejo.value = Object.values(data);
            } catch (error) {
                console.error('Erro ao obter dados do serviço', error);
            }
            if (segmentosVarejo.value) {

                teste.value = segmentosVarejo.value.map(item => ({
                    Nome: item.nome,
                    Url: item.url,
                    CarregamentoDaPagina: '',
                    Id: item.id
                }));

            }
            formatarTempoCarregamento('www.alterdata.com')
        });


        const formatarTempoCarregamento = async (url) => {
            try {
                const tempoCarregamento = await obterTempoCarregamento(url);
                return `${tempoCarregamento.toFixed(4)} segundos`;
            } catch (error) {
                console.error(error);
                return 'Erro ao obter tempo de carregamento';
            }
        };


        return {
            segmentosVarejo,
            teste,
            columnHeaders,
            columnKeys,
        };
    },
};
</script>
  
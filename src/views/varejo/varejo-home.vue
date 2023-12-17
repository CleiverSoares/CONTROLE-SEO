<template>
    <div>
        <TablePesquisa :columnHeaders="columnHeaders" :columnKeys="columnKeys" :data="teste" />
    </div>
</template>
  
<script>
import TablePesquisa from '../../utils/Table-pesquisa.vue';

export default {
    name: "varejo-home",
    components: { TablePesquisa },
    setup() {
        const teste = [
            { Nome: 'Pet Shop', Url: 'https://empresarial.alterdata.com.br/petshop', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'Mercado', Url: 'https://empresarial.alterdata.com.br/mercado', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'Óticas', Url: 'https://empresarial.alterdata.com.br/otica', CarregamentoDaPagina: '(11) 1234-5678' },
        ];

        const columnHeaders = ['Nome da página', 'Url', 'Carregamento da página'];
        const columnKeys = ['Nome', 'Url', 'CarregamentoDaPagina'];

        return {
            teste,
            columnHeaders,
            columnKeys,
        };
    }
}
</script>
  
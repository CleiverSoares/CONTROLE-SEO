<template>
    <div>
        <TablePesquisa :columnHeaders="columnHeaders" :columnKeys="columnKeys" :data="formatarURLs(teste)" />
    </div>
</template>
  
<script>
import { formatarURLs } from '../../utils/Encurta-url';
import TablePesquisa from '../../utils/Table-pesquisa.vue';

export default {
    name: "varejo-home",
    components: { TablePesquisa },
    setup() {
        const teste = [
            { Nome: 'Terceiro setor', Url: 'https://empresarial.alterdata.com.br/terceiro-setor', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'Pequena Empresa', Url: 'https://erpfor.me/?_gl=1*1sl8xwk*_ga*MTc1NzQ1OTAyNy4xNzAyNDc3NTkx*_ga_H6NJ6SD0BX*MTcwMjc1MjEyOC4xNS4xLjE3MDI3NTM3OTIuNjAuMC4w', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'HCM', Url: 'https://materiais.alterdata.com.br/alterdata_hcm?_gl=1*1sl8xwk*_ga*MTc1NzQ1OTAyNy4xNzAyNDc3NTkx*_ga_H6NJ6SD0BX*MTcwMjc1MjEyOC4xNS4xLjE3MDI3NTM3OTIuNjAuMC4w', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'Contabilidade Interna', Url: 'https://www.alterdata.com.br/contabil/empresarial?_gl=1*1sl8xwk*_ga*MTc1NzQ1OTAyNy4xNzAyNDc3NTkx*_ga_H6NJ6SD0BX*MTcwMjc1MjEyOC4xNS4xLjE3MDI3NTM3OTIuNjAuMC4w', CarregamentoDaPagina: '(11) 1234-5678' },
            { Nome: 'Nuvem', Url: 'https://empresarial.alterdata.com.br/nuvem', CarregamentoDaPagina: '(11) 1234-5678' },
        ];

        const columnHeaders = ['Nome da página', 'Url', 'Carregamento da página'];
        const columnKeys = ['Nome', 'Url', 'CarregamentoDaPagina'];
       

        return {
            teste,
            columnHeaders,
            columnKeys,
            formatarURLs
        };
    }
}
</script>
  
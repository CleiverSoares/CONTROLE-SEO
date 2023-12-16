export default (httpClient) => ({

    criarCadastro: async (cadastrar) => {
      const response = await httpClient.post("/treino, cadastrar")
  
      return {
        data: response.data,
      }
    },
  })
  
export default (httpClient) => ({

  getPessoas: async () => {
    const response = await httpClient.get('/treino')
    return {
      data: response.data,
    }
  },
  criarPessoa: async (pessoa) => {
    const response = await httpClient.post("/treino", pessoa)

    return {
      data: response.data,
    }
  },
  updatePessoa: async (pessoa) => {
    const response = await httpClient.put(`/treino/${pessoa.id}`, pessoa)

    return {
      data: response.data,
    }
  },
  deletarPessoa: async (id) => {
    await httpClient.delete(`/treino/${id}`)
  }
})

export default (httpClient) => ({

  getTodos: async () => {
    const response = await httpClient.get('/varejo')
    return {
      data: response.data,
    }
  },
  criarPessoa: async (pessoa) => {
    const response = await httpClient.post("/varejo", pessoa)

    return {
      data: response.data,
    }
  },
  updatePessoa: async (pessoa) => {
    const response = await httpClient.put(`/varejo/${pessoa.id}`, pessoa)

    return {
      data: response.data,
    }
  },
  deletarPessoa: async (id) => {
    await httpClient.delete(`/varejo/${id}`)
  }
})

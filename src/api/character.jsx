import api from "./api"

export const getCharacters = async () => {
    try {
        const response = await api.get('/character')

        if (response.status !== 200) {
            console.error('Falha na requisição:', response.status)
            return []
        }
        
    
        return response.data.results

    } catch (error) {
     
        console.error('Erro ao buscar personagens:', error)
        return []
    }
}
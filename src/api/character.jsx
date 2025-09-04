import api from "./api"

export const getCharacters = async () => {
    const response = await api.get('/character')

    if (response.status !==200){
        return []
    }
    console.log('response do axios',response)
    return response.data.results

}
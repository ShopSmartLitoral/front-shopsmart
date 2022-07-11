import api from '../../config/api';

export default {
    async createUser({commit}, payload){

        commit('CLEAR_ERROR');

        try{

            console.log('[CREATE_USER_LOG] Criando o usuário: %j', payload)

            await api.post('/user', payload);

            console.log('[CREATE_USER_LOG] Sucesso ao criar o usuário')

        }
        catch(error) {

            console.log("[CREATE_USER_ERROR_LOG] Error: ", error.response.data);

            commit('SET_ERROR', error.response.data);

        }
    },
    async getUser({commit}, payload){

        commit('CLEAR_ERROR');
        try{
            const {data} = await api.post('/user/getUsers', payload);
            commit('SET_USER', data.items);
        }
        catch(error) {
            commit('SET_ERROR', error.response.data);
        }
    },
    async deleteUser({commit}, payload){
        commit('CLEAR_ERROR');
        try{
            await api.delete(`/user/${payload}`);
        }
        catch(error) {
            commit('SET_ERROR', error.response.data);
        }
    }
}
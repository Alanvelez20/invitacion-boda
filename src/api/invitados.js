import axios from 'axios'

const API_URL = 'https://tu-backend.com/api/invitados'

export const confirmarInvitado = (datos) => axios.post(`${API_URL}/confirmar`, datos)
export const obtenerInvitados = () => axios.get(API_URL)

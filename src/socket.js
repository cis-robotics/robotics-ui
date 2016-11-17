import { SOCKET_URL } from './constants'
import io from 'socket.io-client'
import ss from 'socket.io-stream'

const socket = io(SOCKET_URL)

export default socket
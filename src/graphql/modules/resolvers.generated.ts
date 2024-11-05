/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated'
import { Auth } from './auth/resolvers/Auth'
import { Help } from './help/resolvers/Help'
import { autorizarUser as Mutation_autorizarUser } from './user/resolvers/Mutation/autorizarUser'
import { closeHelp as Mutation_closeHelp } from './help/resolvers/Mutation/closeHelp'
import { createHelp as Mutation_createHelp } from './help/resolvers/Mutation/createHelp'
import { createUser as Mutation_createUser } from './user/resolvers/Mutation/createUser'
import { deleteHelp as Mutation_deleteHelp } from './help/resolvers/Mutation/deleteHelp'
import { deleteUser as Mutation_deleteUser } from './user/resolvers/Mutation/deleteUser'
import { editHelp as Mutation_editHelp } from './help/resolvers/Mutation/editHelp'
import { editUser as Mutation_editUser } from './user/resolvers/Mutation/editUser'
import { initAtendimento as Mutation_initAtendimento } from './help/resolvers/Mutation/initAtendimento'
import { login as Mutation_login } from './auth/resolvers/Mutation/login'
import { GetAllHelps as Query_GetAllHelps } from './help/resolvers/Query/GetAllHelps'
import { GetHelp as Query_GetHelp } from './help/resolvers/Query/GetHelp'
import { getUser as Query_getUser } from './user/resolvers/Query/getUser'
import { getUserByToken as Query_getUserByToken } from './auth/resolvers/Query/getUserByToken'
import { loadUsers as Query_loadUsers } from './user/resolvers/Query/loadUsers'
import { ping as Query_ping } from './ping/resolvers/Query/ping'
import { User } from './user/resolvers/User'
export const resolvers: Resolvers = {
  Query: {
    GetAllHelps: Query_GetAllHelps,
    GetHelp: Query_GetHelp,
    getUser: Query_getUser,
    getUserByToken: Query_getUserByToken,
    loadUsers: Query_loadUsers,
    ping: Query_ping
  },
  Mutation: {
    autorizarUser: Mutation_autorizarUser,
    closeHelp: Mutation_closeHelp,
    createHelp: Mutation_createHelp,
    createUser: Mutation_createUser,
    deleteHelp: Mutation_deleteHelp,
    deleteUser: Mutation_deleteUser,
    editHelp: Mutation_editHelp,
    editUser: Mutation_editUser,
    initAtendimento: Mutation_initAtendimento,
    login: Mutation_login
  },

  Auth: Auth,
  Help: Help,
  User: User
}

import { GraphQLResolveInfo } from 'graphql'
import { Context } from '../../server/context'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Auth = {
  __typename: 'Auth'
  token: Scalars['String']
  userId: Scalars['String']
}

export type Help = {
  __typename: 'Help'
  createdAt?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['String']>
  description: Scalars['String']
  id: Scalars['ID']
  status: Scalars['Int']
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
  user: User
  userCreated?: Maybe<User>
  userDeleted?: Maybe<User>
  userUpdated?: Maybe<User>
}

export type HelpInput = {
  description: Scalars['String']
  title: Scalars['String']
}

export type Mutation = {
  __typename: 'Mutation'
  autorizarUser: Scalars['Boolean']
  closeHelp: Scalars['Boolean']
  createHelp: Scalars['Boolean']
  createUser: Scalars['Boolean']
  deleteHelp: Scalars['Boolean']
  deleteUser: Scalars['Boolean']
  editHelp: Scalars['Boolean']
  editUser: Scalars['Boolean']
  initAtendimento: Scalars['Boolean']
  login: Scalars['String']
}

export type MutationAutorizarUserArgs = {
  id: Scalars['ID']
}

export type MutationCloseHelpArgs = {
  id: Scalars['ID']
}

export type MutationCreateHelpArgs = {
  data: HelpInput
}

export type MutationCreateUserArgs = {
  data: UserInput
}

export type MutationDeleteHelpArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUserArgs = {
  id: Scalars['ID']
}

export type MutationEditHelpArgs = {
  data?: InputMaybe<HelpInput>
  id: Scalars['ID']
}

export type MutationEditUserArgs = {
  data: UserInput
  id: Scalars['ID']
}

export type MutationInitAtendimentoArgs = {
  id: Scalars['ID']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Query = {
  __typename: 'Query'
  GetAllHelps: Array<Help>
  GetHelp: Help
  getUser: User
  getUserByToken: User
  loadUsers: Array<User>
  ping: Scalars['String']
}

export type QueryGetHelpArgs = {
  id: Scalars['ID']
}

export type QueryGetUserArgs = {
  id: Scalars['ID']
}

export type QueryGetUserByTokenArgs = {
  token: Scalars['String']
}

export type User = {
  __typename: 'User'
  autorizado: Scalars['Boolean']
  cpf: Scalars['String']
  email: Scalars['String']
  id: Scalars['ID']
  isAdmin: Scalars['Boolean']
  name: Scalars['String']
  password: Scalars['String']
  phone: Scalars['String']
}

export type UserInput = {
  administrador?: InputMaybe<Scalars['Boolean']>
  autorizado?: InputMaybe<Scalars['Boolean']>
  cpf: Scalars['String']
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<Auth>
  String: ResolverTypeWrapper<Scalars['String']>
  Help: ResolverTypeWrapper<Help>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  HelpInput: HelpInput
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Query: ResolverTypeWrapper<{}>
  User: ResolverTypeWrapper<User>
  UserInput: UserInput
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Auth
  String: Scalars['String']
  Help: Help
  ID: Scalars['ID']
  Int: Scalars['Int']
  HelpInput: HelpInput
  Mutation: {}
  Boolean: Scalars['Boolean']
  Query: {}
  User: User
  UserInput: UserInput
}

export type AuthDirectiveArgs = {}

export type AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = Context,
  Args = AuthDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AuthResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']
> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type HelpResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Help'] = ResolversParentTypes['Help']
> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  userCreated?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userDeleted?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  userUpdated?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  autorizarUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationAutorizarUserArgs, 'id'>
  >
  closeHelp?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCloseHelpArgs, 'id'>
  >
  createHelp?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateHelpArgs, 'data'>
  >
  createUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'data'>
  >
  deleteHelp?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteHelpArgs, 'id'>
  >
  deleteUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >
  editHelp?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationEditHelpArgs, 'id'>
  >
  editUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationEditUserArgs, 'data' | 'id'>
  >
  initAtendimento?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationInitAtendimentoArgs, 'id'>
  >
  login?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, 'email' | 'password'>
  >
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  GetAllHelps?: Resolver<Array<ResolversTypes['Help']>, ParentType, ContextType>
  GetHelp?: Resolver<
    ResolversTypes['Help'],
    ParentType,
    ContextType,
    RequireFields<QueryGetHelpArgs, 'id'>
  >
  getUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, 'id'>
  >
  getUserByToken?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserByTokenArgs, 'token'>
  >
  loadUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  autorizado?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  cpf?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  isAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = Context> = {
  Auth?: AuthResolvers<ContextType>
  Help?: HelpResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = Context> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>
}

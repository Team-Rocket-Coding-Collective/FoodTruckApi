/**
 * @flow
 * TODO connect postgres queries to here
 */

import type { User, GraphQLContext } from '../../../internals/types';

const resolvers = {
  Query: {
    getUserById(root: Object, { id }: { id: string }, context: GraphQLContext): User {
      return context.db.query(`SELECT * from public.user where id=${id};;`);
    },

    getUserByEmail(root: Object, { email }: { email: string }, context: GraphQLContext): User {
      return context.db.query(`SELECT * from public.user where email='${email};;'`);
    },
  },
  Mutation: {
    async createUser(root: Object, args: User, context: GraphQLContext): Promise<User> {
      // const user = new context.db.User(args);
      // await user.save();

      // return user;
      console.log(root, args);
      return context.db.query(`insert into public.user (name, email) VALUES ('blah'), ('${args.email}');;`);
    },
  },
};

export default resolvers;

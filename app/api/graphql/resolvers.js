/**
 * @flow
 * TODO connect postgres queries to here
 */

import type { User } from '../../../internals/types';

const resolvers = {
  Query: {
    getUserById(root: Object, { id }: { id: string }): User {
      return { email: 'syedjafri99@gmail.com', id };
    },

    getUserByEmail(root: Object, { email }: { email: string }): User {
      return { email, id: '2' };
    },
  },
  Mutation: {
    async createUser(root: Object, args: User): Promise<User> {
      // const user = new context.db.User(args);
      // await user.save();

      // return user;
      console.log(root, args);
      return { email: 'syedjafri99@gmail.com', id: '3' };
    },
  },
};

export default resolvers;

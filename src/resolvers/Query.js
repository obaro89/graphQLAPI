const Query = {
  async getUsers(parent, args, { prisma }, info) {
    return await prisma.user.findMany();
  },

  async getBooks(parent, args, { prisma }, info) {
    return await prisma.book.findMany();
  },
};

export { Query as default };

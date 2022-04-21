const Mutation = {
  async addUser(parent, args, { prisma }, info) {
    const newUser = await prisma.user.create({
      data: {
        username: args.username,
      },
    });

    if (!newUser) {
      throw new Error("Unable to add new user");
    }

    return newUser;
  },

  async addBook(parent, args, { prisma }, info) {
    const newBook = await prisma.book.create({
      data: {
        ...args,
      },
    });

    if (!newBook) throw new Error("Failed to add a book");

    return newBook;
  },

  async addReview(parent, args, { prisma }, info) {
    const review = await prisma.review.create({
      data: {
        ...args,
      },
    });
    return review;
  },
};

export { Mutation as default };

const Book = {
  async reviews(parent, args, { prisma }, info) {
    const reviews = await prisma.review.findMany({
      where: {
        bookId: parent.id,
      },
    });
    return reviews;
  },
};

export { Book as default };

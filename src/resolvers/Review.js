const Review = {
  async book(parent, args, { prisma }, info) {
    const book = await prisma.book.findUnique({
      where: {
        id: parent.bookId,
      },
    });

    return book;
  },

  async reviewer(parent, args, { prisma }, info) {
    const reviewer = await prisma.user.findUnique({
      where: {
        id: parent.reviewerId,
      },
    });
    return reviewer;
  },
};

export { Review as default };

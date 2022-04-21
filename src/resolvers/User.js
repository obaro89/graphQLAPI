const User = {
  async reviews(parent, args, { prisma }, info) {
    const reviews = await prisma.review.findMany({
      where: {
        reviewerId: parent.id,
      },
    });
    return reviews;
  },
};

export { User as default };

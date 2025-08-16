let prisma: any

try {
  const { PrismaClient } = require("@prisma/client")

  const prismaClientSingleton = () => {
    return new PrismaClient()
  }

  const globalForPrisma = globalThis as unknown as {
    prisma: any | undefined
  }

  prisma = globalForPrisma.prisma ?? prismaClientSingleton()

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
} catch (error) {
  console.warn("[v0] PrismaClient not available, using fallback implementation")

  prisma = {
    category: {
      findMany: async () => [],
      findUnique: async () => null,
    },
    product: {
      findMany: async () => [],
      findUnique: async () => null,
    },
    review: {
      findMany: async () => [],
    },
    heroBanner: {
      findMany: async () => [],
      findUnique: async () => null,
    },
    heroSlider: {
      findMany: async () => [],
    },
    countdown: {
      findMany: async () => [],
    },
    headerSetting: {
      findFirst: async () => null,
    },
    seoSetting: {
      findFirst: async () => null,
    },
  }
}

export { prisma }

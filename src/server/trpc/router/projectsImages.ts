import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

const projectsImagesRouter = router({
  createProjectsImage: publicProcedure
    .input(z.object({
      projectId: z.string(),
      image: z.object({
        fileKey: z.string(),
        filename: z.string(),
        height: z.number(),
        id: z.string(),
        originalFilename: z.string(),
        width: z.number(),
      }),
    }))
    .mutation(async ({ ctx, input }) => {
      const { sort } = (await ctx.prisma.projectsImage.findFirst({
        where: { projectId: input.projectId },
        orderBy: {
          sort: 'desc',
        },
      })) || {}

      return ctx.prisma.projectsImage.create({
        data: {
          project: {
            connect: {
              id: input.projectId,
            },
          },
          image: {
            create: input.image,
          },
          sort: sort ? sort + 1 : 1,
        },
      })
    }),

  getProjectsImageById: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .query(({ ctx, input }) => ctx.prisma.projectsImage.findFirst({
      where: {
        id: input.id,
      },
      include: {
        image: true,
      },
    })),

  getProjectsImages: publicProcedure
    .input(z.object({
      include: z.object({
        image: z.boolean().optional(),
      }).optional(),
      projectId: z.string(),
    }))
    .query(({ ctx, input }) => ctx.prisma.projectsImage.findMany({
      where: {
        projectId: input.projectId,
      },
      include: input.include,
    })),

  deleteProjectsImageById: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .mutation(({ ctx, input }) => ctx.prisma.projectsImage.delete({
      where: {
        id: input.id,
      },
    })),
})

export default projectsImagesRouter

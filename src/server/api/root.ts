import { createTRPCRouter } from "~/server/api/trpc";
import { blogsRouter } from "~/server/api/routers/blogs";
import { projectsRouter } from "./routers/projects";
import { carsRouter } from "./routers/cars";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blogs: blogsRouter,
  projects: projectsRouter,
  cars: carsRouter 
});

// export type definition of API
export type AppRouter = typeof appRouter;

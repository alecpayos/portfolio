import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("hobbies", "routes/hobbies.tsx"),
  route("projects", "routes/projects.tsx"),
  route("tech-skills", "routes/tech-skills.tsx"),
  route("*", "routes/catch-all.tsx"),
] satisfies RouteConfig

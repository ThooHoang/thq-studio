// sanity/sanity.config.ts
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemaTypes"

export default defineConfig({
  name: "default",
  title: "THQ STUDIO.",

  // 👇 use your own values from the Sanity dashboard
  projectId: "zvqz0tux",
  dataset: "production",

  basePath: "/studio", // URL path where the Studio will live

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
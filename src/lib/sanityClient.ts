import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: "zvqz0tux",
  dataset: "production",
  apiVersion: "2026-03-10",
  useCdn: true,
})


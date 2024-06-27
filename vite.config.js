import { resolve } from "path"
import { definedConfig } from "vite"

export default definedConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub: resolve(__dirname, "worldclock.html"),
      },
    },
  },
})

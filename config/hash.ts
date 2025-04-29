import { defineConfig } from '@adonisjs/core/hash'
import { LaravelHashFunction } from '../driver/LaravelHashDriver.js'

const hashConfig = defineConfig({
  default: 'laravel_hash',

  list: {
    laravel_hash: LaravelHashFunction()
  },
})

export default hashConfig

/**
 * Inferring types for the list of hashers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hashConfig> {}
}

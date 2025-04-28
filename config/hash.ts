import { defineConfig, drivers } from '@adonisjs/core/hash'
import { LaravelHashDriver } from '../driver/LaravelHashDriver.js'

const hashConfig = defineConfig({
  default: 'laravel_hash',

  list: {
    scrypt: drivers.scrypt({
      cost: 16384,
      blockSize: 8,
      parallelization: 1,
      maxMemory: 33554432,
    }),
    bcrypt: drivers.bcrypt({
      rounds: 10,
      saltSize: 16,
      version: 97
    }),
    laravel_hash: LaravelHashDriver({})
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

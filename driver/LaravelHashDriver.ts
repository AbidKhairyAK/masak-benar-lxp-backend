import {
  HashDriverContract,
  ManagerDriverFactory
} from '@adonisjs/core/types/hash'

/**
 * need to polyfill the require function
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const bcrypt = require('bcrypt');


const previousAlgorithm = '$2y$12$' // bcrypt algorithm from the few characters on the start of the previously encrypted password
const currentAlgorithm  = '$2b$12$' // this is for the current encrypted password
const saltRounds        = 12        // match the salt rounds of the previous algorithm, it's on the second $ sign


export class LaravelHashDriver implements HashDriverContract {

  /**
   * Convert raw value to Hash, 
   * used when creating new password for user
   */
  async make(value: string): Promise<string> {
    const _hashedValue = bcrypt.hashSync(value, saltRounds);
    return _hashedValue;
  }

  /**
   * Verify if the plain value matches the provided hash, 
   * used on login
   */
  async verify( hashedValue: string, plainValue: string ): Promise<boolean> {
    let currentHash = hashedValue;

    if (hashedValue.includes(previousAlgorithm)) {
        currentHash = hashedValue.replace(previousAlgorithm, currentAlgorithm);
    }

    return await bcrypt.compareSync(plainValue, currentHash);
  }

  /**
   * idk the logic for this, so i just put it to default value
   */
  needsReHash(): boolean {
    return false;
  }
  isValidHash(): boolean {
    return true
  }
}

/**
 * Factory function so you dont need to intiate it before using it
 */
export function LaravelHashFunction (): ManagerDriverFactory {
  return () => {
    return new LaravelHashDriver()
  }
}
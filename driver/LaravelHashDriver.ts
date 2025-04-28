import {
  HashDriverContract,
  ManagerDriverFactory
} from '@adonisjs/core/types/hash'

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const bcrypt = require('bcrypt');

const saltRounds = 12;

/**
 * Config accepted by the hash driver
 */
export type LaravelHashConfig = {
}

/**
 * Driver implementation
 */
export class LaravelHash implements HashDriverContract {
  constructor(public config: LaravelHashConfig) {
  }

  /**
   * Check if the hash value is formatted as per
   * the hashing algorithm.
   */
  isValidHash(value: string): boolean {
    return bcrypt.compareSync(value, value);
  }

  /**
   * Convert raw value to Hash
   */
  async make(value: string): Promise<string> {
    const _hashedValue = bcrypt.hashSync(value, saltRounds);
    return _hashedValue;
  }

  /**
   * Verify if the plain value matches the provided
   * hash
   */
  async verify(
    hashedValue: string,
    plainValue: string
  ): Promise<boolean> {
    let newHash: string;
    if (hashedValue.includes('$2y$12$')) {
        newHash = hashedValue.replace("$2y$12$", "$2b$12$");
    } else {
        newHash = hashedValue;
    }
    return await bcrypt.compareSync(plainValue, newHash);
  }

  /**
   * Check if the hash needs to be re-hashed because
   * the config parameters have changed
   */
  needsReHash(): boolean {
    return false;
  }
}

/**
 * Factory function to reference the driver
 * inside the config file.
 */
export function LaravelHashDriver (config: LaravelHashConfig): ManagerDriverFactory {
  return () => {
    return new LaravelHash(config)
  }
}
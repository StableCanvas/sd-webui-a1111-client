import { SDWebUIA1111Client } from "../client";

export type CachedApiOptions = {
  client: SDWebUIA1111Client;
  cacheTime: number;
  disableCache?: boolean;
};

export class CachedApi {
  protected _cache = {} as Record<
    string,
    {
      data: any;
      expires: number;
    }
  >;

  protected options: CachedApiOptions;

  constructor(
    options: Pick<CachedApiOptions, "client"> &
      Partial<Omit<CachedApiOptions, "client">>
  ) {
    this.options = {
      ...options,
      disableCache: options.disableCache ?? false,
      cacheTime: options.cacheTime ?? 60 * 1000,
    };
  }

  get client() {
    return this.options.client;
  }

  protected async _getFromCache<T>(key: string) {
    if (this.options.disableCache) {
      return null;
    }
    const cached = this._cache[key];
    if (!cached || cached.expires < Date.now()) {
      return null;
    }
    return cached.data as T;
  }

  protected async _setCache<T>(key: string, data: T) {
    if (this.options.disableCache) {
      return;
    }
    this._cache[key] = {
      data,
      expires: Date.now() + this.options.cacheTime,
    };
  }

  protected async _getFromCacheOrFetch<T>(
    key: string,
    fetch: () => Promise<T>
  ) {
    const cached = await this._getFromCache<T>(key);
    if (cached) {
      return cached;
    }
    const data = await fetch();
    await this._setCache<T>(key, data);
    return data;
  }

  /**
   * Clears the cache by resetting the `_cache` object to an empty object.
   */
  clearCache() {
    this._cache = {};
  }

  /**
   * Removes a cache entry with the specified key.
   *
   * @param {string} key - The key of the cache entry to remove.
   */
  removeCache(key: string) {
    delete this._cache[key];
  }
}

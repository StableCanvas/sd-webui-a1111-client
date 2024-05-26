import { SDWebUIA1111Client } from "../client";

export type CachedApiOptions = {
  client: SDWebUIA1111Client;
  cacheTime: number;
  disableCache?: boolean;
};

/**
 * A global cache hub that stores cache data for all CachedApi instances.
 */
export class GlobalCacheHub {
  static __KEY__ = "__A1111_CLIENT_CACHE__";

  private ensureCache() {
    if (!(globalThis as any)[GlobalCacheHub.__KEY__]) {
      (globalThis as any)[GlobalCacheHub.__KEY__] = {};
    }
  }

  get _cache() {
    this.ensureCache();
    return (globalThis as any)[GlobalCacheHub.__KEY__] as Record<
      string,
      {
        data: any;
        expires: number;
      }
    >;
  }

  clearCache() {
    this.ensureCache();
    (globalThis as any)[GlobalCacheHub.__KEY__] = {};
  }
}

export class CachedApi {
  protected hub: GlobalCacheHub;

  protected options: CachedApiOptions;

  constructor(
    options: Pick<CachedApiOptions, "client"> &
      Partial<Omit<CachedApiOptions, "client">>,
    hub = new GlobalCacheHub()
  ) {
    this.hub = hub;
    this.options = {
      ...options,
      disableCache: options.disableCache ?? false,
      cacheTime: options.cacheTime ?? 60 * 1000,
    };
  }

  private get _cache() {
    return this.hub._cache;
  }

  get client() {
    return this.options.client;
  }

  protected cache_key_prefix() {
    return "";
  }

  protected full_cache_key(key: string) {
    return `${this.cache_key_prefix()}:${key}`;
  }

  protected async _getFromCache<T>(key: string) {
    if (this.options.disableCache) {
      return null;
    }
    const fullKey = this.full_cache_key(key);
    const cached = this._cache[fullKey];
    if (!cached || cached.expires < Date.now()) {
      return null;
    }
    return cached.data as T;
  }

  protected async _setCache<T>(key: string, data: T) {
    if (this.options.disableCache) {
      return;
    }
    const fullKey = this.full_cache_key(key);
    this._cache[fullKey] = {
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
    this.hub.clearCache();
  }

  /**
   * Removes a cache entry with the specified key.
   *
   * @param {string} key - The key of the cache entry to remove.
   */
  removeCache(key: string) {
    const fullKey = this.full_cache_key(key);
    delete this._cache[fullKey];
  }
}

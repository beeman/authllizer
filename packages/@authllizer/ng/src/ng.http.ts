import { BaseHttpClient, IHttpRequestOptions } from '@authllizer/core';
import { IHttpService, IRequestConfig } from 'angular';

/**
 * @see https://docs.angularjs.org/api/ng/service/$http
 */
export class NgHttpClient extends BaseHttpClient {

    protected _client: IHttpService;

    constructor(httpClient: IHttpService) {
        super(httpClient);
    }

    public request<T>(url: string, options: IHttpRequestOptions): Promise<T> {
        (options as IRequestConfig).url = url;

        return this
            ._client(options as IRequestConfig)
            .then((response => response.data)) as any;
    }

}

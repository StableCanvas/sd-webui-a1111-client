/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_detect_controlnet_detect_post } from '../models/Body_detect_controlnet_detect_post';
import type { Body_login_login__post } from '../models/Body_login_login__post';
import type { Body_login_login_post } from '../models/Body_login_login_post';
import type { Body_upload_file_upload_post } from '../models/Body_upload_file_upload_post';
import type { CreateResponse } from '../models/CreateResponse';
import type { EmbeddingsResponse } from '../models/EmbeddingsResponse';
import type { Estimation } from '../models/Estimation';
import type { ExtrasBatchImagesRequest } from '../models/ExtrasBatchImagesRequest';
import type { ExtrasBatchImagesResponse } from '../models/ExtrasBatchImagesResponse';
import type { ExtrasSingleImageRequest } from '../models/ExtrasSingleImageRequest';
import type { ExtrasSingleImageResponse } from '../models/ExtrasSingleImageResponse';
import type { FaceRestorerItem } from '../models/FaceRestorerItem';
import type { Flags } from '../models/Flags';
import type { HistoryResponse } from '../models/HistoryResponse';
import type { HypernetworkItem } from '../models/HypernetworkItem';
import type { ImageToImageResponse } from '../models/ImageToImageResponse';
import type { Img2ImgApiTaskArgs } from '../models/Img2ImgApiTaskArgs';
import type { InterrogateRequest } from '../models/InterrogateRequest';
import type { LatentUpscalerModeItem } from '../models/LatentUpscalerModeItem';
import type { MemoryResponse } from '../models/MemoryResponse';
import type { modules__api__models__ProgressResponse } from '../models/modules__api__models__ProgressResponse';
import type { modules__progress__ProgressResponse } from '../models/modules__progress__ProgressResponse';
import type { Options } from '../models/Options';
import type { PNGInfoRequest } from '../models/PNGInfoRequest';
import type { PNGInfoResponse } from '../models/PNGInfoResponse';
import type { PredictBody } from '../models/PredictBody';
import type { PreprocessResponse } from '../models/PreprocessResponse';
import type { ProgressRequest } from '../models/ProgressRequest';
import type { PromptStyleItem } from '../models/PromptStyleItem';
import type { QueueStatusResponse } from '../models/QueueStatusResponse';
import type { QueueTaskResponse } from '../models/QueueTaskResponse';
import type { QuicksettingsHint } from '../models/QuicksettingsHint';
import type { RealesrganItem } from '../models/RealesrganItem';
import type { ResetBody } from '../models/ResetBody';
import type { SamplerItem } from '../models/SamplerItem';
import type { ScriptInfo } from '../models/ScriptInfo';
import type { ScriptsList } from '../models/ScriptsList';
import type { SDModelItem } from '../models/SDModelItem';
import type { SDVaeItem } from '../models/SDVaeItem';
import type { StableDiffusionProcessingImg2Img } from '../models/StableDiffusionProcessingImg2Img';
import type { StableDiffusionProcessingTxt2Img } from '../models/StableDiffusionProcessingTxt2Img';
import type { TextToImageResponse } from '../models/TextToImageResponse';
import type { TrainResponse } from '../models/TrainResponse';
import type { Txt2ImgApiTaskArgs } from '../models/Txt2ImgApiTaskArgs';
import type { UpscalerItem } from '../models/UpscalerItem';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DefaultService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get Current User
     * @returns string Successful Response
     * @throws ApiError
     */
    public getCurrentUserUserGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/',
        });
    }

    /**
     * Get Current User
     * @returns string Successful Response
     * @throws ApiError
     */
    public getCurrentUserUserGet1(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }

    /**
     * Login Check
     * @returns any Successful Response
     * @throws ApiError
     */
    public loginCheckLoginCheckGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/login_check/',
        });
    }

    /**
     * Login Check
     * @returns any Successful Response
     * @throws ApiError
     */
    public loginCheckLoginCheckGet1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/login_check',
        });
    }

    /**
     * Get Token
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTokenTokenGet(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/token/',
        });
    }

    /**
     * Get Token
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTokenTokenGet1(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/token',
        });
    }

    /**
     * App Id
     * @returns any Successful Response
     * @throws ApiError
     */
    public appIdAppIdGet(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app_id/',
        });
    }

    /**
     * App Id
     * @returns any Successful Response
     * @throws ApiError
     */
    public appIdAppIdGet1(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/app_id',
        });
    }

    /**
     * Login
     * @returns any Successful Response
     * @throws ApiError
     */
    public loginLoginPost({
formData,
}: {
formData: Body_login_login__post,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/login/',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Login
     * @returns any Successful Response
     * @throws ApiError
     */
    public loginLoginPost1({
formData,
}: {
formData: Body_login_login_post,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Main
     * @returns string Successful Response
     * @throws ApiError
     */
    public mainGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * Main
     * @returns string Successful Response
     * @throws ApiError
     */
    public mainHead(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/',
        });
    }

    /**
     * Api Info
     * @returns any Successful Response
     * @throws ApiError
     */
    public apiInfoInfoGet({
serialize = true,
}: {
serialize?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/info',
            query: {
                'serialize': serialize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Api Info
     * @returns any Successful Response
     * @throws ApiError
     */
    public apiInfoInfoGet1({
serialize = true,
}: {
serialize?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/info/',
            query: {
                'serialize': serialize,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Config
     * @returns any Successful Response
     * @throws ApiError
     */
    public getConfigConfigGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config',
        });
    }

    /**
     * Get Config
     * @returns any Successful Response
     * @throws ApiError
     */
    public getConfigConfigGet1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/config/',
        });
    }

    /**
     * Static Resource
     * @returns any Successful Response
     * @throws ApiError
     */
    public staticResourceStaticPathGet({
path,
}: {
path: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/static/{path}',
            path: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Build Resource
     * @returns any Successful Response
     * @throws ApiError
     */
    public buildResourceAssetsPathGet({
path,
}: {
path: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/assets/{path}',
            path: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Favicon
     * @returns any Successful Response
     * @throws ApiError
     */
    public faviconFaviconIcoGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/favicon.ico',
        });
    }

    /**
     * Reverse Proxy
     * @returns any Successful Response
     * @throws ApiError
     */
    public reverseProxyProxyUrlPathGet({
urlPath,
}: {
urlPath: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/proxy={url_path}',
            path: {
                'url_path': urlPath,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reverse Proxy
     * @returns any Successful Response
     * @throws ApiError
     */
    public reverseProxyProxyUrlPathHead({
urlPath,
}: {
urlPath: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/proxy={url_path}',
            path: {
                'url_path': urlPath,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * File
     * @returns any Successful Response
     * @throws ApiError
     */
    public fileFilePathOrUrlGet({
pathOrUrl,
}: {
pathOrUrl: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file={path_or_url}',
            path: {
                'path_or_url': pathOrUrl,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * File
     * @returns any Successful Response
     * @throws ApiError
     */
    public fileFilePathOrUrlHead({
pathOrUrl,
}: {
pathOrUrl: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/file={path_or_url}',
            path: {
                'path_or_url': pathOrUrl,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * File Deprecated
     * @returns any Successful Response
     * @throws ApiError
     */
    public fileDeprecatedFilePathGet({
path,
}: {
path: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/{path}',
            path: {
                'path': path,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reset Iterator
     * @returns any Successful Response
     * @throws ApiError
     */
    public resetIteratorResetPost({
requestBody,
}: {
requestBody: ResetBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Reset Iterator
     * @returns any Successful Response
     * @throws ApiError
     */
    public resetIteratorResetPost1({
requestBody,
}: {
requestBody: ResetBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reset/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Predict
     * @returns any Successful Response
     * @throws ApiError
     */
    public predictApiApiNamePost({
apiName,
requestBody,
}: {
apiName: string,
requestBody: PredictBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{api_name}/',
            path: {
                'api_name': apiName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Predict
     * @returns any Successful Response
     * @throws ApiError
     */
    public predictApiApiNamePost1({
apiName,
requestBody,
}: {
apiName: string,
requestBody: PredictBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/{api_name}',
            path: {
                'api_name': apiName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Predict
     * @returns any Successful Response
     * @throws ApiError
     */
    public predictRunApiNamePost({
apiName,
requestBody,
}: {
apiName: string,
requestBody: PredictBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/run/{api_name}/',
            path: {
                'api_name': apiName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Predict
     * @returns any Successful Response
     * @throws ApiError
     */
    public predictRunApiNamePost1({
apiName,
requestBody,
}: {
apiName: string,
requestBody: PredictBody,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/run/{api_name}',
            path: {
                'api_name': apiName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Queue Status
     * @returns Estimation Successful Response
     * @throws ApiError
     */
    public getQueueStatusQueueStatusGet(): CancelablePromise<Estimation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/queue/status',
        });
    }

    /**
     * Upload File
     * @returns any Successful Response
     * @throws ApiError
     */
    public uploadFileUploadPost({
formData,
}: {
formData: Body_upload_file_upload_post,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Startup Events
     * @returns any Successful Response
     * @throws ApiError
     */
    public startupEventsStartupEventsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/startup-events',
        });
    }

    /**
     * Theme Css
     * @returns string Successful Response
     * @throws ApiError
     */
    public themeCssThemeCssGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/theme.css',
        });
    }

    /**
     * Robots Txt
     * @returns string Successful Response
     * @throws ApiError
     */
    public robotsTxtRobotsTxtGet(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/robots.txt',
        });
    }

    /**
     * Progressapi
     * @returns modules__progress__ProgressResponse Successful Response
     * @throws ApiError
     */
    public progressapiInternalProgressPost({
requestBody,
}: {
requestBody: ProgressRequest,
}): CancelablePromise<modules__progress__ProgressResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/internal/progress',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Quicksettings Hint
     * @returns QuicksettingsHint Successful Response
     * @throws ApiError
     */
    public quicksettingsHintInternalQuicksettingsHintGet(): CancelablePromise<Array<QuicksettingsHint>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/quicksettings-hint',
        });
    }

    /**
     * <Lambda>
     * @returns any Successful Response
     * @throws ApiError
     */
    public lambdaInternalPingGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/ping',
        });
    }

    /**
     * <Lambda>
     * @returns any Successful Response
     * @throws ApiError
     */
    public lambdaInternalProfileStartupGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/profile-startup',
        });
    }

    /**
     * Download Sysinfo
     * @returns any Successful Response
     * @throws ApiError
     */
    public downloadSysinfoInternalSysinfoGet({
attachment,
}: {
attachment?: any,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/sysinfo',
            query: {
                'attachment': attachment,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * <Lambda>
     * @returns any Successful Response
     * @throws ApiError
     */
    public lambdaInternalSysinfoDownloadGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/internal/sysinfo-download',
        });
    }

    /**
     * Text2Imgapi
     * @returns TextToImageResponse Successful Response
     * @throws ApiError
     */
    public text2ImgapiSdapiV1Txt2ImgPost({
requestBody,
}: {
requestBody: StableDiffusionProcessingTxt2Img,
}): CancelablePromise<TextToImageResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/txt2img',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Img2Imgapi
     * @returns ImageToImageResponse Successful Response
     * @throws ApiError
     */
    public img2ImgapiSdapiV1Img2ImgPost({
requestBody,
}: {
requestBody: StableDiffusionProcessingImg2Img,
}): CancelablePromise<ImageToImageResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/img2img',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Extras Single Image Api
     * @returns ExtrasSingleImageResponse Successful Response
     * @throws ApiError
     */
    public extrasSingleImageApiSdapiV1ExtraSingleImagePost({
requestBody,
}: {
requestBody: ExtrasSingleImageRequest,
}): CancelablePromise<ExtrasSingleImageResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/extra-single-image',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Extras Batch Images Api
     * @returns ExtrasBatchImagesResponse Successful Response
     * @throws ApiError
     */
    public extrasBatchImagesApiSdapiV1ExtraBatchImagesPost({
requestBody,
}: {
requestBody: ExtrasBatchImagesRequest,
}): CancelablePromise<ExtrasBatchImagesResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/extra-batch-images',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pnginfoapi
     * @returns PNGInfoResponse Successful Response
     * @throws ApiError
     */
    public pnginfoapiSdapiV1PngInfoPost({
requestBody,
}: {
requestBody: PNGInfoRequest,
}): CancelablePromise<PNGInfoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/png-info',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Progressapi
     * @returns modules__api__models__ProgressResponse Successful Response
     * @throws ApiError
     */
    public progressapiSdapiV1ProgressGet({
skipCurrentImage = false,
}: {
skipCurrentImage?: boolean,
}): CancelablePromise<modules__api__models__ProgressResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/progress',
            query: {
                'skip_current_image': skipCurrentImage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Interrogateapi
     * @returns any Successful Response
     * @throws ApiError
     */
    public interrogateapiSdapiV1InterrogatePost({
requestBody,
}: {
requestBody: InterrogateRequest,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/interrogate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Interruptapi
     * @returns any Successful Response
     * @throws ApiError
     */
    public interruptapiSdapiV1InterruptPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/interrupt',
        });
    }

    /**
     * Skip
     * @returns any Successful Response
     * @throws ApiError
     */
    public skipSdapiV1SkipPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/skip',
        });
    }

    /**
     * Get Config
     * @returns Options Successful Response
     * @throws ApiError
     */
    public getConfigSdapiV1OptionsGet(): CancelablePromise<Options> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/options',
        });
    }

    /**
     * Set Config
     * @returns any Successful Response
     * @throws ApiError
     */
    public setConfigSdapiV1OptionsPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/options',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Cmd Flags
     * @returns Flags Successful Response
     * @throws ApiError
     */
    public getCmdFlagsSdapiV1CmdFlagsGet(): CancelablePromise<Flags> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/cmd-flags',
        });
    }

    /**
     * Get Samplers
     * @returns SamplerItem Successful Response
     * @throws ApiError
     */
    public getSamplersSdapiV1SamplersGet(): CancelablePromise<Array<SamplerItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/samplers',
        });
    }

    /**
     * Get Upscalers
     * @returns UpscalerItem Successful Response
     * @throws ApiError
     */
    public getUpscalersSdapiV1UpscalersGet(): CancelablePromise<Array<UpscalerItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/upscalers',
        });
    }

    /**
     * Get Latent Upscale Modes
     * @returns LatentUpscalerModeItem Successful Response
     * @throws ApiError
     */
    public getLatentUpscaleModesSdapiV1LatentUpscaleModesGet(): CancelablePromise<Array<LatentUpscalerModeItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/latent-upscale-modes',
        });
    }

    /**
     * Get Sd Models
     * @returns SDModelItem Successful Response
     * @throws ApiError
     */
    public getSdModelsSdapiV1SdModelsGet(): CancelablePromise<Array<SDModelItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/sd-models',
        });
    }

    /**
     * Get Sd Vaes
     * @returns SDVaeItem Successful Response
     * @throws ApiError
     */
    public getSdVaesSdapiV1SdVaeGet(): CancelablePromise<Array<SDVaeItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/sd-vae',
        });
    }

    /**
     * Get Hypernetworks
     * @returns HypernetworkItem Successful Response
     * @throws ApiError
     */
    public getHypernetworksSdapiV1HypernetworksGet(): CancelablePromise<Array<HypernetworkItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/hypernetworks',
        });
    }

    /**
     * Get Face Restorers
     * @returns FaceRestorerItem Successful Response
     * @throws ApiError
     */
    public getFaceRestorersSdapiV1FaceRestorersGet(): CancelablePromise<Array<FaceRestorerItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/face-restorers',
        });
    }

    /**
     * Get Realesrgan Models
     * @returns RealesrganItem Successful Response
     * @throws ApiError
     */
    public getRealesrganModelsSdapiV1RealesrganModelsGet(): CancelablePromise<Array<RealesrganItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/realesrgan-models',
        });
    }

    /**
     * Get Prompt Styles
     * @returns PromptStyleItem Successful Response
     * @throws ApiError
     */
    public getPromptStylesSdapiV1PromptStylesGet(): CancelablePromise<Array<PromptStyleItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/prompt-styles',
        });
    }

    /**
     * Get Embeddings
     * @returns EmbeddingsResponse Successful Response
     * @throws ApiError
     */
    public getEmbeddingsSdapiV1EmbeddingsGet(): CancelablePromise<EmbeddingsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/embeddings',
        });
    }

    /**
     * Refresh Checkpoints
     * @returns any Successful Response
     * @throws ApiError
     */
    public refreshCheckpointsSdapiV1RefreshCheckpointsPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/refresh-checkpoints',
        });
    }

    /**
     * Create Embedding
     * @returns CreateResponse Successful Response
     * @throws ApiError
     */
    public createEmbeddingSdapiV1CreateEmbeddingPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<CreateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/create/embedding',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Hypernetwork
     * @returns CreateResponse Successful Response
     * @throws ApiError
     */
    public createHypernetworkSdapiV1CreateHypernetworkPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<CreateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/create/hypernetwork',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Preprocess
     * @returns PreprocessResponse Successful Response
     * @throws ApiError
     */
    public preprocessSdapiV1PreprocessPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<PreprocessResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/preprocess',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Train Embedding
     * @returns TrainResponse Successful Response
     * @throws ApiError
     */
    public trainEmbeddingSdapiV1TrainEmbeddingPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<TrainResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/train/embedding',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Train Hypernetwork
     * @returns TrainResponse Successful Response
     * @throws ApiError
     */
    public trainHypernetworkSdapiV1TrainHypernetworkPost({
requestBody,
}: {
requestBody: Record<string, any>,
}): CancelablePromise<TrainResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/train/hypernetwork',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Memory
     * @returns MemoryResponse Successful Response
     * @throws ApiError
     */
    public getMemorySdapiV1MemoryGet(): CancelablePromise<MemoryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/memory',
        });
    }

    /**
     * Unloadapi
     * @returns any Successful Response
     * @throws ApiError
     */
    public unloadapiSdapiV1UnloadCheckpointPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/unload-checkpoint',
        });
    }

    /**
     * Reloadapi
     * @returns any Successful Response
     * @throws ApiError
     */
    public reloadapiSdapiV1ReloadCheckpointPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/reload-checkpoint',
        });
    }

    /**
     * Get Scripts List
     * @returns ScriptsList Successful Response
     * @throws ApiError
     */
    public getScriptsListSdapiV1ScriptsGet(): CancelablePromise<ScriptsList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/scripts',
        });
    }

    /**
     * Get Script Info
     * @returns ScriptInfo Successful Response
     * @throws ApiError
     */
    public getScriptInfoSdapiV1ScriptInfoGet(): CancelablePromise<Array<ScriptInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/script-info',
        });
    }

    /**
     * Fetch File
     * @returns any Successful Response
     * @throws ApiError
     */
    public fetchFileSdExtraNetworksThumbGet({
filename = '',
}: {
filename?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sd_extra_networks/thumb',
            query: {
                'filename': filename,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Metadata
     * @returns any Successful Response
     * @throws ApiError
     */
    public getMetadataSdExtraNetworksMetadataGet({
page = '',
item = '',
}: {
page?: string,
item?: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sd_extra_networks/metadata',
            query: {
                'page': page,
                'item': item,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Queue Txt2Img
     * @returns QueueTaskResponse Successful Response
     * @throws ApiError
     */
    public queueTxt2ImgAgentSchedulerV1QueueTxt2ImgPost({
requestBody,
}: {
requestBody: Txt2ImgApiTaskArgs,
}): CancelablePromise<QueueTaskResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/queue/txt2img',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Queue Img2Img
     * @returns QueueTaskResponse Successful Response
     * @throws ApiError
     */
    public queueImg2ImgAgentSchedulerV1QueueImg2ImgPost({
requestBody,
}: {
requestBody: Img2ImgApiTaskArgs,
}): CancelablePromise<QueueTaskResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/queue/img2img',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Queue Status Api
     * @returns QueueStatusResponse Successful Response
     * @throws ApiError
     */
    public queueStatusApiAgentSchedulerV1QueueGet({
limit = 20,
offset,
}: {
limit?: number,
offset?: number,
}): CancelablePromise<QueueStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/agent-scheduler/v1/queue',
            query: {
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * History Api
     * @returns HistoryResponse Successful Response
     * @throws ApiError
     */
    public historyApiAgentSchedulerV1HistoryGet({
status,
limit = 20,
offset,
}: {
status?: string,
limit?: number,
offset?: number,
}): CancelablePromise<HistoryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/agent-scheduler/v1/history',
            query: {
                'status': status,
                'limit': limit,
                'offset': offset,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Run Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public runTaskAgentSchedulerV1RunIdPost({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/run/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Requeue Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public requeueTaskAgentSchedulerV1RequeueIdPost({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/requeue/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteTaskAgentSchedulerV1DeleteIdPost({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Move Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public moveTaskAgentSchedulerV1MoveIdOverIdPost({
id,
overId,
}: {
id: string,
overId: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/move/{id}/{over_id}',
            path: {
                'id': id,
                'over_id': overId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pin Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public pinTaskAgentSchedulerV1BookmarkIdPost({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/bookmark/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Unpin Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public unpinTaskAgentSchedulerV1UnbookmarkIdPost({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/unbookmark/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Rename Task
     * @returns any Successful Response
     * @throws ApiError
     */
    public renameTaskAgentSchedulerV1RenameIdPost({
id,
name,
}: {
id: string,
name: string,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/rename/{id}',
            path: {
                'id': id,
            },
            query: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Task Results
     * @returns any Successful Response
     * @throws ApiError
     */
    public getTaskResultsAgentSchedulerV1ResultsIdGet({
id,
zip = false,
}: {
id: string,
zip?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/agent-scheduler/v1/results/{id}',
            path: {
                'id': id,
            },
            query: {
                'zip': zip,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Pause Queue
     * @returns any Successful Response
     * @throws ApiError
     */
    public pauseQueueAgentSchedulerV1PausePost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/pause',
        });
    }

    /**
     * Resume Queue
     * @returns any Successful Response
     * @throws ApiError
     */
    public resumeQueueAgentSchedulerV1ResumePost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/agent-scheduler/v1/resume',
        });
    }

    /**
     * Version
     * @returns any Successful Response
     * @throws ApiError
     */
    public versionControlnetVersionGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/controlnet/version',
        });
    }

    /**
     * Model List
     * @returns any Successful Response
     * @throws ApiError
     */
    public modelListControlnetModelListGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/controlnet/model_list',
        });
    }

    /**
     * Module List
     * @returns any Successful Response
     * @throws ApiError
     */
    public moduleListControlnetModuleListGet({
aliasNames = false,
}: {
aliasNames?: boolean,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/controlnet/module_list',
            query: {
                'alias_names': aliasNames,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Control Types
     * @returns any Successful Response
     * @throws ApiError
     */
    public controlTypesControlnetControlTypesGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/controlnet/control_types',
        });
    }

    /**
     * Settings
     * @returns any Successful Response
     * @throws ApiError
     */
    public settingsControlnetSettingsGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/controlnet/settings',
        });
    }

    /**
     * Detect
     * @returns any Successful Response
     * @throws ApiError
     */
    public detectControlnetDetectPost({
requestBody,
}: {
requestBody?: Body_detect_controlnet_detect_post,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/controlnet/detect',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Loras
     * @returns any Successful Response
     * @throws ApiError
     */
    public getLorasSdapiV1LorasGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sdapi/v1/loras',
        });
    }

    /**
     * Refresh Loras
     * @returns any Successful Response
     * @throws ApiError
     */
    public refreshLorasSdapiV1RefreshLorasPost(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sdapi/v1/refresh-loras',
        });
    }

}

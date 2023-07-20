/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Flags = {
    /**
     * ==SUPPRESS==
     */
    'f'?: boolean;
    /**
     * launch.py argument: download updates for all extensions when starting the program
     */
    update_all_extensions?: boolean;
    /**
     * launch.py argument: do not check python version
     */
    skip_python_version_check?: boolean;
    /**
     * launch.py argument: do not check if CUDA is able to work properly
     */
    skip_torch_cuda_test?: boolean;
    /**
     * launch.py argument: install the appropriate version of xformers even if you have some version already installed
     */
    reinstall_xformers?: boolean;
    /**
     * launch.py argument: install the appropriate version of torch even if you have some version already installed
     */
    reinstall_torch?: boolean;
    /**
     * launch.py argument: check for updates at startup
     */
    update_check?: boolean;
    /**
     * launch.py argument: configure server for testing
     */
    test_server?: boolean;
    /**
     * launch.py argument: skip all environment preparation
     */
    skip_prepare_environment?: boolean;
    /**
     * launch.py argument: skip installation of packages
     */
    skip_install?: boolean;
    /**
     * base path where all user data is stored
     */
    data_dir?: string;
    /**
     * path to config which constructs model
     */
    config?: string;
    /**
     * path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
     */
    ckpt?: string;
    /**
     * Path to directory with stable diffusion checkpoints
     */
    ckpt_dir?: string;
    /**
     * Path to directory with VAE files
     */
    vae_dir?: string;
    /**
     * GFPGAN directory
     */
    gfpgan_dir?: string;
    /**
     * GFPGAN model file name
     */
    gfpgan_model?: string;
    /**
     * do not switch the model to 16-bit floats
     */
    no_half?: boolean;
    /**
     * do not switch the VAE model to 16-bit floats
     */
    no_half_vae?: boolean;
    /**
     * do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
     */
    no_progressbar_hiding?: boolean;
    /**
     * maximum batch count value for the UI
     */
    max_batch_count?: number;
    /**
     * embeddings directory for textual inversion (default: embeddings)
     */
    embeddings_dir?: string;
    /**
     * directory with textual inversion templates
     */
    textual_inversion_templates_dir?: string;
    /**
     * hypernetwork directory
     */
    hypernetwork_dir?: string;
    /**
     * localizations directory
     */
    localizations_dir?: string;
    /**
     * allow custom script execution from webui
     */
    allow_code?: boolean;
    /**
     * enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
     */
    medvram?: boolean;
    /**
     * enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
     */
    lowvram?: boolean;
    /**
     * load stable diffusion checkpoint weights to VRAM instead of RAM
     */
    lowram?: boolean;
    /**
     * disables cond/uncond batching that is enabled to save memory with --medvram or --lowvram
     */
    always_batch_cond_uncond?: boolean;
    /**
     * does not do anything.
     */
    unload_gfpgan?: boolean;
    /**
     * evaluate at this precision
     */
    precision?: string;
    /**
     * upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
     */
    upcast_sampling?: boolean;
    /**
     * use share=True for gradio and make the UI accessible through their site
     */
    share?: boolean;
    /**
     * ngrok authtoken, alternative to gradio --share
     */
    ngrok?: string;
    /**
     * does not do anything.
     */
    ngrok_region?: string;
    /**
     * The options to pass to ngrok in JSON format, e.g.: '{"authtoken_from_env":true, "basic_auth":"user:password", "oauth_provider":"google", "oauth_allow_emails":"user@asdf.com"}'
     */
    ngrok_options?: Record<string, any>;
    /**
     * enable extensions tab regardless of other options
     */
    enable_insecure_extension_access?: boolean;
    /**
     * Path to directory with codeformer model file(s).
     */
    codeformer_models_path?: string;
    /**
     * Path to directory with GFPGAN model file(s).
     */
    gfpgan_models_path?: string;
    /**
     * Path to directory with ESRGAN model file(s).
     */
    esrgan_models_path?: string;
    /**
     * Path to directory with BSRGAN model file(s).
     */
    bsrgan_models_path?: string;
    /**
     * Path to directory with RealESRGAN model file(s).
     */
    realesrgan_models_path?: string;
    /**
     * Path to directory with CLIP model file(s).
     */
    clip_models_path?: string;
    /**
     * enable xformers for cross attention layers
     */
    xformers?: boolean;
    /**
     * enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
     */
    force_enable_xformers?: boolean;
    /**
     * enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
     */
    xformers_flash_attention?: boolean;
    /**
     * does not do anything
     */
    deepdanbooru?: boolean;
    /**
     * prefer Doggettx's cross-attention layer optimization for automatic choice of optimization
     */
    opt_split_attention?: boolean;
    /**
     * prefer memory efficient sub-quadratic cross-attention layer optimization for automatic choice of optimization
     */
    opt_sub_quad_attention?: boolean;
    /**
     * query chunk size for the sub-quadratic cross-attention layer optimization to use
     */
    sub_quad_q_chunk_size?: number;
    /**
     * kv chunk size for the sub-quadratic cross-attention layer optimization to use
     */
    sub_quad_kv_chunk_size?: string;
    /**
     * the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
     */
    sub_quad_chunk_threshold?: string;
    /**
     * prefer InvokeAI's cross-attention layer optimization for automatic choice of optimization
     */
    opt_split_attention_invokeai?: boolean;
    /**
     * prefer older version of split attention optimization for automatic choice of optimization
     */
    opt_split_attention_v1?: boolean;
    /**
     * prefer scaled dot product cross-attention layer optimization for automatic choice of optimization; requires PyTorch 2.*
     */
    opt_sdp_attention?: boolean;
    /**
     * prefer scaled dot product cross-attention layer optimization without memory efficient attention for automatic choice of optimization, makes image generation deterministic; requires PyTorch 2.*
     */
    opt_sdp_no_mem_attention?: boolean;
    /**
     * prefer no cross-attention layer optimization for automatic choice of optimization
     */
    disable_opt_split_attention?: boolean;
    /**
     * do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
     */
    disable_nan_check?: boolean;
    /**
     * use CPU as torch device for specified modules
     */
    use_cpu?: Array<any>;
    /**
     * launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
     */
    listen?: boolean;
    /**
     * launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
     */
    port?: string;
    /**
     * does not do anything
     */
    show_negative_prompt?: boolean;
    /**
     * filename to use for ui configuration
     */
    ui_config_file?: string;
    /**
     * hide directory configuration from webui
     */
    hide_ui_dir_config?: boolean;
    /**
     * disable editing settings
     */
    freeze_settings?: boolean;
    /**
     * filename to use for ui settings
     */
    ui_settings_file?: string;
    /**
     * launch gradio with --debug option
     */
    gradio_debug?: boolean;
    /**
     * set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     */
    gradio_auth?: string;
    /**
     * set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
     */
    gradio_auth_path?: string;
    /**
     * does not do anything
     */
    gradio_img2img_tool?: string;
    /**
     * does not do anything
     */
    gradio_inpaint_tool?: string;
    /**
     * add path to gradio's allowed_paths, make it possible to serve files from it
     */
    gradio_allowed_path?: string;
    /**
     * change memory type for stable diffusion to channels last
     */
    opt_channelslast?: boolean;
    /**
     * filename to use for styles
     */
    styles_file?: string;
    /**
     * open the webui URL in the system's default browser upon launch
     */
    autolaunch?: boolean;
    /**
     * launches the UI with light or dark theme
     */
    theme?: string;
    /**
     * use textbox for seeds in UI (no up/down, but possible to input long seeds)
     */
    use_textbox_seed?: boolean;
    /**
     * do not output progressbars to console
     */
    disable_console_progressbars?: boolean;
    /**
     * print prompts to console when generating with txt2img and img2img
     */
    enable_console_prompts?: boolean;
    /**
     * Checkpoint to use as VAE; setting this argument disables all settings related to VAE
     */
    vae_path?: string;
    /**
     * disable checking pytorch models for malicious code
     */
    disable_safe_unpickle?: boolean;
    /**
     * use api=True to launch the API together with the webui (use --nowebui instead for only the API)
     */
    api?: boolean;
    /**
     * Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
     */
    api_auth?: string;
    /**
     * use api-log=True to enable logging of all API requests
     */
    api_log?: boolean;
    /**
     * use api=True to launch the API instead of the webui
     */
    nowebui?: boolean;
    /**
     * Don't load model to quickly launch UI
     */
    ui_debug_mode?: boolean;
    /**
     * Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
     */
    device_id?: string;
    /**
     * Administrator rights
     */
    administrator?: boolean;
    /**
     * Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
     */
    cors_allow_origins?: string;
    /**
     * Allowed CORS origin(s) in the form of a single regular expression
     */
    cors_allow_origins_regex?: string;
    /**
     * Partially enables TLS, requires --tls-certfile to fully function
     */
    tls_keyfile?: string;
    /**
     * Partially enables TLS, requires --tls-keyfile to fully function
     */
    tls_certfile?: string;
    /**
     * When passed, enables the use of self-signed certificates.
     */
    disable_tls_verify?: string;
    /**
     * Sets hostname of server
     */
    server_name?: string;
    /**
     * does not do anything
     */
    gradio_queue?: boolean;
    /**
     * Disables gradio queue; causes the webpage to use http requests instead of websockets; was the defaul in earlier versions
     */
    no_gradio_queue?: boolean;
    /**
     * Do not check versions of torch and xformers
     */
    skip_version_check?: boolean;
    /**
     * disable sha256 hashing of checkpoints to help loading performance
     */
    no_hashing?: boolean;
    /**
     * don't download SD1.5 model even if no model is found in --ckpt-dir
     */
    no_download_sd_model?: boolean;
    /**
     * customize the subpath for gradio, use with reverse proxy
     */
    subpath?: string;
    /**
     * add /_stop route to stop server
     */
    add_stop_route?: boolean;
    /**
     * Path to directory with ControlNet models
     */
    controlnet_dir?: string;
    /**
     * Path to directory with annotator model directories
     */
    controlnet_annotator_models_path?: string;
    /**
     * do not switch the ControlNet models to 16-bit floats (only needed without --no-half)
     */
    no_half_controlnet?: string;
    /**
     * Cache size for controlnet preprocessor results
     */
    controlnet_preprocessor_cache_size?: number;
    /**
     * Set the log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
     */
    controlnet_loglevel?: string;
    /**
     * Path to directory with LDSR model file(s).
     */
    ldsr_models_path?: string;
    /**
     * Path to directory with Lora networks.
     */
    lora_dir?: string;
    /**
     * Path to directory with ScuNET model file(s).
     */
    scunet_models_path?: string;
    /**
     * Path to directory with SwinIR model file(s).
     */
    swinir_models_path?: string;
};

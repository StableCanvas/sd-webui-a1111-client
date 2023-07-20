/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Options = {
    /**
     * Always save all generated images
     */
    samples_save?: boolean;
    /**
     * File format for images
     */
    samples_format?: string;
    /**
     * Images filename pattern
     */
    samples_filename_pattern?: string;
    /**
     * Add number to filename when saving
     */
    save_images_add_number?: boolean;
    /**
     * Always save all generated image grids
     */
    grid_save?: boolean;
    /**
     * File format for grids
     */
    grid_format?: string;
    /**
     * Add extended info (seed, prompt) to filename when saving grid
     */
    grid_extended_filename?: boolean;
    /**
     * Do not save grids consisting of one picture
     */
    grid_only_if_multiple?: boolean;
    /**
     * Prevent empty spots in grid (when set to autodetect)
     */
    grid_prevent_empty_spots?: boolean;
    /**
     * Archive filename pattern
     */
    grid_zip_filename_pattern?: string;
    /**
     * Grid row count; use -1 for autodetect and 0 for it to be same as batch size
     */
    n_rows?: number;
    /**
     * Save text information about generation parameters as chunks to png files
     */
    enable_pnginfo?: boolean;
    /**
     * Create a text file next to every image with generation parameters.
     */
    save_txt?: boolean;
    /**
     * Save a copy of image before doing face restoration.
     */
    save_images_before_face_restoration?: boolean;
    /**
     * Save a copy of image before applying highres fix.
     */
    save_images_before_highres_fix?: boolean;
    /**
     * Save a copy of image before applying color correction to img2img results
     */
    save_images_before_color_correction?: boolean;
    /**
     * For inpainting, save a copy of the greyscale mask
     */
    save_mask?: boolean;
    /**
     * For inpainting, save a masked composite
     */
    save_mask_composite?: boolean;
    /**
     * Quality for saved jpeg images
     */
    jpeg_quality?: number;
    /**
     * Use lossless compression for webp images
     */
    webp_lossless?: boolean;
    /**
     * Save copy of large images as JPG
     */
    export_for_4chan?: boolean;
    /**
     * File size limit for the above option, MB
     */
    img_downscale_threshold?: number;
    /**
     * Width/height limit for the above option, in pixels
     */
    target_side_length?: number;
    /**
     * Maximum image size
     */
    img_max_size_mp?: number;
    /**
     * Use original name for output filename during batch process in extras tab
     */
    use_original_name_batch?: boolean;
    /**
     * Use upscaler name as filename suffix in the extras tab
     */
    use_upscaler_name_as_suffix?: boolean;
    /**
     * When using 'Save' button, only save a single selected image
     */
    save_selected_only?: boolean;
    /**
     * Save init images when using img2img
     */
    save_init_img?: boolean;
    /**
     * Directory for temporary images; leave empty for default
     */
    temp_dir?: string;
    /**
     * Cleanup non-default temporary directory when starting webui
     */
    clean_temp_dir_at_start?: boolean;
    /**
     * Output directory for images; if empty, defaults to three directories below
     */
    outdir_samples?: string;
    /**
     * Output directory for txt2img images
     */
    outdir_txt2img_samples?: string;
    /**
     * Output directory for img2img images
     */
    outdir_img2img_samples?: string;
    /**
     * Output directory for images from extras tab
     */
    outdir_extras_samples?: string;
    /**
     * Output directory for grids; if empty, defaults to two directories below
     */
    outdir_grids?: string;
    /**
     * Output directory for txt2img grids
     */
    outdir_txt2img_grids?: string;
    /**
     * Output directory for img2img grids
     */
    outdir_img2img_grids?: string;
    /**
     * Directory for saving images using the Save button
     */
    outdir_save?: string;
    /**
     * Directory for saving init images when using img2img
     */
    outdir_init_images?: string;
    /**
     * Save images to a subdirectory
     */
    save_to_dirs?: boolean;
    /**
     * Save grids to a subdirectory
     */
    grid_save_to_dirs?: boolean;
    /**
     * When using "Save" button, save images to a subdirectory
     */
    use_save_to_dirs_for_ui?: boolean;
    /**
     * Directory name pattern
     */
    directories_filename_pattern?: string;
    /**
     * Max prompt words for [prompt_words] pattern
     */
    directories_max_prompt_words?: number;
    /**
     * Tile size for ESRGAN upscalers.
     */
    ESRGAN_tile?: number;
    /**
     * Tile overlap for ESRGAN upscalers.
     */
    ESRGAN_tile_overlap?: number;
    /**
     * Select which Real-ESRGAN models to show in the web UI.
     */
    realesrgan_enabled_models?: Array<any>;
    /**
     * Upscaler for img2img
     */
    upscaler_for_img2img?: null;
    /**
     * Face restoration model
     */
    face_restoration_model?: string;
    /**
     * CodeFormer weight
     */
    code_former_weight?: number;
    /**
     * Move face restoration model from VRAM into RAM after processing
     */
    face_restoration_unload?: boolean;
    /**
     * Show warnings in console.
     */
    show_warnings?: boolean;
    /**
     * VRAM usage polls per second during generation.
     */
    memmon_poll_rate?: number;
    /**
     * Always print all generation info to standard output
     */
    samples_log_stdout?: boolean;
    /**
     * Add a second progress bar to the console that shows progress for an entire job.
     */
    multiple_tqdm?: boolean;
    /**
     * Print extra hypernetwork information to console.
     */
    print_hypernet_extra?: boolean;
    /**
     * Load models/files in hidden directories
     */
    list_hidden_files?: boolean;
    /**
     * Move VAE and CLIP to RAM when training if possible. Saves VRAM.
     */
    unload_models_when_training?: boolean;
    /**
     * Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
     */
    pin_memory?: boolean;
    /**
     * Saves Optimizer state as separate *.optim file. Training of embedding or HN can be resumed with the matching optim file.
     */
    save_optimizer_state?: boolean;
    /**
     * Save textual inversion and hypernet settings to a text file whenever training starts.
     */
    save_training_settings_to_txt?: boolean;
    /**
     * Filename word regex
     */
    dataset_filename_word_regex?: string;
    /**
     * Filename join string
     */
    dataset_filename_join_string?: string;
    /**
     * Number of repeats for a single input image per epoch; used only for displaying epoch number
     */
    training_image_repeats_per_epoch?: number;
    /**
     * Save an csv containing the loss to log directory every N steps, 0 to disable
     */
    training_write_csv_every?: number;
    /**
     * Use cross attention optimizations while training
     */
    training_xattention_optimizations?: boolean;
    /**
     * Enable tensorboard logging.
     */
    training_enable_tensorboard?: boolean;
    /**
     * Save generated images within tensorboard.
     */
    training_tensorboard_save_images?: boolean;
    /**
     * How often, in seconds, to flush the pending tensorboard events and summaries to disk.
     */
    training_tensorboard_flush_every?: number;
    /**
     * Stable Diffusion checkpoint
     */
    sd_model_checkpoint?: string;
    /**
     * Checkpoints to cache in RAM
     */
    sd_checkpoint_cache?: number;
    /**
     * VAE Checkpoints to cache in RAM
     */
    sd_vae_checkpoint_cache?: number;
    /**
     * SD VAE
     */
    sd_vae?: string;
    /**
     * Ignore selected VAE for stable diffusion checkpoints that have their own .vae.pt next to them
     */
    sd_vae_as_default?: boolean;
    /**
     * SD Unet
     */
    sd_unet?: string;
    /**
     * Inpainting conditioning mask strength
     */
    inpainting_mask_weight?: number;
    /**
     * Noise multiplier for img2img
     */
    initial_noise_multiplier?: number;
    /**
     * Apply color correction to img2img results to match original colors.
     */
    img2img_color_correction?: boolean;
    /**
     * With img2img, do exactly the amount of steps the slider specifies.
     */
    img2img_fix_steps?: boolean;
    /**
     * With img2img, fill image's transparent parts with this color.
     */
    img2img_background_color?: string;
    /**
     * Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds. Requires restart to apply.
     */
    enable_quantization?: boolean;
    /**
     * Enable emphasis
     */
    enable_emphasis?: boolean;
    /**
     * Make K-diffusion samplers produce same images in a batch as when making a single image
     */
    enable_batch_seeds?: boolean;
    /**
     * Prompt word wrap length limit
     */
    comma_padding_backtrack?: number;
    /**
     * Clip skip
     */
    CLIP_stop_at_last_layers?: number;
    /**
     * Upcast cross attention layer to float32
     */
    upcast_attn?: boolean;
    /**
     * Random number generator source.
     */
    randn_source?: string;
    /**
     * Cross attention optimization
     */
    cross_attention_optimization?: string;
    /**
     * Negative Guidance minimum sigma
     */
    s_min_uncond?: number;
    /**
     * Token merging ratio
     */
    token_merging_ratio?: number;
    /**
     * Token merging ratio for img2img
     */
    token_merging_ratio_img2img?: number;
    /**
     * Token merging ratio for high-res pass
     */
    token_merging_ratio_hr?: number;
    /**
     * Pad prompt/negative prompt to be same length
     */
    pad_cond_uncond?: boolean;
    /**
     * persistent cond cache
     */
    experimental_persistent_cond_cache?: boolean;
    /**
     * Use old emphasis implementation. Can be useful to reproduce old seeds.
     */
    use_old_emphasis_implementation?: boolean;
    /**
     * Use old karras scheduler sigmas (0.1 to 10).
     */
    use_old_karras_scheduler_sigmas?: boolean;
    /**
     * Do not make DPM++ SDE deterministic across different batch sizes.
     */
    no_dpmpp_sde_batch_determinism?: boolean;
    /**
     * For hires fix, use width/height sliders to set final resolution rather than first pass (disables Upscale by, Resize width/height to).
     */
    use_old_hires_fix_width_height?: boolean;
    /**
     * Do not fix prompt schedule for second order samplers.
     */
    dont_fix_second_order_samplers_schedule?: boolean;
    /**
     * For hires fix, calculate conds of second pass using extra networks of first pass.
     */
    hires_fix_use_firstpass_conds?: boolean;
    /**
     * Keep models in VRAM
     */
    interrogate_keep_models_in_memory?: boolean;
    /**
     * Include ranks of model tags matches in results.
     */
    interrogate_return_ranks?: boolean;
    /**
     * BLIP: num_beams
     */
    interrogate_clip_num_beams?: number;
    /**
     * BLIP: minimum description length
     */
    interrogate_clip_min_length?: number;
    /**
     * BLIP: maximum description length
     */
    interrogate_clip_max_length?: number;
    /**
     * CLIP: maximum number of lines in text file
     */
    interrogate_clip_dict_limit?: number;
    /**
     * CLIP: skip inquire categories
     */
    interrogate_clip_skip_categories?: Array<any>;
    /**
     * deepbooru: score threshold
     */
    interrogate_deepbooru_score_threshold?: number;
    /**
     * deepbooru: sort tags alphabetically
     */
    deepbooru_sort_alpha?: boolean;
    /**
     * deepbooru: use spaces in tags
     */
    deepbooru_use_spaces?: boolean;
    /**
     * deepbooru: escape (\) brackets
     */
    deepbooru_escape?: boolean;
    /**
     * deepbooru: filter out those tags
     */
    deepbooru_filter_tags?: string;
    /**
     * Show hidden directories
     */
    extra_networks_show_hidden_directories?: boolean;
    /**
     * Show cards for models in hidden directories
     */
    extra_networks_hidden_models?: string;
    /**
     * Default view for Extra Networks
     */
    extra_networks_default_view?: string;
    /**
     * Multiplier for extra networks
     */
    extra_networks_default_multiplier?: number;
    /**
     * Card width for Extra Networks
     */
    extra_networks_card_width?: number;
    /**
     * Card height for Extra Networks
     */
    extra_networks_card_height?: number;
    /**
     * Extra networks separator
     */
    extra_networks_add_text_separator?: string;
    /**
     * Extra networks tab order
     */
    ui_extra_networks_tab_reorder?: string;
    /**
     * Add hypernetwork to prompt
     */
    sd_hypernetwork?: string;
    /**
     * Localization
     */
    localization?: string;
    /**
     * Gradio theme
     */
    gradio_theme?: string;
    /**
     * img2img: height of image editor
     */
    img2img_editor_height?: number;
    /**
     * Show grid in results for web
     */
    return_grid?: boolean;
    /**
     * For inpainting, include the greyscale mask in results for web
     */
    return_mask?: boolean;
    /**
     * For inpainting, include masked composite in results for web
     */
    return_mask_composite?: boolean;
    /**
     * Do not show any images in results for web
     */
    do_not_show_images?: boolean;
    /**
     * Send seed when sending prompt or image to other interface
     */
    send_seed?: boolean;
    /**
     * Send size when sending prompt or image to another interface
     */
    send_size?: boolean;
    /**
     * Font for image grids that have text
     */
    font?: string;
    /**
     * Enable full page image viewer
     */
    js_modal_lightbox?: boolean;
    /**
     * Show images zoomed in by default in full page image viewer
     */
    js_modal_lightbox_initially_zoomed?: boolean;
    /**
     * Navigate image viewer with gamepad
     */
    js_modal_lightbox_gamepad?: boolean;
    /**
     * Gamepad repeat period, in milliseconds
     */
    js_modal_lightbox_gamepad_repeat?: number;
    /**
     * Show generation progress in window title.
     */
    show_progress_in_title?: boolean;
    /**
     * Use dropdown for sampler selection instead of radio group
     */
    samplers_in_dropdown?: boolean;
    /**
     * Show Width/Height and Batch sliders in same row
     */
    dimensions_and_batch_together?: boolean;
    /**
     * Ctrl+up/down precision when editing (attention:1.1)
     */
    keyedit_precision_attention?: number;
    /**
     * Ctrl+up/down precision when editing <extra networks:0.9>
     */
    keyedit_precision_extra?: number;
    /**
     * Ctrl+up/down word delimiters
     */
    keyedit_delimiters?: string;
    /**
     * Quicksettings list
     */
    quicksettings_list?: Array<any>;
    /**
     * UI tab order
     */
    ui_tab_order?: Array<any>;
    /**
     * Hidden UI tabs
     */
    hidden_tabs?: Array<any>;
    /**
     * txt2img/img2img UI item order
     */
    ui_reorder_list?: Array<any>;
    /**
     * Hires fix: show hires sampler selection
     */
    hires_fix_show_sampler?: boolean;
    /**
     * Hires fix: show hires prompt and negative prompt
     */
    hires_fix_show_prompts?: boolean;
    /**
     * Disable prompt token counters
     */
    disable_token_counters?: boolean;
    /**
     * Add model hash to generation information
     */
    add_model_hash_to_info?: boolean;
    /**
     * Add model name to generation information
     */
    add_model_name_to_info?: boolean;
    /**
     * Add program version to generation information
     */
    add_version_to_infotext?: boolean;
    /**
     * Disregard checkpoint information from pasted infotext
     */
    disable_weights_auto_swap?: boolean;
    /**
     * Infer styles from prompts of pasted infotext
     */
    infotext_styles?: string;
    /**
     * Show progressbar
     */
    show_progressbar?: boolean;
    /**
     * Show live previews of the created image
     */
    live_previews_enable?: boolean;
    /**
     * Live preview file format
     */
    live_previews_image_format?: string;
    /**
     * Show previews of all images generated in a batch as a grid
     */
    show_progress_grid?: boolean;
    /**
     * Live preview display period
     */
    show_progress_every_n_steps?: number;
    /**
     * Live preview method
     */
    show_progress_type?: string;
    /**
     * Live preview subject
     */
    live_preview_content?: string;
    /**
     * Progressbar and preview update period
     */
    live_preview_refresh_period?: number;
    /**
     * Hide samplers in user interface
     */
    hide_samplers?: Array<any>;
    /**
     * Eta for DDIM
     */
    eta_ddim?: number;
    /**
     * Eta for ancestral samplers
     */
    eta_ancestral?: number;
    /**
     * img2img DDIM discretize
     */
    ddim_discretize?: string;
    /**
     * sigma churn
     */
    s_churn?: number;
    /**
     * sigma tmin
     */
    s_tmin?: number;
    /**
     * sigma noise
     */
    s_noise?: number;
    /**
     * scheduler type
     */
    k_sched_type?: string;
    /**
     * sigma min
     */
    sigma_min?: number;
    /**
     * sigma max
     */
    sigma_max?: number;
    /**
     * rho
     */
    rho?: number;
    /**
     * Eta noise seed delta
     */
    eta_noise_seed_delta?: number;
    /**
     * Always discard next-to-last sigma
     */
    always_discard_next_to_last_sigma?: boolean;
    /**
     * UniPC variant
     */
    uni_pc_variant?: string;
    /**
     * UniPC skip type
     */
    uni_pc_skip_type?: string;
    /**
     * UniPC order
     */
    uni_pc_order?: number;
    /**
     * UniPC lower order final
     */
    uni_pc_lower_order_final?: boolean;
    /**
     * Enable postprocessing operations in txt2img and img2img tabs
     */
    postprocessing_enable_in_main_ui?: Array<any>;
    /**
     * Postprocessing operation order
     */
    postprocessing_operation_order?: Array<any>;
    /**
     * Maximum number of images in upscaling cache
     */
    upscaling_max_images_in_cache?: number;
    /**
     * Disable these extensions
     */
    disabled_extensions?: Array<any>;
    /**
     * Disable all extensions (preserves the list of disabled extensions)
     */
    disable_all_extensions?: null;
    /**
     * Config state file to restore from, under 'config-states/' folder
     */
    restore_config_state_file?: null;
    /**
     * SHA256 hash of the current checkpoint
     */
    sd_checkpoint_hash?: string;
};

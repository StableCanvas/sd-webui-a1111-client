// prettier-ignore
export type GenerationResponseInfo = {
    prompt:                           string;
    all_prompts:                      string[];
    negative_prompt:                  string;
    all_negative_prompts:             string[];
    seed:                             number;
    all_seeds:                        number[];
    subseed:                          number;
    all_subseeds:                     number[];
    subseed_strength:                 number;
    width:                            number;
    height:                           number;
    sampler_name:                     string;
    cfg_scale:                        number;
    steps:                            number;
    batch_size:                       number;
    restore_faces:                    boolean;
    face_restoration_model:           null;
    sd_model_name:                    string;
    sd_model_hash:                    string;
    sd_vae_name:                      null;
    sd_vae_hash:                      null;
    seed_resize_from_w:               number;
    seed_resize_from_h:               number;
    denoising_strength:               null;
    extra_generation_params:          Record<string, any>;
    index_of_first_image:             number;
    infotexts:                        string[];
    styles:                           any[];
    job_timestamp:                    string;
    clip_skip:                        number;
    is_using_inpainting_conditioning: boolean;
    version:                          string;
}

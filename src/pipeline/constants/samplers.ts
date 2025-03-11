export default [
  {
    name: "DPM++ 2M",
    aliases: ["k_dpmpp_2m"],
    options: {
      scheduler: "karras",
    },
  },
  {
    name: "DPM++ SDE",
    aliases: ["k_dpmpp_sde"],
    options: {
      scheduler: "karras",
      second_order: "True",
      brownian_noise: "True",
    },
  },
  {
    name: "DPM++ 2M SDE",
    aliases: ["k_dpmpp_2m_sde"],
    options: {
      scheduler: "exponential",
      brownian_noise: "True",
    },
  },
  {
    name: "DPM++ 2M SDE Heun",
    aliases: ["k_dpmpp_2m_sde_heun"],
    options: {
      scheduler: "exponential",
      brownian_noise: "True",
      solver_type: "heun",
    },
  },
  {
    name: "DPM++ 2S a",
    aliases: ["k_dpmpp_2s_a"],
    options: {
      scheduler: "karras",
      uses_ensd: "True",
      second_order: "True",
    },
  },
  {
    name: "DPM++ 3M SDE",
    aliases: ["k_dpmpp_3m_sde"],
    options: {
      scheduler: "exponential",
      discard_next_to_last_sigma: "True",
      brownian_noise: "True",
    },
  },
  {
    name: "Euler a",
    aliases: ["k_euler_a", "k_euler_ancestral"],
    options: {
      uses_ensd: "True",
    },
  },
  {
    name: "Euler",
    aliases: ["k_euler"],
    options: {},
  },
  {
    name: "LMS",
    aliases: ["k_lms"],
    options: {},
  },
  {
    name: "Heun",
    aliases: ["k_heun"],
    options: {
      second_order: "True",
    },
  },
  {
    name: "DPM2",
    aliases: ["k_dpm_2"],
    options: {
      scheduler: "karras",
      discard_next_to_last_sigma: "True",
      second_order: "True",
    },
  },
  {
    name: "DPM2 a",
    aliases: ["k_dpm_2_a"],
    options: {
      scheduler: "karras",
      discard_next_to_last_sigma: "True",
      uses_ensd: "True",
      second_order: "True",
    },
  },
  {
    name: "DPM fast",
    aliases: ["k_dpm_fast"],
    options: {
      uses_ensd: "True",
    },
  },
  {
    name: "DPM adaptive",
    aliases: ["k_dpm_ad"],
    options: {
      uses_ensd: "True",
    },
  },
  {
    name: "Restart",
    aliases: ["restart"],
    options: {
      scheduler: "karras",
      second_order: "True",
    },
  },
  {
    name: "DDIM",
    aliases: ["ddim"],
    options: {},
  },
  {
    name: "DDIM CFG++",
    aliases: ["ddim_cfgpp"],
    options: {},
  },
  {
    name: "PLMS",
    aliases: ["plms"],
    options: {},
  },
  {
    name: "UniPC",
    aliases: ["unipc"],
    options: {},
  },
  {
    name: "LCM",
    aliases: ["k_lcm"],
    options: {},
  },
] as const;

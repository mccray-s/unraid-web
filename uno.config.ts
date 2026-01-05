import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-main': 'bg-neutral-50 dark:bg-neutral-900',
      'text-main': 'text-neutral-800 dark:text-neutral-200',
      'text-link': 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300',
      'border-main': 'border-neutral-200 dark:border-neutral-800',
    },
    {
      'text-title': 'text-neutral-900 dark:text-white text-4xl font-800',
      'nav-link': 'text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 cursor-pointer',
      'prose-link': 'text-primary-600 dark:text-primary-400 decoration-none hover:underline',
      'container-link': 'p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 cursor-pointer',
    },
    {
      // Liquid Glass Utilities
      'glass-panel': 'bg-white/85 dark:bg-neutral-900/85 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl',
      'glass-button': 'bg-white/20 hover:bg-white/30 active:scale-95 transition-all backdrop-blur-md border border-white/10 shadow-lg text-primary-700 dark:text-primary-300',
      'hr-line': 'w-14 mx-auto my-8 border-solid border-1px !border-neutral-200 !dark:border-neutral-800',
    },
  ],
  theme: {
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
        950: '#431407',
      },
      neutral: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Public Sans:400,600,800',
        mono: 'DM Mono:400,600',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-ri-file-list-2-line',
    'i-carbon-campsite',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-youtube',
    'i-simple-icons-bilibili',
    'i-simple-icons-zhihu',
    'i-simple-icons-sinaweibo',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
    // Feature Icons
    'i-ri-dashboard-line',
    'i-mdi-docker',
    'i-ri-hard-drive-2-line',
    'i-ri-server-line',
    'i-ri-shield-check-line',
    'i-ri-palette-line',
  ],
})

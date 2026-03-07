import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Team Building — Git Flow Practice',
  description: 'Entorno de prácticas de Git Flow colaborativo, Peer Review y documentación con Vitepress',
  lang: 'es-ES',

  // Para GitHub Pages
  base: '/demo/',
  srcDir: './src',

  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Equipo', link: '/team' },
      { text: 'Contacto', link: '/contact' },
      { text: 'Backlog', link: '/backlog/F-01.1' },
    ],

    sidebar: [
      {
        text: '👥 El Equipo',
        items: [
          { text: 'Perfiles del equipo', link: '/team' },
          { text: 'Directorio de contacto', link: '/contact' },
        ],
      },
      {
        text: '📋 Backlog — Must',
        collapsed: false,
        items: [
          { text: 'F-01.1 Tarjeta básica de perfil', link: '/backlog/F-01.1' },
          { text: 'F-01.2 Formación académica', link: '/backlog/F-01.2' },
          { text: 'F-01.3 Stack tecnológico', link: '/backlog/F-01.3' },
          { text: 'F-01.4 Datos de contacto', link: '/backlog/F-01.4' },
          { text: 'F-01.5 Presentación en landing', link: '/backlog/F-01.5' },
          { text: 'F-01.6 Experiencia previa', link: '/backlog/F-01.6' },
        ],
      },
      {
        text: '📋 Backlog — Should',
        collapsed: false,
        items: [
          { text: 'F-01.7 Hobbies e intereses', link: '/backlog/F-01.7' },
          { text: 'F-01.8 Recomendación cultural', link: '/backlog/F-01.8' },
          { text: 'F-01.9 Lenguaje favorito', link: '/backlog/F-01.9' },
          { text: 'F-01.10 Dato curioso', link: '/backlog/F-01.10' },
          { text: 'F-01.11 Objetivo profesional', link: '/backlog/F-01.11' },
          { text: 'F-01.12 Retrospectiva personal', link: '/backlog/F-01.12' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Maya-AQSS/demo' },
    ],

    footer: {
      message: 'Team Building — Git Flow Practice',
      copyright: 'Copyright © 2026',
    },

    search: {
      provider: 'local',
    },
  },
});

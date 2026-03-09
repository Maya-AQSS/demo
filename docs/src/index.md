---
layout: home

hero:
  name: "Team Building"
  text: "Práctica de Git Flow colaborativo"
  tagline: "Aprende a trabajar en equipo con Git: ramas, Pull Requests, Peer Review y resolución de conflictos — todo en un único proyecto real."
  actions:
    - theme: brand
      text: Ver el Backlog
      link: /backlog/F-01.1
    - theme: alt
      text: Conoce al Equipo
      link: /team
    - theme: alt
      text: Ver en GitHub
      link: https://github.com/Maya-AQSS/demo

features:
  - icon: 🌿
    title: Git Flow Real
    details: Cada miembro trabaja en su propia rama feature. Los cambios se integran en develop mediante Pull Requests revisados por un compañero.

  - icon: 👀
    title: Peer Review
    details: Antes de hacer merge, un compañero revisa el PR comprobando los Criterios de Aceptación del issue. Se aprueba o se solicitan cambios con comentarios.

  - icon: ⚔️
    title: Resolución de Conflictos
    details: Varios miembros editan los mismos archivos simultáneamente. Tendrás que sincronizar tu rama con develop y resolver los conflictos de merge tú mismo.

  - icon: 📋
    title: 12 Issues Definidos
    details: 6 de prioridad Must (obligatorios) y 6 de prioridad Should (recomendados). Cada miembro asume 2 issues — uno de cada tipo.

  - icon: 📝
    title: Documentación Vitepress
    details: Este sitio es el resultado final de la práctica. Cada issue añade contenido real a las páginas del equipo usando bloques Markdown preparados.

  - icon: ✅
    title: Convención de Commits
    details: Todos los commits siguen el formato Conventional Commits — feat, fix, docs… — y referencian el issue que resuelven con "Closes #N".

---

## 🤝 Nuestro Equipo

<div class="team-card">

**<Tu emoji favorito>☕Aura <Tu Nombre>**

*"Después de un café y un paseo, seguro que lo resuelvo."*

🎯 **Especialidad:** `Bases De Datos`

</div>

## 🗺️ ¿Por dónde empiezo?

**1.** Lee el [README](https://github.com/Maya-AQSS/demo#readme) completo para entender el flujo de trabajo.

**2.** Localiza tus dos issues asignados en el [Backlog](/backlog/F-01.1).

**3.** Crea tu rama desde `develop` siguiendo la convención `feature/F-01.X-tu-alias`.

**4.** Completa el bloque preparado en el issue, haz commit y abre tu Pull Request hacia `develop`.

**5.** Asigna a un compañero como Reviewer y espera su aprobación antes de mergear.

:::tip ¿Primer conflicto de merge?
No entres en pánico. Abre el archivo en conflicto, elige qué código se queda, guarda, haz `git add .` y `git commit`. ¡Es parte de la práctica!
:::

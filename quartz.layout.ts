import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        repo: "vikrambajaj22/vikrambajaj22.github.io",
        repoId: "MDEwOlJlcG9zaXRvcnkxOTI0MzMxMjY=",
        category: "Announcements",
        categoryId: "DIC_kwDOC3hL5s4CnzvT",
        inputPosition: "top",
        strict: true,
        mapping: "pathname",
        themeUrl: "https://giscus.app/themes",
        darkTheme: "transparent_dark",
        lightTheme: "transparent_dark",
      }
    })],
  footer: Component.Footer({
    "links": {
      "LinkdIn": "https://www.linkedin.com/in/vikrambajaj22/",
      "GitHub": "https:www.github.com/vikrambajaj22",
      "X": "https://x.com/vikram_bajaj",
      "Instagram": "https://www.instagram.com/vikrambajaj22/",
      "Blog": "/blog/"
    }
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (node) => !node.file?.frontmatter?.tags?.includes("explorerExclude")
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      filterFn: (node) => !node.file?.frontmatter?.tags?.includes("explorerExclude")
    }),
  ],
  right: [],
}

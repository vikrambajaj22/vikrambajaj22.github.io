import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    "links": {
      "LinkdIn": "https://www.linkedin.com/in/vikrambajaj22/",
      "GitHub": "https:www.github.com/vikrambajaj22",
      "X": "https://x.com/vikram_bajaj",
      "Instagram": "https://www.instagram.com/vikrambajaj22/",
    }
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Explorer({
    //   filterFn: (node) => !node.file?.frontmatter?.tags?.includes("explorerExclude")
    // }),
  ],
  right: [
    // Component.Graph(),
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
    // Component.Explorer({
    //   filterFn: (node) => !node.file?.frontmatter?.tags?.includes("explorerExclude")
    // }),
  ],
  right: [],
}

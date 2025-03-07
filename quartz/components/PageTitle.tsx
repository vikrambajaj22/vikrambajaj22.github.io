import { pathToRoot, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}><img src="/static/my-images/my-notion-face-portrait.png" alt="Logo Image" class="title-image" /><br />{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}

.title-image {
  width: 4rem;
  height: 4rem;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

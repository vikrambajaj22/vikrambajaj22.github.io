import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      // Respect frontmatter flag to hide dates on a per-page basis.
      // Supported frontmatter field: `hideDates: true` (boolean or string). Dates are shown by default.
      const hideDates = fileData.frontmatter?.hideDates

      if (hideDates !== true && hideDates !== "true") {
        // Show both Written (created) and Published dates when available and different.
        const { created, published } = fileData.dates ?? {}
        const date = getDate(cfg, fileData)

        if (created && published && created.getTime() !== published.getTime()) {
          segments.push(
            <span>
              Written <Date date={created} locale={cfg.locale} /> &nbsp;•&nbsp; Published{" "}
              <Date date={published} locale={cfg.locale} />
            </span>,
          )
        } else if (date) {
          // Fallback to the configured default date type
          segments.push(<Date date={date} locale={cfg.locale} />)
        }
      }

      // Display reading time if enabled
      if (options.showReadingTime) {
        const { minutes } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        segments.push(<span>{displayedTime}</span>)
      }

      return (
        <p show-comma={options.showComma} class={classNames(displayClass, "content-meta")}>
          {segments}
        </p>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

import { remark } from "remark";
import remarkHtml from "remark-html";

export async function generateExcerpt(content: string): Promise<string> {
  // Check for explicit excerpt marker
  const excerptMarker = "<!-- endexcerpt -->";
  const excerptMarkerIndex = content.indexOf(excerptMarker);

  if (excerptMarkerIndex !== -1) {
    // Return content up to the marker
    return content.substring(0, excerptMarkerIndex).trim();
  }

  // If no marker, get the first paragraph using remark
  const processed = await remark().use(remarkHtml).process(content);

  const html = processed.toString();
  const paragraphs = html.split(/<p>/).filter(Boolean);

  if (paragraphs.length > 0) {
    const firstParagraph = paragraphs[0];
    // Remove closing </p> tag and trim
    return firstParagraph.replace(/<\/p>/, "").trim();
  }

  // Fallback to empty string if no paragraphs found
  return "";
}

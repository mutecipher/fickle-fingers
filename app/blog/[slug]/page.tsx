import moment from 'moment';
import markdownStyles from './markdown-styles.module.css'
import { getFrontmatterBySlug, getPostContentBySlug } from "../../../lib/blog";
import Tag from '../../../components/Tag';

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const frontmatter = getFrontmatterBySlug(slug);
  const content = await getPostContentBySlug(slug);

  return (
    <main>
      <div className="pb-4">
        <h1 className="text-4xl font-bold tracking-wide pb-2">{frontmatter.title}</h1>
        <p className="text-sm">{moment(frontmatter.date).format("MMMM Do, YYYY")}</p>
      </div>
      <hr />
      <div className="pt-4">
        <ul className="flex space-x-2">
          {frontmatter.tags.map((tag) => (
            <li key={tag}>
              <Tag tag={tag} />
            </li>
          ))}
        </ul>
      </div>
      <article className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}


import {prisma} from '../../lib/prisma';

export default async function Response() {
    const feed = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    return (
        feed.map((post: any) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <h3>{post?.author?.name}</h3>
            </div>
        ))
    )
    };
import Image from "next/image";

export default function Page() {
  const posts = [
  {
    id: 1,
    date: "Mar 16, 2020",
    category: "Marketing",
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi...",
    author: "Michael Foster",
    role: "Co-Founder / CTO",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5",
  },
  {
    id: 2,
    date: "Mar 10, 2020",
    category: "Sales",
    title: "How to use SEO to drive sales",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi...",
    author: "Lindsay Walton",
    role: "Front-end Developer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    id: 3,
    date: "Feb 12, 2020",
    category: "Business",
    title: "Improve your customer experience",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus...",
    author: "Tom Cook",
    role: "Director of Product",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
];

  return (
<div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-16 border-t border-gray-700 pt-10 sm:mt-16 lg:max-w-none lg:grid-cols-3">

          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col justify-between"
            >
              {/* Date + Category */}
              <div className="flex items-center gap-4 text-xs">
                <time className="text-gray-400">{post.date}</time>
                <span className="rounded-full bg-gray-800/60 px-3 py-1.5 text-gray-300">
                  {post.category}
                </span>
              </div>

              {/* Title + Description */}
              <div className="mt-3 grow">
                <h3 className="text-lg font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                  {post.description}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={post.image}
                  className="h-10 w-10 rounded-full object-cover"
                  alt={post.author}
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-gray-400 text-sm">{post.role}</p>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </div>

  )
}

import { Link } from 'react-router-dom'

export default function Template() {

return (
    <>
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Your Mental Health Matters</h1>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Resources and support for your mental well-being.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Relaxation Techniques Demo</h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Watch our video to learn simple relaxation techniques that can help you de-stress.
            </p>
          </div>
          <div className="w-full aspect-video overflow-hidden rounded-xl">
            <span className="w-full h-full object-cover rounded-md bg-muted" />
          </div>
        </div>
      </div>
      <div className="border-t border-b divide-y">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Articles</h2>
            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our collection of articles covering various mental health topics.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-start space-y-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Coping with Stress</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Simple strategies to manage stress in your daily life.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                Read Article
              </Link>
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Understanding Anxiety</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Information about different types of anxiety and available treatments.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col justify-start space-y-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Practicing Gratitude</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The benefits of gratitude and tips for incorporating it into your life.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                Read Article
              </Link>
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Seeking Help: Therapy Options</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Information about different types of therapy and how to find the right therapist.
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
          </div>
          <div className="max-w-3xl mx-auto grid gap-4 items-center justify-center md:grid-cols-2 md:gap-8 lg:max-w-5xl">
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                “The resources provided here have been invaluable in helping me better understand my mental health and
                find strategies to improve my well-being. Thank you for creating such a supportive and informative
                platform!”
              </p>
              <div className="font-medium">— Sarah, 32</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400">
                “As someone who has struggled with anxiety for years, I appreciate the practical tips and advice offered
                on this site. The articles are well-written and the information is presented in a way that is easy to
                understand.”
              </p>
              <div className="font-medium">— Alex, 28</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-gray-50 py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              If you have any questions or would like to learn more about our services, please contact us.
            </p> */}
          {/* </div> */}
          {/* <form className="mx-auto max-w-sm space-y-4">
            <Input placeholder="Enter your email" type="email" />
            <Button type="submit">Subscribe</Button>
          </form> */}
        {/* </div> */}
      {/* </div> */}
    </>
  )
}


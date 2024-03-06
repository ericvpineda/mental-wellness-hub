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
          <div>
          <a href="https://www.youtube.com/watch?v=tEmt1Znux58" target="_blank" rel="noopener noreferrer" class="block w-full aspect-video overflow-hidden rounded-xl">
              <img src="https://img.youtube.com/vi/tEmt1Znux58/maxresdefault.jpg" alt="Video Thumbnail" class="w-full h-auto" />
          </a>
          </div>
        </div>
      </div>
      <div class="border-t border-b divide-y">
        <div class="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Articles</h2>
            <p class="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our collection of articles covering various mental health topics.
            </p>
          </div>
          <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div class="flex flex-col justify-start space-y-2">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold tracking-tight">Coping with Stress</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Simple strategies to manage stress in your daily life.
                </p>
              </div>
              <a href="https://www.helpguide.org/articles/stress/stress-management.htm" target="_blank" class="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:border-blue-800 dark:focus:shadow-outline-blue dark:active:bg-blue-800">
                Read Article
              </a>
            </div>
            <div class="flex flex-col justify-start space-y-2">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold tracking-tight">Understanding Anxiety</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Information about different types of anxiety and available treatments.
                </p>
              </div>
              <a href="https://newsinhealth.nih.gov/2016/03/understanding-anxiety-disorders" target="_blank" class="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:border-blue-800 dark:focus:shadow-outline-blue dark:active:bg-blue-800">
                Read Article
              </a>
            </div>
          </div>
        </div>
        <div class="container grid items-center justify-center gap-4 px-4 text-center md:gap-8 lg:px-6">
          <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div class="flex flex-col justify-start space-y-2">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold tracking-tight">Practicing Gratitude</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  The benefits of gratitude and tips for incorporating it into your life.
                </p>
              </div>
              <a href="https://www.mindful.org/an-introduction-to-mindful-gratitude/" target="_blank" class="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:border-blue-800 dark:focus:shadow-outline-blue dark:active:bg-blue-800">
                Read Article
              </a>
            </div>
            <div class="flex flex-col justify-start space-y-2">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold tracking-tight">Seeking Help: Therapy Options</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Information about different types of therapy and how to find the right therapist.
                </p>
              </div>
              <a href="https://www.helpguide.org/articles/mental-health/finding-a-therapist-who-can-help-you-heal.htm" target="_blank" class="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:border-blue-800 dark:focus:shadow-outline-blue dark:active:bg-blue-800">
                Read Article
              </a>
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

import Tiptap from "../components/Tiptap";
import JournalSidebar from "../components/JournalSidebar";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
export default function Journal() {
  const testArticle = {
    id: 1,
    name: "Studying at Capital One",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Non sed in distinctio harum provident? Inventore accusamus porro a
    placeat nesciunt. Cupiditate nostrum nesciunt reiciendis quis quae
    non dicta pariatur blanditiis!1
    `,
    date: "February 25, 2024",
  };

  const articles = [testArticle, testArticle];

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "<h1> Tell me about your day... </h1>",
    },
  });

  const onSubmit = () => {};

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
      <JournalSidebar articles={articles} />

      {/* Note: Journal Entry  */}
      <div className="h-full w-full px-14 pt-10">
        <Form {...form} className="h-full bg-white">
          <form
            className="h-full bg-white"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-0 border-none !ring-offset-0"
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Tiptap
                      description={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        {/* <h1 className="text-center font-bold">{articles[0].name}</h1>
          <p>{articles[0].body}</p> */}
      </div>
    </div>
  );
}

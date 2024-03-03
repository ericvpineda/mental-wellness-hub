import Tiptap from "../components/Tiptap";
import JournalSidebar from "../components/JournalSidebar";
import { useForm } from "react-hook-form";
import {
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "components/ui/form";

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
      body: ""
    }
  })

  const onSubmit = () => {}

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
      <JournalSidebar articles={articles} />

      {/* Note: Journal Entry  */}
      <div className="h-full w-full bg-blue-500 px-14 pt-10">
        <Form {...form} className="h-full bg-white" onSubmit={form.handleSubmit()}>
          <form className="h-full bg-white">
            <Tiptap />
          </form>
        </Form>
          {/* <h1 className="text-center font-bold">{articles[0].name}</h1>
          <p>{articles[0].body}</p> */}
      </div>
    </div>
  );
}

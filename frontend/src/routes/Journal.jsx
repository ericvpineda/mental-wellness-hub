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
import { useEffect, useState } from "react";
import { mockArticles } from "lib/mockData";

export default function Journal() {
  const [entryIndex, setEntryIndex] = useState(0);

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // TODO: Create route to save new/updated entries to db
  const onSubmit = () => {};

  const selectEntryIndexHandler = (updatedIndex) => {
    setEntryIndex(updatedIndex);
  };

  // Update journal editor with selected journal entry
  useEffect(() => {
    form.setValue("title", mockArticles[entryIndex].title, {
      shouldDirty: true,
    });
    form.setValue("description", mockArticles[entryIndex].description, {
      shouldDirty: true,
    });
  }, [entryIndex, form]);

  return (
    <div className="h-screen w-full flex">
      {/* Note: Sidebar  */}
      <JournalSidebar
        articles={mockArticles}
        selectEntryIndex={selectEntryIndexHandler}
      />

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
      </div>
    </div>
  );
}

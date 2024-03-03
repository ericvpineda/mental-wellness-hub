import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import { Input } from "components/ui/input";
import Tiptap from "../components/Tiptap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


export default function JournalEditor({ entry, updateEntry }) {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // TODO: Create route to save new/updated entries to db
  const onSubmit = () => {};

  // Update journal editor with selected journal entry
  useEffect(() => {
    form.setValue("title", entry.title, {
      shouldDirty: true,
    });
    form.setValue("description", entry.description, {
      shouldDirty: true,
    });
  }, [form, entry]);

  return (
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
                  updateEntry={updateEntry}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}

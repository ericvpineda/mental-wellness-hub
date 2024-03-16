import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "components/ui/form";
import Tiptap from "../components/Tiptap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function JournalEditor({ entry, entryIndex, updateEntry }) {

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      description: entry.description,
    },
  });

  // TODO: Create route to save new/updated entries to db
  const onSubmit = (data) => {
    console.log("DEBUG: data=", data)
  };

  // Update journal editor with selected journal entry
  useEffect(() => {
    form.setValue("description", entry.description);
  }, [entry, form]);

  return (
    <div className="h-full w-full px-14 pt-10 bg-white">
      <Form {...form} className="h-full ">
        <form
          className="h-full bg-white"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tiptap
                    description={field.value}
                    onChange={field.onChange}
                    entryIndex={entryIndex}
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

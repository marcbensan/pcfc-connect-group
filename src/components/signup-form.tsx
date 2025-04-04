"use client";
import { sendEmail } from "@/app/actions/form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Leader } from "@/lib/types/leader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const UserSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
  phone: z.string().min(10),
  email: z.string().min(1),
  message: z.string().optional(),
  receiveEmail: z.boolean().optional(),
});

export default function SignupForm({ leader }: { leader?: Leader }) {
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      receiveEmail: false,
    },
  });

  function onSubmit(values: z.infer<typeof UserSchema>) {
    try {
      sendEmail(values, leader?.name || "-");
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full rounded-lg  border-2 p-6 m-4"
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold">Join {leader?.name}</h1>
          <p className="text-sm text-gray-700">
            {leader?.day} | {leader?.time}
          </p>
        </div>
        <hr />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input placeholder="ex. John" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input placeholder="ex. Doe" type="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Phone *</FormLabel>
              <FormControl className="w-full">
                <Input placeholder="ex. 416-123-4567" {...field} type="tel" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex. john.doe@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <hr />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comments or Questions (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know if you have any concerns.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="receiveEmail"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Receive emails from PCFC</FormLabel>
                <FormDescription>
                  I consent PCFC to send me emails regarding any news, updates,
                  and upcoming events.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <hr />
        <Button className="bg-blue-900 hover:bg-blue-950" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

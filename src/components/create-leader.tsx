"use client";
import { createLeader } from "@/app/actions/leaders";
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
import { Textarea } from "@/components/ui/textarea";
import { NewLeader } from "@/lib/types/leader";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const LeaderSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .max(20, { message: "First Name must not be over 20 characters" }),
  lastName: z
    .string()
    .min(1, { message: "First Name is required" })
    .max(20, { message: "First Name must not be over 20 characters" }),
  day: z
    .string()
    .min(1, { message: "Day is required" })
    .max(20, { message: "Day must not be over 20 characters" }),
  time: z
    .string()
    .min(1, { message: "Time is required" })
    .max(20, { message: "Time must not be over 20 characters" }),
  isOnline: z.boolean(),
  location: z
    .string()
    .min(1, { message: "Location is required" })
    .max(20, { message: "Location must not be over 20 characters" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(100, { message: "Description must not be over 100 characters" }),
  imgUrl: z.string().optional(), // Make imgUrl optional
});

export default function CreateLeader() {
  const [img, setImg] = useState<string>("");

  const form = useForm<z.infer<typeof LeaderSchema>>({
    resolver: zodResolver(LeaderSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      day: "",
      time: "",
      isOnline: false,
      location: "",
      description: "",
      imgUrl: "",
    },
  });

  const router = useRouter();

  function onSubmit(data: z.infer<typeof LeaderSchema>) {
    try {
      const leaderData: NewLeader = {
        name: `${data.firstName} ${data.lastName}`,
        day: data.day,
        time: data.time,
        isOnline: data.isOnline,
        location: data.location,
        description: data.description,
        img_url: img,
      };

      createLeader({ leader: leaderData });
      console.log("success");
      router.push("/success");
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full md:w-[40rem] rounded-lg bg-pcfcwhite text-pcfcprimary font-caption p-6 mt-4"
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-extrabold">Add a leader</h1>
        </div>
        <hr />
        <CldUploadWidget
          uploadPreset="ml_default"
          options={{ sources: ["local"] }}
          onSuccess={(result) => {
            if (
              typeof result.info === "object" &&
              "secure_url" in result.info
            ) {
              setImg(result.info.secure_url);
              form.setValue("imgUrl", result.info.secure_url);
            }
          }}
        >
          {({ open }) => (
            <>
              {img ? (
                <button
                  onClick={() => open()}
                  className="flex justify-center w-full"
                  type="button" // Add type="button" to prevent form submission
                >
                  <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="leader-pic"
                    className="size-60 rounded-full object-top object-cover"
                  />
                </button>
              ) : (
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="picture">Leader Image</Label>
                  <Button
                    onClick={() => open()}
                    variant="outline"
                    className="p-16"
                    type="button" // Add type="button" to prevent form submission
                  >
                    Upload an image
                  </Button>
                </div>
              )}
            </>
          )}
        </CldUploadWidget>

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
                <Input placeholder="ex. Doe" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Day *</FormLabel>
              <FormControl>
                <Input placeholder="ex. Sunday" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time *</FormLabel>
              <FormControl>
                <Input placeholder="ex. 6:00 PM" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location *</FormLabel>
              <FormControl>
                <Input placeholder="ex. Church" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter the description here"
                  className="resize-none "
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-pcfcprimary/60"></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isOnline"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-4">
                  <Label htmlFor="airplane-mode">Online</Label>
                  <Switch
                    id="airplane-mode"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormDescription className="text-pcfcprimary/60"></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <hr />
        <div className="flex flex-row justify-end space-x-2">
          <Button
            className="rounded-full bg-white text-pcfcprimary hover:bg-blue-950"
            onClick={() => router.back()}
            variant="secondary"
            type="button"
          >
            Cancel
          </Button>
          <Button
            className="bg-pcfcprimary rounded-full hover:bg-blue-950"
            type="submit"
          >
            Create
          </Button>
        </div>
      </form>
    </Form>
  );
}

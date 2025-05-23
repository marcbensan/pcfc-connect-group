"use client";
import { deleteLeader, updateLeader } from "@/app/actions/leaders";
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
import { MongooseLeader } from "@/lib/models/leadersModel";
import { Leader } from "@/lib/types/leader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2Icon } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
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
});

export default function EditLeader({ leader }: { leader: MongooseLeader }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [img, setImg] = useState<string>(leader?.img_url || "");
  const form = useForm<z.infer<typeof LeaderSchema>>({
    resolver: zodResolver(LeaderSchema),
    defaultValues: {
      firstName: leader?.name.split(" ")[0] || "",
      lastName: leader?.name.split(" ")[1] || "",
      day: leader?.day || "",
      time: leader?.time || "",
      isOnline: leader?.isOnline || false,
      location: leader?.location || "",
      description: leader?.description || "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof LeaderSchema>) {
    try {
      const {
        firstName,
        lastName,
        day,
        time,
        isOnline,
        location,
        description,
      } = values;

      const updatedLeader: Leader = {
        id: leader?.id,
        name: `${firstName} ${lastName}`,
        day: day,
        time: time,
        isOnline: isOnline,
        location: location,
        description: description,
        img_url: img,
      };

      updateLeader({ leader: updatedLeader });
      router.back();

      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  function handleDelete(leaderId: number) {
    try {
      deleteLeader(leaderId);
      router.back();
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
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-extrabold">Edit - {leader?.name}</h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="cursor-pointer hover:opacity-80 transition-opacity">
                <Trash2Icon className=" text-red-500" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-pcfcprimarydark text-white p-8 border-none">
              <DialogHeader>
                <DialogTitle className="font-bold">
                  Delete {leader?.name}
                </DialogTitle>
              </DialogHeader>

              <p>Are you sure you want to remove {leader?.name}?</p>

              <DialogFooter className="flex flex-row justify-end">
                <Button
                  onClick={() => handleDelete(Number(leader.id))}
                  className="px-4 py-2  text-pcfcwhite rounded-full cursor-pointer hover:opacity-80 bg-red-800 "
                >
                  Delete
                </Button>
                <Button
                  className="px-4 py-2  text-pcfcprimary rounded-full cursor-pointer hover:opacity-80 bg-pcfcwhite "
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
            }
          }}
        >
          {({ open }) => (
            <>
              {img ? (
                <button
                  onClick={() => open()}
                  className="flex justify-center w-full"
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
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
}

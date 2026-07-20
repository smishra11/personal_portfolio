"use client";

import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
            subject: "New Portfolio Contact Form Submission",
            from_name: values.name,
            ...values,
          }),
        });

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message);
        }

        toast.success("Message sent!", {
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        reset();
      } catch {
        toast.error("Unable to send message", {
          description: "Please try again in a few moments.",
        });
      }
    },
    [reset]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>

        <Input
          id="name"
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />

        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>

        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />

        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>

        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project, opportunity, or just say hello..."
          aria-invalid={!!errors.message}
          {...register("message")}
        />

        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="group mt-6 w-full cursor-pointer"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </Button>
    </form>
  );
}

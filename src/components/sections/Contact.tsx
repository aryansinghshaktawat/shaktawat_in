// src/components/sections/Contact.tsx
"use client";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

  return (
    <section id="contact" className="py-10 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 sr-only">Name</label>
              <input {...register("name", { required: true })} id="name" placeholder="Name" className="w-full p-3 bg-light-background-100 dark:bg-gray-800 border border-light-text-200 dark:border-gray-700 rounded" />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 sr-only">Email</label>
              <input {...register("email", { required: true })} id="email" placeholder="Email" className="w-full p-3 bg-light-background-100 dark:bg-gray-800 border border-light-text-200 dark:border-gray-700 rounded" />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 sr-only">Message</label>
              <textarea {...register("message", { required: true })} id="message" placeholder="Message" rows={5} className="w-full p-3 bg-light-background-100 dark:bg-gray-800 border border-light-text-200 dark:border-gray-700 rounded"></textarea>
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <button type="submit" className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
          <p className="text-lg text-light-text-200 dark:text-dark-text-200 mb-2">Email: <a href="mailto:hello@shaktawat.in" className="text-accent hover:underline">hello@shaktawat.in</a></p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/aryan-singh-shaktawat/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
            <a href="https://github.com/aryansinghshaktawat" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
            <a href="https://www.instagram.com/aryansinghshaktawat/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
    <section id="contact" className="py-20 px-4 bg-dark-background-900">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Name</label>
                <input {...register("name", { required: true })} id="name" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
                {errors.name && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input {...register("email", { required: true })} id="email" className="w-full p-2 bg-gray-800 border border-gray-700 rounded" />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea {...register("message", { required: true })} id="message" rows={4} className="w-full p-2 bg-gray-800 border border-gray-700 rounded"></textarea>
                {errors.message && <span className="text-red-500">This field is required</span>}
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl mb-4">Contact Information</h3>
            <p className="text-dark-text-200">Email: aryan@shaktawat.in</p>
            <p className="text-dark-text-200">LinkedIn: /in/aryanshaktawat</p>
            <div className="mt-4">
              <a href="/resume.pdf" download className="px-4 py-2 border border-blue-500 hover:bg-blue-500 rounded">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

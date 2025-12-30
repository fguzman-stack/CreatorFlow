import React from "react";
import { useForm } from "react-hook-form";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const onSubmit = (data: RegisterForm) => {
    // Handle register logic
    alert(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card p-8 rounded-lg shadow-md w-full max-w-md border border-border"
        aria-label="Register form"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring focus:ring-primary"
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {errors.name && <span id="name-error" className="text-destructive text-xs">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring focus:ring-primary"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && <span id="email-error" className="text-destructive text-xs">{errors.email.message}</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring focus:ring-primary"
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && <span id="password-error" className="text-destructive text-xs">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register; 
import { Button } from '@/components/ui/button';
import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="flex flex-col h-full  items-center justify-center">
      <form className="flex flex-col gap-6 p-8 w-full md:w-96 border rounded-md">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="p-2 rounded-md"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="p-2 rounded-md"
        />
        <Button formAction={login} className="mt-10">
          Log in
        </Button>
        <Button formAction={signup} className="mt-10">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

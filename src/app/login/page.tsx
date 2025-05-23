import { login } from "@/app/actions/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <form className="z-10 flex items-center min-h-screen justify-center">
      <Card className="w-[20rem] bg-pcfcwhite text-pcfcprimary font-caption my-8 py-8">
        <CardHeader>
          <CardTitle className="text-2xl font-caption">Admin Login</CardTitle>
          <CardDescription className="text-pcfcprimary/60">
            This path is only accessible for admins.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="ex. john@email.com"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-lg" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                required
                type="password"
                placeholder="Enter your Password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col w-full space-y-4">
          <Button
            type="submit"
            formAction={login}
            className="w-full bg-pcfcprimary rounded-full"
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

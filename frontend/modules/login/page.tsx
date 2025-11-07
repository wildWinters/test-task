import { RegistrationCardWrapper } from "./registration-card/registration-card-wrapper"
import { createPost } from "@/app/server/actions/create-post"

export default function Login() {

  return (
    <div className="flex items-center justify-center min-w-[100vw] min-h-screen">
      <RegistrationCardWrapper  />
    </div>
  )
}
import { ReactNode } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/shared/shad-cn/ui/dialog";

type HeaderDialogProps = {
  children: ReactNode;
  title: string;
};

export function HeaderDialog({ children, title }: HeaderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>{title}</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="text-gray-600">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

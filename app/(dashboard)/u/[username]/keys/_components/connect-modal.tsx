"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

import {
 Dialog,
 DialogClose,
 DialogContent,
 DialogTitle,
 DialogHeader,
 DialogTrigger
} from "@/components/ui/dialog"
import {
   Alert,
   AlertDescription,
   AlertTitle
} from "@/components/ui/alert"
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select"

export const ConnectModal = () =>{
    return (
    <Dialog>
        <DialogTrigger asChild>
           <Button variant="primary">
              Generate Connection
           </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Generate Connection
                </DialogTitle>
            </DialogHeader>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ingress type"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="RMTP">RMTP</SelectItem>
                    <SelectItem value="WHIP">WHIP</SelectItem>
                </SelectContent>
            </Select>
            <Alert>
                <AlertTriangle className="w-4 h-4"/>
                <AlertTitle >Warning!</AlertTitle>
                <AlertDescription>
                    This action will reset all active streams using the current Connection
                </AlertDescription>
            </Alert>
            <div className="flex justify-between">
                <DialogClose>
                    <Button variant="ghost">
                        Cancel
                    </Button>
                </DialogClose>
                <Button
                  onClick={()=>{}}
                  variant="primary">
                    Generate
                  </Button>
            </div>
        </DialogContent>
    </Dialog>
);
}
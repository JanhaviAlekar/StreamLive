"use client";

import { ElementRef, useRef, useState ,useTransition} from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

import { createIngress } from "@/actions/ingress";

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
import { IngressInput } from "livekit-server-sdk";
import { toast } from "sonner";

const RTMP = String(IngressInput.RTMP_INPUT);
const WHIP = String(IngressInput.WHIP_INPUT);

type IngressType = typeof RTMP  | typeof WHIP;

export const ConnectModal = () =>{
    const closeRef = useRef<ElementRef<"button">>(null);
    const [isPending ,startTransition] = useTransition();
    const [ingressType , setIngressType] = useState<IngressType>(RTMP);

    const onSubmit = () => {
        startTransition(()=>{
            createIngress(parseInt(ingressType))
              .then(()=>{ 
                toast.success("Ingress Created");
                closeRef?.current?.click();
            })
              .catch(() => toast.error("Something went wrong"))
        })
    }
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
            <Select
              disabled= {isPending}
              value={ingressType}
              onValueChange={(value) => setIngressType(value)} 
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Ingress type"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value={RTMP}>RTMP</SelectItem>
                    <SelectItem value={WHIP}>WHIP</SelectItem>
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
                <DialogClose ref={closeRef} asChild>
                    <Button variant="ghost">
                        Cancel
                    </Button>
                </DialogClose>
                <Button
                  disabled= {isPending}
                  onClick={onSubmit}
                  variant="primary">
                    Generate
                  </Button>
            </div>
        </DialogContent>
    </Dialog>
);
}
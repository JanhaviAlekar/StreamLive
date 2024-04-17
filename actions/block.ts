"use server";

import { blockUser, unBlockUser } from "@/lib/block-servie";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
    //todo discontinue from livestrem
    //ability to kick the guest
    try {
      const blockedUser = await blockUser(id);
  
      revalidatePath("/");
  
      if (blockedUser) {
        revalidatePath(`/${blockedUser.blocked.username}`);
      }
  
      return blockedUser;
    } catch (error) {
      throw new Error("Interal Error");
    };
  };
  
  export const onUnBlock = async (id: string) => {
    try {
      const unblockeduser= await unBlockUser(id);
  
      revalidatePath("/");
  
      if (unblockeduser) {
        revalidatePath(`/${unblockeduser.blocked.username}`)
      }
  
      return unblockeduser;
    } catch (error) {
      throw new Error("Internal Error");
    }
  }
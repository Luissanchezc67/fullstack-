import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        if (!session?.user?.email){
            return null;
        }

        const curretUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        });

        if (!curretUser){
            return null;
        }
        return curretUser;

    } catch (error: any) {
        return null;   
    }
}
 
export default getCurrentUser;
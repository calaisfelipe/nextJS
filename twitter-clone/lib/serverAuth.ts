import { getSession } from "next-auth/react";
import { NextApiRequest } from "next";
import { prismadb } from "./prisma";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not signed In");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed In");
  }

  return { currentUser };
};

export default serverAuth;

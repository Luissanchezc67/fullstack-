'use client';

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { formatDate } from "date-fns";
import { useSession } from "next-auth/react";
import { FullConversationType } from "@/app/types";
import clsx from "clsx";

interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
        selected
}) => {
    return ( 
        <div>
            Conversation Box
        </div>
     );
}
 
export default ConversationBox;
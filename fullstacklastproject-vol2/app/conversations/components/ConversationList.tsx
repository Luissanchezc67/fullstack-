'use client';

import { FullConversationType } from "@/app/types";


interface ConversationListProps{
    initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
    initialItems
}) => { 
    return ( 
        <div>
            Conversations List
        </div>
     );
}
 
export default ConversationList;
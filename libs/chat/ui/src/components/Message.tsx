import { isRole, Role, ROLE_ASSISTANT, ROLE_USER } from "@/libs/chat/domain";
import { i18n } from "@/libs/commons/ui";
import { type Message } from "ai";

interface Props {
  message: Message;
}

const classesByRole: Record<Role, string> = {
  [ROLE_USER]: "chat chat-user",
  [ROLE_ASSISTANT]: "chat chat-assistant",
};

export function Message({ message }: Props) {
  const { role, content } = message;

  if (!isRole(role)) {
    return null;
  }

  return (
    <div className={classesByRole[role]}>
      <p className="role">{i18n.chat.roles[role]}</p>
      <p className="p-2 content">
        <span>{content}</span>
      </p>
    </div>
  );
}

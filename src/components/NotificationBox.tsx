import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Notification {
  id: number;
  message: string;
}

interface NotificationBoxProps {
  onNotificationCountChange: (count: number) => void;
  onClick: () => void;
}

function NotificationBox({ onNotificationCountChange, onClick }: NotificationBoxProps) {
  const [messages, setMessages] = useState<Notification[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/events');

    eventSource.onopen = () => {
      setError(null);
    };

    eventSource.onmessage = (event: MessageEvent) => {
      const eventData = JSON.parse(event.data);
      const newNotification: Notification = {
        id: Date.now(),
        message: eventData.message,
      };
      setMessages((prevMessages) => [...prevMessages, newNotification]);
    };

    eventSource.onerror = (err) => {
      setError(`실시간 알림 연결에 문제가 발생했습니다.\n${err}`);

      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  useEffect(() => {
    onNotificationCountChange(messages.length);
  }, [messages, onNotificationCountChange]);

  return (
    <div>
      <Title>
        <h1>수신함</h1>
        <div>
          <button type="button">모두 읽음 표시</button>
          <button type="button">모두 삭제</button>
          <i onClick={onClick} className="fa-solid fa-angles-left" />
        </div>
      </Title>
      {error && <p>{error}</p>}
      <ul>
        {messages.map((notification) => (
          <List key={notification.id}>수신: {notification.message}</List>
        ))}
      </ul>
    </div>
  );
}

export default NotificationBox;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f0f0f0;

  & h1 {
    font-size: 1.3rem;
    font-weight: 600;
    padding: 20px;
  }

  & button {
    cursor: pointer;
    background-color: var(--gray-100);
    border: none;
    border-left: 2px solid #f0f0f0;
    padding: 0px 10px;
    height: 100%;

    &:hover {
      filter: brightness(95%);
    }
  }

  & i {
    padding: 0px 20px;
    font-size: 1.4rem;
  }
`;

const List = styled.li`
  padding: 20px;
  border-bottom: 2px solid #f0f0f0;
`;

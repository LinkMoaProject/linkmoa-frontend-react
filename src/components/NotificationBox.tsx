import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  message: string;
}

function NotificationBox() {
  const [messages, setMessages] = useState<Notification[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3000/events');

    eventSource.onopen = () => {
      console.log('SSE 연결 성공');
      setError(null);
    };

    eventSource.onmessage = (event: MessageEvent) => {
      console.log('받은 메세지: ', event);
      const eventData = JSON.parse(event.data);
      const newNotification: Notification = {
        id: Date.now(),
        message: eventData.message,
      };
      console.log('newNotification: ', newNotification);
      setMessages((prevMessages) => [...prevMessages, newNotification]);
    };

    eventSource.onerror = (err) => {
      console.error('SSE 에러:', err);
      setError('실시간 알림 연결에 문제가 발생했습니다.');

      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  return (
    <div>
      <h2>실시간 알림</h2>
      {error && <p>{error}</p>}
      <ul>
        {messages.map((notification) => (
          <li key={notification.id}>수신: {notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationBox;

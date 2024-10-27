import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reissue = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        console.log('===== Login step1) axios call to backend =====');
        console.log('> URL: ', process.env.LOGIN_AXIOS_URL);
        const response = await axios.post(
          process.env.LOGIN_AXIOS_URL || 'http://localhost:8080/api/jwt/access-token',
          {},
          {
            withCredentials: true,
          },
        );

        const accessToken = response.headers.authorization?.split(' ')[1];

        if (accessToken) {
          localStorage.setItem('access_token', accessToken);

          navigate('/mainpage');
        }
      } catch (error) {
        console.error('Access token을 가져오는 데 실패했습니다:', error);
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return <div>토큰을 재발급 중입니다...</div>;
};

export default Reissue;

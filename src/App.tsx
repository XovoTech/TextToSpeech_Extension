import React, { useEffect } from 'react';
import { Button, Input } from 'forging-react';
import styles from './app.module.css'

function App() {

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(parseFloat(`${tabs[0].id}`), { action: "read_csrf_token" });

      chrome.runtime.onMessage.addListener(function (request) {
        if (request.action == "csrf_element") {
          // setCSRFToken(request.csrf_token);
          localStorage.setItem("csrf_token", request.csrf_token);
        }
      })
    });
  }, []);

  const onLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      try {
        const formData = new FormData(e.target);
        formData.append("username", "test");
        formData.append("password", "test");
        formData.append("csrf_test_name", localStorage.getItem("csrf_token") || "");

        const response = await fetch('https://blakify.com/auth/signin_action/', {
          body: formData,
          method: "POST",
        });

        console.log(await response.text());

      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <form onSubmit={onLogin} className={styles.main_container}>
      <h4 className='text-center'>Blakify</h4>
      <Input type='floating' name="" label="Email or Username" placeholder="Enter username or email address..." />
      <Input type='floating' name="" label="Password" htmlType="password" placeholder='Password' />
      <Button htmlType='submit' block className='w-100 my-2'>Sign In</Button>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <a className='btn btn-link'>
          Sign up
        </a>
        <a className='btn btn-link'>
          Forgot Password?
        </a>
      </div>
    </form>
  );
}

export default App;

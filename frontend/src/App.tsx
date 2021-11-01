import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";

import style from './App.module.scss'

export function App() {
  return (
    <div className={style.contentWrapper}>
      <MessageList />
      <LoginBox />
    </div>
  )
}

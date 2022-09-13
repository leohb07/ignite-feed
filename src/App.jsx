import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Leonardo Barrocal" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sit officia eligendi in quas sunt obcaecati eveniet magnam, quisquam nam exercitationem quis ipsum beatae ab animi libero, dolores eius dicta."
          />
          <Post 
            author="Leonardo Barrocal" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sit officia eligendi in quas sunt obcaecati eveniet magnam, quisquam nam exercitationem quis ipsum beatae ab animi libero, dolores eius dicta."
          />
        </main>
      </div>
    </div>
  );  
}


import { faker } from "@faker-js/faker";
import styles from "./Home.module.css";

export default function Home() {
  const randomName = faker.name.firstName();
  
  const handle = () => console.log('Enter pressed');
  return (
    <div className={styles.home}>
      <p>{randomName}, are you ready?</p>
      <span onKeyDown={e => e.key === 'Enter' && handle}>START!</span>
    </div>
  );
}

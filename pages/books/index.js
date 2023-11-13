import styles from "../../styles/ninjas.module.css"
import Link from "next/link";


const Books = ({books}) => {
    return ( 
    <div>
        <h1>Books</h1>
        {books.map(book => (
        <Link legacyBehavior href={'/books/' + book.id} key={book.id}>
          <a className={styles.single}>
            <h3>{ book.name }</h3>
          </a>
        </Link>
      ))}
    </div> );
}
 
export default Books;

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  console.log(data)

  return {
    props: {books:data}
  }
}
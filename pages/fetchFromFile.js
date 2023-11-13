import Head from 'next/head'

export default function Home(props) {
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>Test getting from file</title>
      </Head>
      <div>
        <h>{props.title}</h>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'pages/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
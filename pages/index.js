import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"></script>

<script>
    

    
const url = "https://www.yahoo.com";

    
    response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  
  console.log('response is ', response);


</script>
    
    
        <p className="description">
          david 3<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

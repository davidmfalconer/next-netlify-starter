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
    
const url = "https://asjmjwqroopycagralvg.supabase.co/rest/v1/frontdoortvtable";

axios.get(url).then(function (response) {
  // handle success
  console.log('daviidaddavdi ',response);
    
  const ipAddy = response.data[response.data.length-1].notes;

 window.location.href=`http://${ipAddy}:5000/mobile`;

})


</script>
    
    
        <p className="description">
          david 3<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

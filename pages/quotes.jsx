import MainLayout from "../component/MyLayout"
import useSwr from 'swr'

function fetcher(url) {
    return fetch(url).then((r) => {
        return r.json();
    })
}

function Quotes () {
    const {data,error} = useSwr('/api/randomQuote',fetcher);
    const author = data?.from;
    let quote = data?.text;

    if(!data) quote = 'Loading ....'
    if(error) quote = 'Failed to fetch the quote'
    return (
        <MainLayout>
        <h1>Quotes of the Day</h1>
        <div className="quote">{quote}</div>
    {author && <span className="author">By : {author}</span>}
    <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
        </MainLayout>
    )
}

export default Quotes;
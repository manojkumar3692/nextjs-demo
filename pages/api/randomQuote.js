import quotes from '../../quote.json'

export default (req,res) => {
   const quote = quotes[Math.floor(Math.random() * quotes.length)];
   console.log('Quote',quote)
   res.status(200).json(quote)
};
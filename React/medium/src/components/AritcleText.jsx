
export default function AritcleText() {

    const articleText =[{
        title:'2022: The year that changed the way we work',
        text:'Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…',
        img:'https://miro.medium.com/max/1400/0*DKZ3llT04TvWZlLh.webp'

    },
    {
        title:'AI: Science Fiction vs Reality',
        text:'Will AI fully exit the realm of science fiction and begin to change everything? — Now that everyone is talking about ChatGPT, I’m finding myself dodging some version of this question more often: “Will AI fully',
        img:'https://miro.medium.com/max/1400/1*IODA6FO8_7mtqSX8KyWt-Q.webp'

    },{
        title:'Introducing ChatGPT!',
        text:'The Revolutionary New Tool for Conversation Generation — Today, I want to demystify ChatGPT — a fascinating new application of GANs* (Generative Adversarial Networks) that has been generating a lot of buzz in the AI…',
        img:'https://miro.medium.com/max/1400/0*Nz897vaKH2yJhSQJ'

    },{
        title:'Overusing the Term “Statistically Significant” Makes You Look Clueless!',
        text:'A primer on interpreting other people’s hypothesis tests — If you’re in the market for a new tongue-twister, try this paraphrase of a classic: “The difference between statistically significant and statistically non-significant is not necessarily significant.” As a recovering statistician, I have the pleasure of knowing many data experts and the displeasure of meeting a lot of posers. Though…',
        img:'https://miro.medium.com/max/1400/1*EKk98O481dpu1ATMxOrPXQ.webp'
    },{
        title:'Why is MSE = Bias² + Variance?!',
        text:'Introduction to “good” statistical estimators and their properties — The bias-variance tradeoff “The bias-variance tradeoff” is a popular concept you’ll encounter in the context of ML/AI. In building up to making it intuitive, I figured I’d give the formula-lovers among you a chatty explanation of where this key equation comes from: MSE = Bias² + Variance Well, this article isn’t only about…',
        img:'https://miro.medium.com/max/1400/0*eN-UirNS0GIn4mgV'
    }]
  return (
    <>
    {articleText.map((item,index)=>(

    <div className="row">
        <div className="col-8">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>
        <div className="col-4">
            <img src={item.img} key={index} alt="" />
        </div>
    </div>
    ))}
    </>

  )
}

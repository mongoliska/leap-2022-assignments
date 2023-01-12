
export default function AritcleText() {

    const articleText =[{
        title:'2022: The year that changed the way we work',
        text:'Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…',
        img:'https://miro.medium.com/fit/c/400/268/1*IPZF1hcDWwpPqOz2vL7NxQ.png'

    },
    {
        title:'2022: The year that changed the way we work',
        text:'Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…',
        img:'https://miro.medium.com/fit/c/400/268/1*IPZF1hcDWwpPqOz2vL7NxQ.png'

    },{
        title:'2022: The year that changed the way we work',
        text:'Remember 2020? So many of us thought that was going to be the big one for the way we work. I thought it would be the year that changes productivity forever. And in many ways it was; it forced us to spring clean our dusty attic of beliefs about what…',
        img:'https://miro.medium.com/fit/c/400/268/1*IPZF1hcDWwpPqOz2vL7NxQ.png'

    },]
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

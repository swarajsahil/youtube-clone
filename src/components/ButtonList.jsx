import Button from "./Button";

const ButtonList = () => {
    const list=["All","music","Live","Watched","Recently uploaded","New to you","Computer Programming","Bollywood Music"];
  return (
    <div className="flex flex-wrap gap-1 mt-1">
        {
            list.map((item,i)=><Button key={i} name={item}/>)
        }
    </div>
  )
}

export default ButtonList
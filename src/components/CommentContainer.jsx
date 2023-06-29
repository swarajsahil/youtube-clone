const commentData=[{
    name:"swaraj",
    text:"very good video",
    reply:[{
        name:"sahil",
        text:"👌",
        reply:[{
            name:"Ankit",
        text:"😁",
        }]
    }]
},{
    name:"unknown",
    text:"nice video",
    reply:[{
        name:"anonymous",
        text:"👌",
        reply:[{
            name:"binod",
        text:"😁",
        }]
    }]
},
{
    name:"unknown",
    text:"nice video",
    reply:[{
        name:"anonymous",
        text:"👌",
        reply:[{
            name:"binod",
        text:"😁",
        }]
    }]
},
]

const Comment = ({data}) => {
    const {name,text}=data;
    // console.log(name);
    return (
      <div className="flex items-center w-96 h-16 bg-gray-200 rounded-lg">
      <img className="w-6 h-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&usqp=CAU" alt="profile" />
      <div className="px-2">
      <p>{name}</p>
      <p>{text}</p></div>
      </div>
    )
  }
const CommentsList=({info})=>{
    return  info && info.map((comment,i)=>(
        <div key={i} className="py-1">
            <Comment  data={comment}/>
            <div className="pl-2 border border-l-black ml-5">
            <CommentsList info={comment?.reply}/>
            </div>
            </div>
    ))
}
const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
    <h1 className="text-2xl font-bold">Comments</h1>
    <CommentsList info={commentData}/>
    </div>
  )
}

export default CommentContainer
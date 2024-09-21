


const commentData = [

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: [{name: "Ankish Sharma",
            text: "Yeah dude",
            replies: [{name: "Ankish Sharma",
                text: "Agreed!",
                replies: []
        
            },
            {name: "Ankish Sharma",
                text: "This video is freaking amazing",
                replies: []
        
            },
            {name: "Ankish Sharma",
                text: "I am not sure about that",
                replies: [{name: "Ankish Sharma",
                    text: "Really?",
                    replies: []
            
                },
                {name: "Ankish Sharma",
                    text: "This is the best",
                    replies: [{name: "Ankish Sharma",
                        text: "yes!",
                        replies: [{name: "Ankish Sharma",
                            text: "Sounds good to me",
                            replies: []
                    
                        },]
                
                    },]
            
                },]
        
            },
        ]
    
        },
        {name: "Ankish Sharma",
            text: "This video is freaking amazing",
            replies: []
    
        },
        {name: "Ankish Sharma",
            text: "This video is freaking amazing",
            replies: []
    
        },
        {name: "Ankish Sharma",
            text: "This video is freaking amazing",
            replies: [{name: "Ankish Sharma",
                text: "This video is freaking amazing",
                replies: []
        
            },
            {name: "Ankish Sharma",
                text: "This video is freaking amazing",
                replies: []
        
            },]

    
        },]

    },

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: []

    },

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: []

    },

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: []

    },

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: []

    },

    {name: "Ankish Sharma",
        text: "This video is freaking amazing",
        replies: []

    },
]

const Comment = ({data})=>{
    const {name, text, replies} = data;

    return(
        <div className="bg-gray-100">
           
                <div className="px-3 py-2  mt-2 mb-2">
                    <div className="flex ">
                    <img className="w-5 h-5" src="https://as2.ftcdn.net/v2/jpg/07/95/95/13/1000_F_795951374_QR1tADRPLjbh0NqrJqLPbzOTHJW5HjmY.jpg" alt="face-logo"></img>
                        <p className="font-bold">{name}</p>
                    </div>
                    <p>{text}</p>
                </div>
        
        </div>
    )
}

const CommentList =({comments}) =>{
    // do not use index as key while using map
    return (comments.map((comment, index)=> (
        <div key={index}>
        <Comment  data={comment}/>
          <div className="pl-5 border-l-2 border-gray-400">
            <CommentList  comments={comment.replies} />
           </div>
        </div>
   ) )
)}

const CommentContainer = ()=>{

    return (
        <div>
            <CommentList comments= {commentData} />
        </div>
    )

}

export default CommentContainer;
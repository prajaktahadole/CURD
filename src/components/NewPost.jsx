import React , {useState, useEffect} from "react";
import { addDoc, collection } from "firebase/firestore";        //  addDoc allow to add doc in db
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


export const NewPost = ({isAuth}) => {

    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    // const [imag, setImag] = useState(null);


    const postCollectionsReference = collection(db, "posts")    // this reference take 2 different arguments, 1st- db from firebase.
                                                                //2-reference to which collection taking about - here it is posts which i created in firebase.
    let navigate = useNavigate();
    const CreatePost =async () =>{       //CreatePost submit data to the firestore and stores in db
                                         // asynchronus in order to keep track of data.

           await addDoc(postCollectionsReference, {  // addDoc take 2 different arguments, 1st- Reference to Collection.
          
            title,                //2-data that we wanna add.
            caption, 
            // imag, 
            author :{name : auth.currentUser.displayName, id :auth.currentUser.uid }
        } );
        navigate("/");     
    }

    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }
      }, []);


    return (
        <div className="main">
            <div className="insidemain"></div>
            <h1>New Post</h1>

            <div className="inputdiv">
                <h3>Title : </h3>
                <input placeholder="Title.." 
                    onChange={(event) =>                        
                    {setTitle(event.target.value)}
                }></input>
            </div>

            <div className="">
                <h3>Caption :</h3>
                <textarea placeholder="Caption.."
                 onChange={(event) =>                        
                    {setCaption(event.target.value)}
                }></textarea>
            </div>

            {/* <div className="">
            <h3>Image :</h3>
            <input
                    type="file"
                    onChange={(event) => {
                    setImag(event.target.files[0]);
                    }}
                />
            </div> */}


            <button onClick={CreatePost}>Create Post</button>


        </div>
    )
}
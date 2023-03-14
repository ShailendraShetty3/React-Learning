import { useState } from 'react'; //hook

const Home= () => {
    const [blogs, setBlogs]= useState([
        {title: 'My new website', body: 'loream ipsum...', author: 'mario', id: 1},
        {title: 'Party', body: 'loream ipsum...', author: 'koshi', id: 2},
        {title: 'Tips', body: 'loream ipsum...', author: 'mario', id: 3}
    ]);
    return(
        <div className="home">
            {blogs.map((blog) =>(  //using map in js
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;










// const Home= () => {

//     const handleClick =() =>{
//         console.log('hello, ninjas');
//     }
//     const handleClickAgain =(name) =>{
//         console.log('hello '+ name);
//     }

//     return(
//         <div className="home">
//             <h2>Home</h2>
//             <button onClick={handleClick}>Click</button>
//             <button onClick={() => {
//                 handleClickAgain('mario')
//             }}>Click me again</button>
//         </div>
//     );
// }



// const Home= () => {
//     //let name= 'mario';
//     const [name, setName]= useState('mario'); //usestate(hook)
//     const[age, setAge]=useState(25);

//     const handleClick =() =>{

//        // name = 'luigi';
//        setName('luigi');  //setname is updated by luigi onClick
//        setAge(30);
//        //console.log(name);
//     }
//     return(
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old</p>
//             <button onClick={handleClick}>Click</button>
//         </div>
//     );
// }
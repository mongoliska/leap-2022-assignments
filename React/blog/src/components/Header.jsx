import { useState } from "react"

export default function Header () {
const [categories, setCategories] = useState([]);

useEffect (() => {
    fetch('https://demo-api-one.vercel.app/api/categories')
    .then((res) => res.json())
    .then((data) => {
        setCategories(data.body);
    });
}, []);
return (
    <>
    <header>
        
    </header>
    </> 
    )

}
    
  
import React, {useState, useEffect} from "react";
import { getFirestore } from '../firebase/getFirebase';
import Categories from '../Components/Categories/Categories'

const CategoryContainer = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const category = db.collection("categories");
      const getCategories = category.get();
      const sectionObj = {};
      getCategories
      .then((cat)=>{
          cat.docs.map((doc)=>{
            const parent = doc.ref.parent.id;
            sectionObj[parent] = []
          })
          cat.docs.map((doc)=>{
            const parent = doc.ref.parent.id;
            sectionObj[parent].push({
              id: doc.id,
              items: [],
              parent: parent,
              ...doc.data(),
            })
          })  
          setCategorias(sectionObj);
          })
     }, [])  
  
    return (
          <Categories list={categorias}/>
    )
}

export default CategoryContainer;
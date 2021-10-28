import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/getFirebase';
import Categorie from '../Components/Categorie/Categorie'

const CatContainer = () => {

    const { id } = useParams();
    const [items, setItems] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        let items = db.collection('items');
        let query = items.where("categoryId", "==", id);
        query.get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data!');
                }
                const queryItems = querySnapshot.docs.map(doc => {
                    return ({ id: doc.id, ...doc.data()});
                })
                setItems(queryItems);
            })
        setLoading(false);
    }, [id]);

    return (
            <Categorie loading={loading} items={items}/>
    )
}

export default CatContainer;
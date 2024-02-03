import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";


async export function addClientToFireStore=(name:string, address:string):boolean=>{
    try{
        const docRef=await addDoc(collection(db,"client"),{name:name, address:address});
        console.log('doc written with id', docRef.id);
        return true;
    }
    catch(error){
        console.error('Error adding document', error);
        return false;
    }
}
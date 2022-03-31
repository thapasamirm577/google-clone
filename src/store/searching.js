import { API_KEY, CONTEXT_KEY} from '../key';

export const searching = async(value)=>{
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${value}`)
    .then(res=>res.json())
    .then(result=>{ return result})
    console.log(data);
    
    return { data };
} 
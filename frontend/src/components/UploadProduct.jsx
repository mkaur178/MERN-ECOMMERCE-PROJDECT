
import { useState } from 'react'
import React from 'react'
import axios from "axios";

const UploadProduct = () => {
  const [input, setInput] = useState({})
  const [selectedfile , setSelectedfile] = useState(null);
  const [imgurl, setImgurl] = useState("");

  const handleFileChange=(e)=>{
    setSelectedfile(e.target.files[0]);
  }

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}))

  }

  const handleSubmit= async(e)=>{
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append('file', selectedfile);
      formData.append('upload_preset', 'clmqubbe')
      formData.append('cloud_name' , 'dm0uzovbl')
      const response= await axios.post('https://api.cloudinary.com/v1_1/dm0uzovbl/image/upload', formData)
      console.log('image upload:' , response.data)
      console.log('image upload:' , response.data.url)
      setImgurl(response.data.url)
      // let input2 = {...input , imgpath:response.data.url};
      await axios.post('http://localhost:8000/product/productsave' , {...input,["imgpath"]:response.data.url}).then((res)=>{
        alert('Data successfully uploaded')
      })


}
    catch(error){
      console.error('Error uploading image:',error)

    }
}

  return (
    <>


   

    <h1 className='upload'>Upload Product </h1>

    <div className='uploadproduct'>

      <input type='text' placeholder='Product name' name='pname' value={input.pname} onChange={handleInput}/><br/><br/>

      <input type='text' placeholder='Product Description' name='description' value={input.description} onChange={handleInput}/><br/><br/>

   <label for="category" id='category-1'>Catogory</label><br/><br/>
     <select id='category' name='category' value={input.category} onChange={handleInput}>
      <option value="pillow">Pillow</option>
      <option value="Mattress">Mattress</option>
      <option value="Sheets">Sheets</option>
     </select><br/><br/>
     
     <label for="tags" id='tags-1'>Tags</label><br/><br/>
     <select id='tags' name='tags' value={input.tags} onChange={handleInput}>
     <option value="other">other product</option>
      <option value="lovingproduct">Loving Product</option>
      <option value="featured">Featured Product</option>
     </select><br/><br/>

      <input type='text' placeholder='Product price' name='price' value={input.price} onChange={handleInput}/><br/><br/>
      <input type='file' placeholder='Product image' id='file' onChange={handleFileChange}/><br/>

      <button onClick={handleSubmit}>Submit</button>
</div>
      
    </>
  )
}

export default UploadProduct



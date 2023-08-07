import { getPlaiceholder } from "plaiceholder";

 const getBufferedUrl = async (url:any) => {
  try {
    const res = await fetch(url)

    if(!res.ok){
      throw new Error('Failed to fetch Image')
    }

    const buffer = await res.arrayBuffer()
    const {base64} = await getPlaiceholder(Buffer.from(buffer))

    console.log(`base64: ${base64}`)
    return base64


  } catch (err) {
    console.log(err);
  }
};


export default getBufferedUrl
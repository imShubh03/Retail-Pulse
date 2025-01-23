import axios from "axios";
import sharp from "sharp";

export const processImage = async(url) => {
    try {
        const response = await axios.get(url, { 
            responseType: 'arraybuffer' 
        });

        const metadata = await sharp(response.data).metadata();

        const perimeter = 2 * (metadata.height + metadata.width);
        // simulate GPU delay
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 300 + 100)); 

        return { url, perimeter };
        
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error:'Internal server error'
        });
    }   
}
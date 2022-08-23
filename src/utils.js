export const AllProducts = "https://course-api.com/react-store-products"
export const SingleProducts = "https://course-api.com/react-store-single-product?id="
export const uniqueValues = (data, category) =>{
    let values = data.map(item => item[category])
    if (category === "colors"){
        values = values.flat()
    }
    let unique = new Set(values)
    return ["all", ...unique]
}
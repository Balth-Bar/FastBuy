const url = "https://dummyjson.com/products"

export const getProducts = async () => {

    return fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(res => res)
        .catch((error) => console.log(error));
}


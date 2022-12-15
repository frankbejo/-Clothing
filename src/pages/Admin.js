import { StyledAdmin } from "../theme";
const Admin = () => {

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        const input = {
                category: e.target.category.value,
                itemname: e.target.itemname.value,
                product_image: e.target.product_image.value,
                price: e.target.price.value,
                fit: e.target.fit.value,
                composition: e.target.composition.value,
                designer: e.target.designer.value,
                ishot: e.target.ishot.value,
                type: e.target.type.value,
                sizes: [
                    {
                    size: e.target.size.value,
                    dimension: e.target.dimension.value
                    }
                ]
        }
        const data = {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        }
        
        fetch("https://uninterested-carpenter-production.up.railway.app/products", data).then(res => {
            console.log(res)
        })

        console.log()
    }
    return(
        <StyledAdmin>
        <section className="admin">
            <form action="/" onSubmit={HandleFormSubmit}>
                <input type="text" name="category" id="category" required/>
                <label htmlFor="category">Category</label>
                <input type="text" name="itemname" id="itemname" required/>
                <label htmlFor="itemname">Itemname</label>
                <input type="text" name="product_image" id="product_image" required/>
                <label htmlFor="product_image">Image Link</label>
                <input type="number" name="price" id="price" required/>
                <label htmlFor="price">Price</label>
                <input type="text" name="fit" id="fit" required/>
                <label htmlFor="fit">Fit</label>
                <input type="text" name="composition" id="composition" required/>
                <label htmlFor="composition">Composition</label>
                <input type="text" name="designer" id="designer" required/>
                <label htmlFor="designer">Designer</label>
                <input type="radio" name="ishot" id="ishot" value="true" />
                <input type="radio" name="ishot" id="ishot" value="false"/>
                <label htmlFor="ishot">Is Hot?</label>
                <input type="text" name="type" id="type" required />
                <label htmlFor="type">Type</label>
                <input type="text" name="size" id="size" required/>
                <label htmlFor="size">Size</label>
                <input type="text" name="dimension" id="dimension" required/>
                <label htmlFor="dimension">Dimension</label>
                <button type="submit">Submit</button>
            </form>
        </section>
        </StyledAdmin>
    )
}

export default Admin;